const express = require('express');
const router = express.Router();

const CandidateModel = require('../models/Candidate')

router.post('/postCandidateImage',async(req,res)=>{
    try{

        const {accountAddress,imageName}=req.body
        const savedCandidate = await CandidateModel.create({
            accountAddress,
            imageName
        })
        res.status(201).json(savedCandidate)

    }catch(error){
        console.error(error)
    }
})
module.exports=router;