const jwt=require("jsonwebtoken");
function auth(req,res,next){const h=req.headers.authorization||"";const t=h.startsWith("Bearer ")?h.slice(7):null;if(!t)return res.status(401).json({message:"Login required"});try{req.user=jwt.verify(t,process.env.JWT_SECRET);next()}catch(e){res.status(401).json({message:"Session expired"})}}
const roles=(...r)=>(req,res,next)=>r.includes(req.user.role)?next():res.status(403).json({message:"Access denied"});
module.exports={auth,roles};