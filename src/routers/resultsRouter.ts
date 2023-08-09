import { Router } from "express";
import { dropResult, getResult, storeResult } from "../controllers/results.controller";

const resultsRouter = Router();


resultsRouter.route('/result')
                .get(getResult)
                .post(storeResult)
                .delete(dropResult)

export default resultsRouter;