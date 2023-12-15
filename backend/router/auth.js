const express=require('express');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const router = express.Router();
const multer=require("multer");
const cookieParser=require("cookie-parser");
router.use(cookieParser());
const authenticate=require("../middleware/authenticate");
require('../db/conn');
const User=require('../model/userSchema');
router.get('/', (req, res) => {
    res.send("hello world");
  
  })
  const storage=multer.diskStorage({destination:function(req,file,cb){
    cb(null,"public/images");
    
    },
    filename:function(req,file,cb){
    cb(null,Date.now()+'_'+ file.originalname);
    
    }
    })
    var upload=multer({storage:storage});

  router.post('/register',upload.single("profpic"),async(req,res)=>{
    const {name,email,country,password,cpassword}=req.body;
    console.log(req.body);
    let profpic=req.file.filename;
    if (!name || !email || !country  || !password || !cpassword) {
   
        return res.status(422).json({ error: "plz fill all the deatils" });
      }
      if(password!==cpassword){
        return res.status(422).json({ error: "plz fill correct" });
      }
      try {
      const userExist = await User.findOne({ email: email })
      if (userExist) {
        return res.status(422).json({ error: "Email already registered" });
      }
      const user = new User({ name, email,country,profpic, password, cpassword });
      await user.save();
  
  
      res.status(201).json({ message: "user registered successfully" });
    }
    catch (err) {
        console.log(err);
      }

  })
router.post("/signin", async (req, res) => {
  try {
    let token;
    const { email, password } = req.body;
    console.log(req.body);
    if (!email || !password) {
      return res.status(400).json({ error: "plz filled the data" });

    }
    const userLogin = await User.findOne({ email: email });
    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);
token = await userLogin.generateAuthToken();
      res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true

      })
       
      if (!isMatch) {
        res.status(400).json({ error: "Invalid credentials" });
      }
      else {
        res.json({ message: "user login successfully" });
      }
    }
      else {
      res.status(400).json({ error: "Invalid credentials" });

    }





  }
  catch (err) {
    console.log(err);

  }

});
router.get("/about",authenticate,(req,res)=>{

  res.send(req.rootUser);
  
  })
  router.get("/logout",authenticate,(req,res)=>{
    res.clearCookie("jwtoken",{path:"/"});
    res.status(200).send('User Logout');
    
    })
    
module.exports = router;