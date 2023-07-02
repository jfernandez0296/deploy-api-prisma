import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

export const gestAllGestor=async(req,res)=>{ 
    try{
     const gestores = await prisma.gestor.findMany();
     if( gestores.length>=1){
         res.status(200).json(gestores);
     }  else {
        res.status(204).json({error:true,messageError:"No content"}); 
         }   
     } catch (error) {
         res.status(500).json({error: true});
     }
};


export const getOneGestor=async(req,res)=>{ //este callback es llamado el controlador de la ruta y se hará un inser
    const { id } = req.params;
     try{
     const gestor = await prisma.gestor.findUnique({
         where: {
             idgestor: parseInt(id),
         }
     });
     if(Object.keys(gestor).length>0){
         res.status(200).json(gestor);
     }  else {
        res.status(204).json({ error:true,messageError:"No content"}); 
         }  
 
     } catch (error) {
         res.status(500).json({error});
     }
};

export const createOneGestor=async(req,res)=>{ //este callback es llamado el controlador de la ruta y se hará un inser
    try{
    const newGestor = await prisma.gestor.create({
        data:req.body,
    });
        res.status(201).json(newGestor);
    } catch (error) {
        res.status(500).json({error: true});
    }
};

export const updateGestor=async(req,res)=>{ //este callback es llamado el controlador de la ruta y se hará un inser
    try{
        const { id } = req.params;
        const gestor= await prisma.gestor.update({
        where:{
            idgestor: +id,
        },
        data:req.body,
    });
        res.json(gestor);
    } catch (error) {
        console.log(error);
        res.status(500).json({error: true});
    }
};

export const deleteOneGestor=async(req,res)=>{ 
        try{
                const { id } = req.params;
                const deleted= await prisma.gestor.delete({
                    where:  {
                        idgestor:+id,
                    },
            });
            res.json(deleted);
        } catch (error) {
            res.status(500).json({error: true});
        }
    };
