import React, { useState } from 'react'
import { useRouter } from 'next/router';
// import { db } from "../firebase-config";
import { db,storage } from "../../firebase-config";
import {ref,uploadBytes} from "firebase/storage";
import { collection, getDocs, addDoc, doc, updateDoc, deleteDoc } from "@firebase/firestore"
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEye} />;

function Contact() {
    const router = useRouter();
    const userCollectionRef = collection(db, "registerUser");
    const [imageUpload,setImageUpload]=useState(null);
    const { register, handleSubmit,formState:{errors} } = useForm();
    // const onSubmit = data => console.log(data);
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisiblity = () => {
      setPasswordShown(passwordShown ? false : true);
    };


        const createUser = async (event) => {

            event.preventDefault();
            const firstname = event.target.firstname.value
            const lastname = event.target.lastname.value
            const email = event.target.email.value
            // const btype=event.target.btype.value
            const address=event.target.address.value
           
            // validation remaining
            const password = event.target.password.value

            const aadharId = event.target.aadharId.value
            const aadharCard = event.target.aadharCard.value
            const phase1status=0;
            const phase2status=0;
            const employee=0;
            const btype="null";
         

            await addDoc(userCollectionRef, { fname: firstname,lname:lastname,businessEmail:email,aadharId:aadharId,address:address,password:password
                ,aadharCard:aadharCard,phase1status:phase1status,phase2status:phase2status,employee:employee,btype:btype });
            
                    if(imageUpload===null){
                        alert("Please Upload your Aadhar Card ");
                        return;
                    }
                    else{
                            const imageRef=ref(storage,`userAadhar/${aadharId}`);
                            await uploadBytes(imageRef,imageUpload).then(()=>{
                            alert("Your Aadhar Card is Uploaded ");
                        });
                    }
                    
            
                
            alert('You have Successfully Reg. on Business Certificate License Portal');
            router.push('/');

    
        };
       
      

    return (
        <div className='mt-8 signupbody'>
            <form className="signup-form" method="post"  onSubmit={(e) => {
      handleSubmit(createUser)(e)
      // you will have to catch those error and handle them
      .catch(() => createUser(e));
    }} >
                <div className="form-header" style={{ textAlign: 'center' }}>
                    <h1>Create Account</h1>
                </div>
                <div className="form-body">
                    <div className="horizontal-group">
                        <div className="form-group left">
                            <label  className="label-title">First name<span className='text-red-600'> *</span></label>
                            <input type="text" name='firstname' {...register("firstname", { required: true, maxLength: 20 })} id="firstname" className="form-input" placeholder="Enter owner's first name" required="required" />
                            {errors.firstname && <p className='text-red-600'>*FirstName must be less than 20 Chars</p>}
                        </div>
                        <div className="form-group right">
                            <label  className="label-title">Last name</label>
                            <input type="text" {...register("lastname", { required: true, maxLength: 20 })} id="lastname" className="form-input" placeholder="Enter owner's last name" />
                            {errors.lastname && <p className='text-red-600'>*LastName must be less than 20 Chars</p>}
                        </div>
                    </div>
                    <div className="form-group">
                        <label  className="label-title">Business Email<span className='text-red-600'> *</span></label>
                        <input type="email" {...register('email', { pattern: /[a-zA-Z0-9_\.\+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-\.]+/gm })} id="email" className="form-input" placeholder="enter your email" required="required" />
                        {errors.email && <p className='text-red-600'>*Enter Business Email ID</p>}
                    </div>
                   
                
                    {/* <div className="form-group left">
                        <label className="label-title">Business Type</label>
                        <div className="input-group"  >
                            <label  className='mr-4'><input type="radio" name="btype" value="small" id="small"  /> Small</label>
                            <label><input type="radio" name="btype" value="medium" id="medium" /> Medium</label>
                            <label><input type="radio" name="btype" value="large" id="large" /> Large</label>
                        </div>
                    </div> */}
                    <div className="form-group right">
                            <label  className="label-title">Address</label>
                            <input type="text" id="address" className="form-input" placeholder="Enter your Business Address" />
                        </div>
                    <div className="horizontal-group">
                        <div className="form-group left">
                            <label className="label-title">Password<span className='text-red-600'> *</span></label>
                            <input  id="password" className="form-input" placeholder="Enter your password" required="required" 
                                    type={passwordShown ? "text" : "password"}
                                    {...register("password", { required: true})}
                                />
                                {errors.password && <p className='text-red-600'>Enter Password<span className='text-red-600'> *</span></p>}
                        </div>
                        <div className="form-group right pt-8">
                            
                            {/* <label className="label-title">Confirm Password *</label>
                            <input type="password" className="form-input" id="confirmpassword" placeholder="enter your password again" required="required" /> */}
                            <span className='eye'><i onMouseEnter={togglePasswordVisiblity} onMouseLeave={togglePasswordVisiblity}>{eye}</i></span>
                        </div>

        
                         <div className="form-group">
                        <label className="label-title left">Aadhar Number<span className='text-red-600'> *</span></label>
                        <input type="number" {...register('registerID', { pattern: /[0-9]{12}/gm })} id="aadharId" className="form-input" placeholder="Enter Owner's 12 Digit Aadhar ID " required="required" />
                        {errors.registerID && <p className='text-red-600'>*Enter Valid 12 Digit ID</p>}
                    </div>
                        <div className="horizontal-group">
                            <div className="form-group left pt-5" >
                                <label  className="label-title">Upload Aadhar Card <span className='text-red-600'> *</span></label>
                                <input className=" pt-2" type="file" id="aadharCard" name="aadharCard" size="80" onChange={(event)=>{setImageUpload(event.target.files[0])}} />
                            </div>
                         
                        </div>
                        <div className="form-footer">
                            <button type="submit" className="btn">Register</button>
                            <span>*Required</span>
                        </div>
                    </div>



                </div>
            </form>

        </div>
    )
}

export default Contact;