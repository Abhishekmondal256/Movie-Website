import React,{useState} from "react";
import "./Signup.css";
import {NavLink,useNavigate} from "react-router-dom";
const Signup=()=>{
    const navigate=useNavigate();
      const [user,setUser]=useState({
        name:"", email:"",country:"",profpic:"", password:"", cpassword:""
    
      });
      const validateEmail = (email) => {
    
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
      };
      let name,value;
      const handleInputs=(e)=>{
        console.log(e);
        name=e.target.name;
        value=e.target.value;
        
          setUser({ ...user, [name]: value });
        
          }
          const handleImage=(e)=>{
            console.log(e.target.files[0]);
          
          
          setUser({...user,profpic:e.target.files[0]});
          
          }
          const PostData=async(e)=>{
            e.preventDefault();
            if (!validateEmail(user.email)) {
                window.alert("Invalid email format");
                return;
              }
             
              const formData=new FormData();
              formData.append("name",user.name.toLowerCase());
              formData.append("email",user.email);
              
              formData.append("country",user.country);
              formData.append("profpic",user.profpic,user.profpic.name);
              
              formData.append("password",user.password);
              formData.append("cpassword",user.cpassword);
              const res=await fetch("/register",{
                method:"POST",
                body:formData
                
                   }).then((res)=>{res.json(); if(res.status===422){
                    window.alert("incomplete or wrong submission");
                    
                  }}).then((data)=>{
                    navigate("/signin",{replace:true});}).
                    catch((err)=>{
                      window.alert("registration failed");
                      console.log(err);
                   });

                }
                return (
                    <>
                  <section className="signup">
                  
                  <div className="container">
                  <div className="signup-image" >
                     <div className="im" style={{ backgroundImage: `url(/signup.jpg)`, 
                      backgroundRepeat: 'no-repeat' ,opacity:'0.7'}} />
        </div>
    <div className="signup-content">
    <h2 className="ftitle">Sign up</h2>
    <form method="POST" className="register-form" id="register-form">
     <div className="form-group "><div id="lab">Name</div>
      <div id="lab2"> <label htmlFor="name">
       <i class="zmdi zmdi-account "></i>
        </label>
       <input type="text" name="name" id="name" autoComplete="off" value={user.name} onChange={handleInputs} placeholder="enter your name"/>
    
       </div> </div>
       <div className="form-group"><div id="lab">Email</div>
      <div id="lab2"> <label htmlFor="email">
       <i class="zmdi zmdi-email"></i>
        </label>
       <input type="email" name="email" id="email" autoComplete="off" value={user.email} onChange={handleInputs}  placeholder="enter your email"/>
    
      </div>  </div>
      <div className="form-group"><div id="lab">Country</div>
      <div id="lab2"> <label htmlFor="country">
       <i class="zmdi zmdi-country"></i>
        </label>
       <input type="text" name="country" id="country" autoComplete="off" value={user.country} onChange={handleInputs}  placeholder="enter your Country"/>
    
      </div>  </div>
      <div className="form-group"><div id="lab">Profile Pic</div>
      <div id="lab2"> <label htmlFor="profpic">
       <i class="zmdi zmdi-image"></i>
        </label>
       <input type="file" name="profpic" id="profpic"  autoComplete="off"  onChange={handleImage} placeholder="profile pic"/>
    
        </div></div>
        <div className="form-group"><div id="lab">Password</div>
      <div id="lab2"> <label htmlFor="password">
       <i class="zmdi zmdi-gps-dot"></i> 
       </label>
       <input type="password" name="password" id="password" autoComplete="off" value={user.password} onChange={handleInputs}  placeholder="enter your password"/>
       </div>
     </div>
     <div className="form-group"><div id="lab">Confirm Password</div>
      <div id="lab2"> <label htmlFor="cpassword">
       <i class="zmdi zmdi-lock"></i> 
       </label>
       <input type="password" name="cpassword" id="cpassword" autoComplete="off" value={user.cpassword} onChange={handleInputs}  placeholder="confirm your password"/>
       </div>
     </div>
     <div className="form-groupy">
     <NavLink to="/login" className="signup-link">already registered</NavLink>
        <input type="submit" name="signup" id="signup" className="form-submit" value="Register" onClick={PostData} />
        
     </div>
    
    </form>
    
    </div>
    </div>
    
    
    
    </section>
    
</>


)


}
export default Signup;              
