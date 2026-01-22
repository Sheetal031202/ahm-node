const express = require("express");
const app = express();
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const flash = require("connect-flash");

// MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/blogDB")
  .then(()=>console.log("MongoDB connected"))
  .catch(err=>console.error(err));

// Middleware
app.set("view engine","ejs");
app.use(express.urlencoded({ extended:true }));
app.use(express.json());

app.use(session({
  secret:"blogSecret",
  resave:false,
  saveUninitialized:false
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.use((req,res,next)=>{
  res.locals.success_msg = req.flash("success");
  res.locals.error_msg = req.flash("error");
  next();
});

// Passport config
require("./config/passport")(passport);

// Routes
app.use("/", require("./routes/authRoutes"));
app.use("/posts", require("./routes/postRoutes"));

// Home page
app.get("/", (req,res)=>{
  res.render("index", { user:req.user });
});

// Start server
const PORT = process.env.PORT || 8000;
app.listen(PORT,()=>console.log(`Server running on port ${PORT}`));
