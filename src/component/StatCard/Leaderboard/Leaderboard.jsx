import Img1 from "../Img/img1.png"
import { useGetImageQuery } from "../../../Service/imgApi";
import { ArrowBigDown, ArrowDown, ChevronUp,ChevronDown } from "lucide-react";
const  Leaderboard = ({showImage =true} ) => {
      const { data, isLoading, error } = useGetImageQuery();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
//    const user = data.users[7];
const users = data.users;
const user1 = users[7];
const user2 = users[4];
const user3 = users[10];





                return (
                 <>

                    <h5 style={{ color: "gray", height: "40px" }}>User Leaderboard </h5>
              {/* come later */}
             

              {/* edited */}

              <div style={{ marginTop: "-19px" }}>
                <div style={{ display: "flex", marginInline: "25px" }}>
                  <div style={{}}>
                        
                    { showImage && <img style={{width:"40px", height:"40px", borderRadius:"50%"}}
          src={user1.image}
          alt={user1.title}
          width={150}
          users={6}
        />}
                  
                  </div>

                  <div
                    style={{
                      marginTop: "-30px",
                      paddingLeft: "20px",
                      width: "200%",
                    }}
                  >
                    <h6 style={{ fontSize: "13px" }}>{user1.firstName}</h6>
                    <h6
                      style={{
                        marginTop: "-23px",
                        color: "gray",
                        fontWeight: "20px",
                      }}
                    >
                     {user1.firstName} 637 Points - 98% Correct
                    </h6>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "end",

                      alignItems: "center",
                      height: "36px",

                      width: "300px",
                    }}
                  >
                    <h6>1</h6>
                    <ChevronUp
                      height={100}
                      style={{ color: "green" }}
                      fill="green"
                      
                    />
                  </div>
                </div>
              </div>
              {/* come later */}


               <div style={{ marginTop: "" }}>
                <div style={{ display: "flex", marginInline: "25px" }}>
                  <div style={{}}>
                  { showImage && <img style={{width:"40px", height:"40px", borderRadius:"50%"}}
          src={user2.image}
          alt={user2.title}
          width={150}
        />}
                  </div>

                  <div
                    style={{
                      marginTop: "-30px",
                      paddingLeft: "20px",
                      width: "200%",
                    }}
                  >
                    <h6 style={{ fontSize: "13px" }}>{user2.firstName}</h6>
                    <h6
                      style={{
                        marginTop: "-23px",
                        color: "gray",
                        fontWeight: "20px",
                      }}
                    >
                     {user2.firstName} 637 Points - 98% Correct
                    </h6>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "end",

                      alignItems: "center",
                      height: "36px",

                      width: "300px",
                    }}
                  >
                    <h6>1</h6>
                    <ChevronDown
                      height={100}
                      style={{ color: "red" }}
                      fill="red"
                    />
                  </div>
                </div>
              </div>

              {/* comwe later */}

               <div style={{ marginTop: "" }}>
                <div style={{ display: "flex", marginInline: "25px" }}>
                  <div style={{}}>
                  { showImage &&<img style={{width:"40px", height:"40px", borderRadius:"50%"}}
          src={user3.image}
          alt={user3.title}
          width={150}
        />}
                  </div>

                  <div
                    style={{
                      marginTop: "-30px",
                      paddingLeft: "20px",
                      width: "200%",
                    }}
                  >
                    <h6 style={{ fontSize: "13px" }}>{user3.firstName}</h6>
                    <h6
                      style={{
                        marginTop: "-23px",
                        color: "gray",
                        fontWeight: "20px",
                      }}
                    >
                     {user3.firstName} 637 Points - 98% Correct
                    </h6>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "end",

                      alignItems: "center",
                      height: "36px",

                      width: "300px",
                    }}
                  >
                    <h6>1</h6>
                    <ChevronUp
                      height={100}
                      style={{ color: "green" }}
                      fill="green"
                    />
                  </div>
                </div>
              </div>

              

              {/* come later */}
                 
                 
                 </>
                )
             
              }


export default Leaderboard;