import express from 'express'
import { ContactP } from '../controller/contact.js'
const route=express.Router()
route.post('/contact',ContactP)
export{route}