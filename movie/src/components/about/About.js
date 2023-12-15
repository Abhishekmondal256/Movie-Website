import React, { useEffect ,useState}  from "react";

import { NavLink,useNavigate } from "react-router-dom";
import "./About.css";
import pic from "../images/signup.jpg";
const About = ()=>{
    const navigate=useNavigate();
    const [userData,setUserData]=useState({});

    const callAboutPage=async()=>{
        try{
        const res=await fetch("/about",{
        method:"GET",
        headers:{
        
           Accept:"application/json",
           "Content-Type":"application/json"
        },
        credentials:"include"
        
        
        });
        const data=await res.json();
        console.log(data);
        setUserData(data);
        if(!(await res).status===200){
           const error=new Error(res.error);
           throw error;
        }
        
    }
    catch(err){
    console.log(err);
    navigate("/login",{replace:true});
    }
    }
    
       useEffect(()=>{
    callAboutPage();
       },[])
       return(
        <>
        <div className="eprof">
        <form method="GET">
        <div className="row" id="row">
        <div className="col">
        <img id="abtimage" src={"http://localhost:5000/public/images/"+userData.profpic} alt="abhi" width="150px" height="170px"/> 
        
        </div>
        <div className="col2">
        
        <div className="phead">
        
            <h5>{userData.name}</h5>
            <h6>{userData.email}</h6>
            
        </div>
        
        </div>  
        <div className="col3">          
        <button onClick={(e)=>{e.preventDefault();}} id="delbtn" className="delbtn">Delete </button>
        <button onClick={(e)=>{e.preventDefault();}} id="peditbtn" className="peditbtn" >Edit Others</button>
        <button onClick={(e)=>{e.preventDefault();}} id="peditim" className="peditbtnim" >Edit Image</button>
        </div>


</div>
<div className="row2" id="row2">

<div className="cole1" id="cole1">
<div className="rowp" id="rowp">
<div className="colp">
<label >ID:</label>
</div>
   <div className="colp">
    <p>{userData._id}</p>
   </div> 

</div>


 




<div className="rowp" id="rowp">
<div className="colp">
<label >Country :</label>
</div>
   <div className="colp">
    <p>{userData.country}</p>
   </div> 

</div>
</div>

</div>








</form>
</div>


</>
    )

}
export default About;