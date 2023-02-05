import { UserContext } from "../../../context/UserContext";
import { useContext, useState } from "react";
import { storage } from "../../../firebase-config";
import { ref, uploadBytes } from "firebase/storage";
// const docs = [
//   {
//     id: 1,
//     name: "Aadhar Card",
//   },
//   {
//     id: 2,
//     name: "Residence certificate",
//   },
//   {
//     id: 3,
//     name: "Nationality Certificate",
//   },
//   {
//     id: 4,
//     name: "NOC (No Objection Certificate)",
//   },
// ];

const microdocs = () => {
  const { indiUser } = useContext(UserContext);
  const [Doc1Upload, setDoc1Upload] = useState(null);
  const [Doc2Upload, setDoc2Upload] = useState(null);
  const [Doc3Upload, setDoc3Upload] = useState(null);
  const [Doc4Upload, setDoc4Upload] = useState(null);
  const [Doc5Upload, setDoc5Upload] = useState(null);
  const [Doc6Upload, setDoc6Upload] = useState(null);
  const [Doc7Upload, setDoc7Upload] = useState(null);
  const [Doc8Upload, setDoc8Upload] = useState(null);
  const [Doc9Upload, setDoc9Upload] = useState(null);
  const [Doc10Upload, setDoc10Upload] = useState(null);

  const handleSubmit = async () => {

    const imageRef1 = ref(storage, `mediumDocs/${indiUser}/doc1`);
    await uploadBytes(imageRef1, Doc1Upload).then(() => {
      alert("Your Doc1 is Uploaded ");
    });
    const imageRef2 = ref(storage, `mediumDocs/${indiUser}/doc2`);
    await uploadBytes(imageRef2, Doc2Upload).then(() => {
      alert("Your Doc2 is Uploaded ");
    });
    const imageRef3 = ref(storage, `mediumDocs/${indiUser}/doc3`);
    await uploadBytes(imageRef3, Doc3Upload).then(() => {
      alert("Your Doc3 is Uploaded ");
    });
    const imageRef4 = ref(storage, `mediumDocs/${indiUser}/doc4`);
    await uploadBytes(imageRef4, Doc4Upload).then(() => {
      alert("Your Doc4 is Uploaded ");
    });
    const imageRef5 = ref(storage, `mediumDocs/${indiUser}/doc5`);
    await uploadBytes(imageRef5, Doc5Upload).then(() => {
      alert("Your Doc5 is Uploaded ");
    });
    const imageRef6 = ref(storage, `mediumDocs/${indiUser}/doc6`);
    await uploadBytes(imageRef6, Doc6Upload).then(() => {
      alert("Your Doc6 is Uploaded ");
    });
    const imageRef7 = ref(storage, `mediumDocs/${indiUser}/doc7`);
    await uploadBytes(imageRef7, Doc7Upload).then(() => {
      alert("Your Doc7 is Uploaded ");
    });
    const imageRef8 = ref(storage, `mediumDocs/${indiUser}/doc8`);
    await uploadBytes(imageRef8, Doc8Upload).then(() => {
      alert("Your Doc8 is Uploaded ");
    });
    const imageRef9 = ref(storage, `mediumDocs/${indiUser}/doc9`);
    await uploadBytes(imageRef9, Doc9Upload).then(() => {
      alert("Your Doc9 is Uploaded ");
    });
    const imageRef10 = ref(storage, `mediumDocs/${indiUser}/doc10`);
    await uploadBytes(imageRef10, Doc10Upload).then(() => {
      alert("Your Doc10 is Uploaded ");
    });
  }


  return (
    <div className="mediumdocsbody">
      <h1>{indiUser}</h1>
      <center>Documents required for micro scale business approval.</center>
      <br />
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Upload
                    </th>
                  </tr>
                </thead>

                {/* <form onSubmit={handleSubmit}> */}
                <tbody className="bg-white divide-y divide-gray-200">
                  {/* <form> */}
                  {/* {docs.map((doc) => ( */}
                  <tr key={1}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            Aadhar Card
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex justify-center">
                        <div className="mb-3 w-96">
                          <input
                            className="form-control block w-full px-3 py-1.5 text-base font-normal  text-gray-700
    bg-white bg-clip-padding
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    m-0
    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            type="file"
                            id="formFile"
                            onChange={(event) => { setDoc1Upload(event.target.files[0]) }}
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr key={2}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            Residence certificate
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex justify-center">
                        <div className="mb-3 w-96">
                          <input
                            className="form-control block w-full px-3 py-1.5 text-base font-normal  text-gray-700
    bg-white bg-clip-padding
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    m-0
    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            type="file"
                            id="formFile"
                            onChange={(event) => { setDoc2Upload(event.target.files[0]) }}
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr key={3}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            Nationality Certificate
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex justify-center">
                        <div className="mb-3 w-96">
                          <input
                            className="form-control block w-full px-3 py-1.5 text-base font-normal  text-gray-700
    bg-white bg-clip-padding
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    m-0
    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            type="file"
                            id="formFile"
                            onChange={(event) => { setDoc3Upload(event.target.files[0]) }}
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr key={4}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            NOC (No Objection Certificate)
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex justify-center">
                        <div className="mb-3 w-96">
                          <input
                            className="form-control block w-full px-3 py-1.5 text-base font-normal  text-gray-700
    bg-white bg-clip-padding
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    m-0
    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            type="file"
                            id="formFile"
                            onChange={(event) => { setDoc4Upload(event.target.files[0]) }}
                          />
                        </div>
                      </div>
                    </td>
                  </tr>

                  <tr key={5}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            Company PAN Card
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex justify-center">
                        <div className="mb-3 w-96">
                          <input
                            className="form-control block w-full px-3 py-1.5 text-base font-normal  text-gray-700
  bg-white bg-clip-padding
  border border-solid border-gray-300
  rounded
  transition
  ease-in-out
  m-0
  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            type="file"
                            id="formFile"
                            onChange={(event) => { setDoc5Upload(event.target.files[0]) }}
                          />
                        </div>
                      </div>
                    </td>
                  </tr>

                  <tr key={6}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            TIN (Tax Identification Number)
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex justify-center">
                        <div className="mb-3 w-96">
                          <input
                            className="form-control block w-full px-3 py-1.5 text-base font-normal  text-gray-700
bg-white bg-clip-padding
border border-solid border-gray-300
rounded
transition
ease-in-out
m-0
focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            type="file"
                            id="formFile"
                            onChange={(event) => { setDoc6Upload(event.target.files[0]) }}
                          />
                        </div>
                      </div>
                    </td>
                  </tr>

                  <tr key={7}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            Certificate of Incorporation
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex justify-center">
                        <div className="mb-3 w-96">
                          <input
                            className="form-control block w-full px-3 py-1.5 text-base font-normal  text-gray-700
bg-white bg-clip-padding
border border-solid border-gray-300
rounded
transition
ease-in-out
m-0
focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            type="file"
                            id="formFile"
                            onChange={(event) => { setDoc7Upload(event.target.files[0]) }}
                          />
                        </div>
                      </div>
                    </td>
                  </tr>

                  <tr key={8}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            Non-disclosure Agreement
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex justify-center">
                        <div className="mb-3 w-96">
                          <input
                            className="form-control block w-full px-3 py-1.5 text-base font-normal  text-gray-700
bg-white bg-clip-padding
border border-solid border-gray-300
rounded
transition
ease-in-out
m-0
focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            type="file"
                            id="formFile"
                            onChange={(event) => { setDoc8Upload(event.target.files[0]) }}
                          />
                        </div>
                      </div>
                    </td>
                  </tr>

                  <tr key={9}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            Shareholder Agreement
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex justify-center">
                        <div className="mb-3 w-96">
                          <input
                            className="form-control block w-full px-3 py-1.5 text-base font-normal  text-gray-700
bg-white bg-clip-padding
border border-solid border-gray-300
rounded
transition
ease-in-out
m-0
focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            type="file"
                            id="formFile"
                            onChange={(event) => { setDoc9Upload(event.target.files[0]) }}
                          />
                        </div>
                      </div>
                    </td>
                  </tr>

                  <tr key={10}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                          Founders Agreement
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex justify-center">
                        <div className="mb-3 w-96">
                          <input
                            className="form-control block w-full px-3 py-1.5 text-base font-normal  text-gray-700
bg-white bg-clip-padding
border border-solid border-gray-300
rounded
transition
ease-in-out
m-0
focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            type="file"
                            id="formFile"
                            onChange={(event) => { setDoc10Upload(event.target.files[0]) }}
                          />
                        </div>
                      </div>
                    </td>
                  </tr>



                  {/* ))} */}
                  {/* </form> */}
                </tbody>

                {/* </form> */}
              </table>
              <center><button type="button" className="text-black border-gray-500 mb-2 hover:bg-slate-500" onClick={handleSubmit}>Submit</button></center>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



export default microdocs;
