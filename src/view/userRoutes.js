import { Router } from "express"
import * as mycontroller from "../controller/usersController.js";

const endpoint = "/users"
const router = Router();

router.get(`${endpoint}`, (req,res)=>{mycontroller.Get(req,res)})
router.get(`${endpoint}/:id`, (req,res)=>{mycontroller.GetById(req,res)})
router.delete(`${endpoint}/:id`, (req,res)=>{mycontroller.Delete(req,res)})


export default router;