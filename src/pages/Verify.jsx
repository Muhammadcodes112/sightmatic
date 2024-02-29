import React, { useContext, useState } from "react";
import { AuthProvider, useAuthValue } from "../AuthContext";

function Verify() {
  const [verify, setVerify] = useState("");

  const {currentUser} = useAuthValue();

  //Implement Verification Logic
  const handleVerify = (e) => {
    setVerify(e.target.value);
  };
  return (
    <>
      <h2>Verify Your Email</h2>

      <form onSubmit={handleVerify}>
        <input type="verify" value={verify} onChange={setVerify} />
        <p className="text-white">
          A messgae has been sent to {currentUser?.email} please confirm
        </p>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
export default Verify;
