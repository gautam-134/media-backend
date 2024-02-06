const user = require("../models/userSchema");
const jwt = require('jsonwebtoken');
const SecretKey="GAUTAM";

exports.userregister = async (req, res) => {
    const { name, phone, email, password}=req.body;

    if (!name || !phone || !email||  !password ){
      return  res.status(401).json({message:"Fill all fields"})
    }

    try{
      const preuser = await user.findOne({email:email});

      if (preuser){
        return   res.status(200).json("user already exist")
      }
      else{
        const newuser = new user({
          name,
          phone,
          email,
          password
        });
        const storeData= await newuser.save();
        res.status(200).json(storeData);
      }
    } catch (error) {
        res.status(400).json({ error: "Invalid Details", error });
      } 
  };
  
  
  //CHECK PHONE INFORMATION IN DATABASE
  exports.user_login = async (req, res) => {
     const { email } = req.body;
  
     const preuser = await user.findOne({ email: email });
     
     try{

       if (!preuser) {
         return res.send("email not found")
        }
        else {
          const login_token = jwt.sign({email: preuser.email,},
            SecretKey);
            res.status(201).json({ exists: true, preuser, token:login_token});
    
        }
      }
    
    catch (error) {
      console.error("Error while querying MongoDB:", error);
      res.status(500).json({ error: "Unable to connect with DB" });
    }
    
  };
  