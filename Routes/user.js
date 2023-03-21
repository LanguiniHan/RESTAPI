import express from "express";
import { v4 as uuidv4 } from 'uuid';


const router= express.Router();

let users = [];

router.get('/',(req, res)=>{
    //console.log(users);

     res.send(users);
});

router.post('/',(req,res)=>{

    const user=req.body;

    users.push({ ...user,id: uuidv4()});
   
    res.send(`User with the name ${user.firstName} added to the database!`);

});
router.get('/:id',(req,res)=>{
    const{id}=req.params;
    const foundUser=users.find((user)=>user.id ==id);
    res.send(foundUser);
});
router.delete('/:id',(req,res)=>{
    const{id}=req.params;
    users=users.filter((user)=>user.id != id);
    res.send(`User with the id ${id} delected from the database.`);
});
router.patch('/:id',(req,res)=>{
    const{id}=req.params;
    const {fisrtName, lastName, Age}=req.body;

    const user=users.find((user)=> user.id ==id);
    if(fisrtName){
        user.firstName=fisrtName;
    }
    if(lastName){
        user.lastName=lastName;
    }
    if(Age){
        user.Age=Age;
    }

    res.send(`User with the id ${id} has been updated`);
    

});

export default router;