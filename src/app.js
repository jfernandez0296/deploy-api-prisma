import express from "express";
import gestorRoutes from "./routes/gestor.route.js";
import projectRoutes from "./routes/project.route.js"
import gestorProjectRouter from "./routes/gestorproject.route.js";

const app = express();
const PORT=process.env.PORT

app.get("/",(req,res)=>{
    res.json({message:"Hello API prisma"});
});


// Middleware
app.use(express.json());
app.use("/gestor",gestorRoutes);
app.use("/project",projectRoutes);
app.use("/gestor-project", gestorProjectRouter);


//Lanzar el servidor
app.listen(PORT,()=>{
    console.log('Server initialized...');
});



