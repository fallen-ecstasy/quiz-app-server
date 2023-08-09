
import { Request, Response } from 'express';
import Results from '../models/resultSchema';
import { Error } from 'mongoose';


/** get all result */
export async function getResult(req:Request, res:Response){
    try {
        const r = await Results.find();
        res.json(r);
    } catch (error) {
        res.json({ error })
    }
}

/** post all result */
export async function storeResult(req:Request, res:Response){
   try {
        const { username, result, attempts, points, achived } = req.body;
        if(!username && !result) throw new Error('Data Not Provided...!');

        Results.create({ username, result, attempts, points, achived })
        .then(()=>{
            res.json("Result saved Successfully...")
        })

   } catch (error) {
        res.json({error})
   }
}

/** delete all result */
export async function dropResult(req:Request, res:Response){
    try {
        await Results.deleteMany()
        .then(()=>res.json({ msg : "Result Deleted Successfully...!"}));
    } catch (error) {
        res.json({ error })
    }
}