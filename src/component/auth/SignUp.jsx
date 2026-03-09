import react from "react";
import "./signup.css";
import { Link } from "react-router";
import { useState } from "react";
import firebase from "firebase/compat/app";
import { auth } from "../Firebase/firebase";
import { updateProfile } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router";


const SignUp = ({userRegisterNameSignUp, setUserRegisterNameSignUp}) => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [validateUserPassword, setValidateUserPassword] = useState("");



  const [isLoading, setIsLoading] = useState();

  const [error, setError] = useState({
    userEmailMsg: "",
    userPasswordMsg: "",
    userValidateComfirmPass: "",
    signUpError: "",
    userRegisterNameInput: "",
  });

  const handleRegister = async () => {
    setError({
      userEmailMsg: "",
      userPasswordMsg: "",
      userValidateComfirmPass: "",
    });

    if (userRegisterNameSignUp === "") {
      setError({
        userRegisterNameInput: "Please enter your name",
      });
      return;
    }

    if (
      userEmail.includes("@") &&
      userEmail.includes(".") &&
      userEmail.includes("com")
    ) {
      if (userPassword.length < 8) {
        setError({
          userEmailMsg: "",
          userPasswordMsg: "passsword must at least be 8 letter long",
          userValidateComfirmPass: "",
        });
        return;
      }

      if (validateUserPassword !== userPassword) {
        setError({
          userEmailMsg: "",
          userPasswordMsg: "",
          userValidateComfirmPass: "Password does not match",
        });
        return;
      }
      try {
        setIsLoading(true);
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          userEmail,
          userPassword,
        );
         setIsLoading(false);
    


   
 

        navigate("/");
     
   
      } catch (error) {
         setIsLoading(false);

        if( error.message.includes("auth/network-request-failed")) {

            setError({
            signUpError: "Opps check your internet connection and try again ",
          });

        }
        if (error.message.includes("auth/email-already-in-use")) {
          setError({
            signUpError: "Email already in use",
          });
        }
      }
    } else {
      setError({
        userEmailMsg: "Not a Valid Email",
        userPasswordMsg: "",
        userValidateComfirmPass: "",
      });
    }
  };

  return (
    <div className="SignUp">
      <div className="SignUp-container">
        <div className="modial-signup">
          <span className="first-content">Create account</span>
          <i>Excited to track your progress</i>
          <div className="modialCard">
            <label>Full Name</label>
            <input
              onChange={(e) => setUserRegisterNameSignUp(e.target.value)}
              type="text"
              placeholder="Name"
            />
            <span style={{ color: "red", fontSize: "12px" }}>
              {error.userRegisterNameInput}
            </span>
            <label>Email Address</label>

            <input
              onChange={(e) => setUserEmail(e.target.value)}
              type="email"
              placeholder="Email"
            />
            <span style={{ color: "red", fontSize: "12px" }}>
              {error.userEmailMsg}
            </span>

            <label>Password</label>
            <input
              onChange={(e) => setUserPassword(e.target.value)}
              type="password"
              placeholder="Password"
            />
            <span style={{ color: "red", fontSize: "12px" }}>
              {error.userPasswordMsg}
            </span>
            <label>Confirm Password</label>
            <input
              onChange={(e) => setValidateUserPassword(e.target.value)}
              type="password"
              placeholder="Confirm Password"
            />

            <span style={{ color: "red", fontSize: "12px" }}>
              {error.userValidateComfirmPass}
            </span>

            <button onClick={handleRegister}>
              {isLoading ? "Loading..." : "Register"}
            </button>

           <span style={{ color: "red", fontSize: "14px" }}>{error.signUpError}</span>

            <span
              style={{
                fontSize: "15px",
                textAlign: "center",
                marginTop: "20px",
                paddingInline: "7rem",
              }}
            >
              Already have an account? <Link to="/"> Login </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
