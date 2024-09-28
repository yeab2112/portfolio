import React, { useState } from 'react';
import axios from 'axios';
import {  Row, Col, Form, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';


function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
             await axios.post('http://localhost:5000/api/contact', formData);
            alert('Contact submitted successfully');
          } catch (error) {
            alert('Error sending contact:', error);
            
          }
          
        }
    return (
        <motion.div
        animate={{ 
          scaleY: 1, // Start with scaleY of 1 (full height)
          transition: { duration: 0.5, ease: 'easeInOut' } 
        }}
        initial={{ scaleY: 0 }}  >
             <Row className="justify-content-center h-100 m-5">
                <Col xs={12} md={6} className='al'>
                    <h2 className="text-center mt-4">Contact Us</h2>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} required />
                        </Form.Group>

                        <Form.Group controlId="formEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} required />
                        </Form.Group>

                        <Form.Group controlId="formMessage">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows={3} name="message" value={formData.message} onChange={handleChange} required />
                        </Form.Group>

                        <Button variant="primary" type="submit" className="mt-3">Send Message</Button>
                    </Form>
                </Col>
            </Row>
            </motion.div>
    );
}

export default Contact;
