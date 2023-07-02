import express  from "express";

import { gestAllGestor,
    getOneGestor,
    createOneGestor,
    updateGestor,
    deleteOneGestor } 
    from "../controllers/gestor.controller.js";


const router = express.Router();


// Select all gestors
    router.get("/", gestAllGestor);
    
//Select one gestor
    router.get("/:id", getOneGestor);
         
//Create a gestor
    router.post("/",createOneGestor );
    
//update a gestor
    router.put("/:id", updateGestor);
        
    router.delete("/:id", deleteOneGestor);


export default router;



