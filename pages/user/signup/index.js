import React from "react";
import dynamic from "next/dynamic";
const Signup = dynamic(() => import("../../../components/user/usignup.js"), {
  ssr: false,
});
function Signupuser() {
  return (
    <div>
      <Signup />
    </div>
  );
}

export default Signupuser;