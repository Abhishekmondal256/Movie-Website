import React,{useContext} from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import {UserContext} from "../../App";
const Header=()=>{
    const {state,dispatch}= useContext(UserContext);
    const RenderMenu=()=>{
        if(!state){
        return(
        <>
 <div className="headerLeft">
<NavLink to="/"><img className="headeric" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/IMDb_logo.svg/300px-IMDb_logo.svg.png"/></NavLink>
<NavLink to="/movies/popular" style={{textDecoration:"none"}}><span>Popular</span></NavLink>
<NavLink to="/movies/now_playing" style={{textDecoration:"none"}}><span>Now Playing</span></NavLink>
<NavLink to="/movies/upcoming" style={{textDecoration:"none"}}><span>Upcoming</span></NavLink>

</div>
<div className="headerR">

<NavLink to="/about" style={{textDecoration:"none"}}><span>About Me</span></NavLink>
<NavLink to="/signin" style={{textDecoration:"none"}}><span>Login</span></NavLink>
<NavLink to="/register" style={{textDecoration:"none"}}><span>Register</span></NavLink>

</div>


</>

)


}
else{
return(
<>
<div className="headerLeft">
<NavLink to="/"><img className="headeric" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/IMDb_logo.svg/300px-IMDb_logo.svg.png"/></NavLink>
<NavLink to="/movies/popular" style={{textDecoration:"none"}}><span>Popular</span></NavLink>
<NavLink to="/movies/now_playing" style={{textDecoration:"none"}}><span>Now Playing</span></NavLink>
<NavLink to="/movies/upcoming" style={{textDecoration:"none"}}><span>Upcoming</span></NavLink>

</div>
<div className="headerR">

<NavLink to="/about" style={{textDecoration:"none"}}><span>About Me</span></NavLink>
<NavLink to="/logout" style={{textDecoration:"none"}}><span>Logout</span></NavLink>


</div>
</>


)
}
    }
return (
<div className="header">

    <RenderMenu/>
    {
    /*
 <div className="headerLeft">
<NavLink to="/"><img className="headeric" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/IMDb_logo.svg/300px-IMDb_logo.svg.png"/></NavLink>
<NavLink to="/movies/popular" style={{textDecoration:"none"}}><span>Popular</span></NavLink>
<NavLink to="/movies/top_rated" style={{textDecoration:"none"}}><span>Top Rated</span></NavLink>
<NavLink to="/movies/upcoming" style={{textDecoration:"none"}}><span>Upcoming</span></NavLink>

</div>
<div className="headerR">

<NavLink to="/about" style={{textDecoration:"none"}}><span>About Me</span></NavLink>
<NavLink to="/signin" style={{textDecoration:"none"}}><span>Login</span></NavLink>
<NavLink to="/register" style={{textDecoration:"none"}}><span>Register</span></NavLink>
<NavLink to="/logout" style={{textDecoration:"none"}}><span>Logout</span></NavLink>
</div> */}

</div>

)


}
export default Header;