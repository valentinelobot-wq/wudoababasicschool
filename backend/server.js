require("dotenv").config();const express=require("express"),cors=require("cors"),helmet=require("helmet"),rateLimit=require("express-rate-limit");
const auth=require("./routes/auth"),data=require("./routes/data");
const app=express();app.use(helmet());app.use(cors());app.use(express.json({limit:"2mb"}));app.use("/api",rateLimit({windowMs:15*60*1000,max:300}));
app.get("/api/health",(q,s)=>s.json({ok:true,school:"Wudoaba M.A Basic School"}));app.use("/api/auth",auth);app.use("/api",data);
app.use((e,q,s,n)=>{console.error(e);s.status(500).json({message:"Server error"})});app.listen(process.env.PORT||5000,()=>console.log("Wudoaba API running"));