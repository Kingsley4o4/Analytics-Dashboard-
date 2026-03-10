import "./login.css";
import { useState } from "react";
import { LockKeyhole } from "lucide-react";
import { Link ,useNavigate } from "react-router";
import { auth } from "../Firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";





function Login() {
  const navigate = useNavigate();
  const [validateEmail, setValidateEmail] = useState("");
  const [validatePassword, setValidatePassword] = useState("");
  const [isLoading,setIsLoading] = useState(false)
  const [error, setError] = useState({
    emailCheck: "",
    passwordCheck: "",
    LoginError:""
  });

  const handleClick = async () => {
    setError({ emailCheck: "", passwordCheck: "" });

  
    if (
      validateEmail.includes("@") &&
      validateEmail.includes(".") &&
      validateEmail.includes("com")
    ) {
      if (validatePassword.length < 8) {
        setError({
          emailCheck: "",
          passwordCheck: "password must be at least 8 letters",
        });
        return;
      }

      try {
           setIsLoading(true)
        const userCredential = await signInWithEmailAndPassword(
          auth,
          validateEmail,
          validatePassword,
        );

       navigate("/dashboard");
      
        
      } catch (error) {
        setIsLoading(false)
       
        if (error.message.includes("auth/network-request-failed")){
             setError({
            LoginError: "Opps check your internet connection and try again ",
          });

        }
       if (error.message.includes("auth/invalid-credential")) {
        setError({
          LoginError: "Invalid email or password",
          passwordCheck: "",
        });
       }
      }

    } else {
      setError({
        emailCheck: "Not a Valid Email",
        passwordCheck: "",
      });
    }
  };

  return (
    <div className="Login">
      <div className="loginWrapper">
        <div className="modial">


          <div className="padlock">
            <LockKeyhole color="blueviolet" size={50} />
          </div>

          <span>Welcome Back</span>

          <i>Enter your credentials to access your account</i>

          <div className="inputContainer">
            <input
              type="email"
              onChange={(e) => setValidateEmail(e.target.value)}
              value={validateEmail}
              placeholder="Enter your Gmail.."
            />
            <span style={{ marginTop: "-25px" }}>
              {error.emailCheck && (
                <span style={{ color: "red", fontSize: "12px" }}>
                  {error.emailCheck}
                </span>
              )}
            </span>
            <input
              type="password"
              onChange={(e) => setValidatePassword(e.target.value)}
              value={validatePassword}
              placeholder="Enter your Password.."
            />
            <span style={{ marginTop: "-25px" }}>
              {error.passwordCheck && (
                <span style={{ color: "red" }}>
                  {validatePassword.length >= 8 ? (
                    ""
                  ) : (
                    <span style={{ color: "red", fontSize: "12px" }}>
                      {error.passwordCheck}
                    </span>
                  )}
                </span>
              )}{" "}
            </span>
            <button onClick={handleClick}> {isLoading ? "Loading..." : "Login"} </button>
         <span style={{ fontSize: "15px",color:"red" }}>{error.LoginError}</span>
            <span style={{ fontSize: "15px" }}>
              Don't have an account? <Link to="/signup">Sign up now</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
