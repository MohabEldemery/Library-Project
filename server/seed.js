import express from 'express'
import bcrypt from 'bcrypt'
import {Admins} from './models/Admins.js'
import './db.js'

async function AdminAccount (){
    try{
        const AdminCount = await Admins.countDocuments()
        if (AdminCount === 0){
            const hashPassword = await bcrypt.hash('adminpassword', 10)
            const newAdmin = new Admins ({
                username: 'admin',
                password: hashPassword
            })
            await newAdmin.save()
            console.log("Account Created")
        }
        else{
            console.log("Account Already Existed")
        }
    }
    catch (err){
        console.log("Error")
    }
}

AdminAccount()