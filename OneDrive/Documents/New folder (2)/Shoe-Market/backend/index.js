const port = 4000;
const express = require("express");
require("dotenv").config();
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

app.use(express.json());
app.use(cors());

// Database connection with mongodb
mongoose
  .connect(
    "mongodb://bignerdev:070707@cluster0-shard-00-00.qsjrb.mongodb.net:27017,cluster0-shard-00-01.qsjrb.mongodb.net:27017,cluster0-shard-00-02.qsjrb.mongodb.net:27017/e-commerce?ssl=true&replicaSet=atlas-qr7cyd-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("connected to mongodb"))
  .catch((err) => console.log("mongodb connection error:", err));

// API Creation

app.get("/", (req, res) => {
  res.send("Express App is Running");
});

// image storage engine

const storage = multer.diskStorage({
  destination: "./upload/images",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});
const upload = multer({ storage: storage });
// creating upload endpoint for images

app.use("/images", express.static("upload/images"));
app.post("/upload", upload.single("product"), (req, res) => {
  res.json({
    success: 1,
    image_url: `http://localhost:${port}/images/${req.file.filename}`,
  });
});

// scehma for creating products

const Product = mongoose.model("Product", {
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  new_price: {
    type: Number,
    required: true,
  },
  old_price: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  avilable: {
    type: Boolean,
    default: true,
  },
});

app.post("/addproduct", async (req, res) => {
  try {
    let products = await Product.find({});
    let id;
    if (products.length > 0) {
      let last_product_array = products.slice(-1);
      let last_product = last_product_array[0];
      id = last_product.id + 1;
    } else {
      id = 1;
    }
    const product = new Product({
      id: id,
      name: req.body.name,
      image: req.body.image,
      category: req.body.category,
      new_price: req.body.new_price,
      old_price: req.body.old_price,
    });

    console.log("Saving product:", product);
    const savedProduct = await product.save();
    console.log("Saved successfully:", savedProduct);

    res.json({
      success: true,
      name: req.body.name,
      message: "Product added successfully!",
    });
  } catch (error) {
    console.error("Error saving product:", error);
    res.status(500).json({ success: false, message: "Error adding product" });
  }
});

// creating API for deleting Products

app.post("/removeproduct", async (req, res) => {
  try {
    await Product.findOneAndDelete({id:req.body.id});
    console.log("The Product is removed");
    res.json({
      success: true,
      name: req.body.name,
    });
  } catch (error) {
    console.error("the error is:", error);
    res
      .status(404)
      .json({
        success: false,
        message: "the resource to delete does not exist",
      });
  }
});

// Creating API for getting all products
app.get('/allproducts', async (req, res) => {
    console.log("Fetching products...");
    try {
        let products = await Product.find({});  // 5-second timeout
        console.log("Products fetched:", products);
        res.send(products);  // Send products as JSON response
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({ message: "Error fetching products", error: error.message });
    }
});

// schema creating for user model

const Users = mongoose.model('Users',{
  username:{
    type:String
  },
  email:{
    type:String,
    unique:true,

  },
  password:{
    type:String,
  },
  cartData:{
    type:Object
  },
  date:{
    type:Date,
    default:Date.now(),
  }

});

// creating endpoint for registering the user
app.post('/signup' , async (req,res) =>{
  let check = await Users.findOne({email:req.body.email});
  if(check){
    return res.status(400).json({success:false,errors:"exsting user found with same email address"})
  }

  let cart = {};
  for (let i =0;i<300;i++){
    cart[i] = 0
  }

  const user = new Users({
    name:req.body.username,
    email:req.body.email,
    password:req.body.password,
    cartData : cart,

  });
   await user.save();

   const data = {
    user:{
      id:user.id
    }
   }

   const token = jwt.sign(data,'secret_ecom');
   res.json({
    success:true,
    token
   })
})

// creating endpoint for user login
app.post('/login',async (req,res)=>{
    let user = await Users.findOne({email:req.body.email});
    if(user){
      const passCompare = req.body.password === user.password;
      if(passCompare){
        const data = {
          user:{
            id:user.id
          }
        }
        const token = jwt.sign(data,'secret_ecom');
        res.json({success:true,token});
      }
      else{
        res.json({success:false,errors:"wrong password"})
      }
    }
    else{
      res.json({success:false,errors:"wrong email"})
    }
});


app.listen(port, (error) => {
  if (!error) {
    console.log("server running on port  " + port);
  } else {
    console.log("Error :" + error);
  }
});
