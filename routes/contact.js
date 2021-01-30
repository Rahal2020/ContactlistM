const express=require('express')
const router=express.Router()
const Contact=require('../models/Contact')
//test
//localhost:5000/contacts/test
//@path
//test route
//public or private

router.get('/test',(req, res)=>{
    res.send("testeeeeddd")
})
//add contact 
router.post('/addContact', (req,res)=> {
    const {name,email,phone}=req.body
    const newContact= new Contact({
        name,email,phone
    })
    newContact.save()
    .then(contacts=>res.send(contacts))
    .catch(err=>console.log('error'))
})
//get all contacts
router.get('/all', (req, res)=>{
    Contact.find()
    .then(contacts=>res.send(contacts))
    .catch(err=>console.log('error'))  
})
//delete contact
router.delete("/deleteContact/:_id",(req,res)=>{
    const {_id}=req.params
    Contact.findOneAndDelete({_id})
    .then(contacts=>res.send(contacts))
    .catch(err=>console.log('error'))
})
//get contact by od
router.get('/:_id', (req, res)=>{
    const {_id}=req.params
    Contact.findOne({_id})
    .then(contacts=>res.send(contacts))
    .catch(err=>console.log('error'))
})
//edit Conttact
router.put("/editContact/:_id", (req, res)=>{
    const {_id}=req.params
    const {name, email, phone}=req.body
    Contact.findOneAndUpdate({_id}, {$set:{name,email,phone}})
    .then(contacts=>res.send(contacts))
    .catch(err=>console.log('error'))
})
module.exports=router