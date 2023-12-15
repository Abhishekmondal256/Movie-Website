
import './App.css';
import React,{createContext,useReducer} from "react";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import MovieList from './components/movieList/movieList';
import Movie from "./components/movieDetail/movie";
import About from "./components/about/About";
import Login from "./components/login/Login";
import Logout from "./components/logout/Logout";
import Signup from "./components/signup/Signup";
import { initialState,reducer } from "../src/reducer/UseReducer";
const UserContext=createContext();
const Routing=()=>{
  return (
    <Routes>
    <Route index element={<Home/>}></Route>
     <Route path="movie/:id" element={<Movie/>}></Route>
     <Route path="movies/:type" element={<MovieList/>}></Route>
     <Route path="/about" element={<About/>}></Route>
     <Route path="/signin" element={<Login/>}/>
   <Route path="/register" element={<Signup/>}/>
   <Route path="/logout" element={<Logout/>}/>
     <Route path="/*" element={<h1>Error Page</h1>}></Route>

    </Routes>
    )
  
  }

function App() {
  const [state,dispatch]=useReducer(reducer,initialState);
  return (
    <>
    <UserContext.Provider value={{state,dispatch}}>
    <Router>
   <Header/>
  <Routing/>
  </Router>
    </UserContext.Provider>
    </>
  );
}

export default App;
export {UserContext};