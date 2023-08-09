import { Request, Response } from "express";
import Questions from "../models/questionSchema";
import questions, { answers } from '../db/data.js'

export async function getQuestions(req:Request, res:Response) {
    try {
        const q = await Questions.find();
        res.json(q)
    } catch (error) {
        res.json({ error })
    }
}

export async function insertQuestions(req:Request, res:Response) {
    try {
        Questions.insertMany({ questions, answers })
            .then(()=>res.json({ msg: "Data Saved Successfully...!"}));
    } catch (error) {
        res.json({ error })
    }
}

export async function dropQuestions(req:Request, res:Response) {
    try {
        await Questions.deleteMany();
        res.json({ msg: "Questions Deleted Successfully...!"});
    } catch (error) {
        res.json({ error })
    }
}