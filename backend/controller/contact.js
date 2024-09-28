 
 import { Contact } from "../module/contact.js";
 const ContactP=async (req, res) => {
    const { name, email, message } = req.body;
    const contact = new Contact({ name, email, message });
    if (!name || !email ||!message) {
        return res.status(400).json({ error: 'Missing required fields' })};
    
    await contact.save();
console.log(name,email,message)
res.status(201).json({ message: 'Contact submitted successfully' }) };
;
export{ContactP}