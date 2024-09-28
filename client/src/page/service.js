import React from 'react';
import service1 from './image/service1.jpeg';
import service2 from './image/service2.jpeg';
import { Card, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion'; // Import motion for animations

const Service = () => {
  const serviceList = [
    {
      id: 1,
      name: "Home Tutor Related To Programming",
      imageUrl: service1
    },
    {
      id: 2,
      name: "Website Development",
      imageUrl: service2
    },
  ];

  return (
    <motion.div
      animate={{ 
        scaleY: 1, // Start with scaleY of 1 (full height)
        transition: { duration: 0.5, ease: 'easeInOut' } // Add transition to scaleY
      }}
      initial={{ scaleY: 0 }} // Set initial scaleY to 0 (hidden)
    >
      <Row className="justify-content-center h-100 m-5">
        <h2 className="text-center mt-4">Services</h2>
        {serviceList.map((item) => (
          <Col xs={10} sm={6} md={4} key={item.id} className='mb-4'> 
            <motion.div 
              whileHover={{ scale: 0.9, transition: { duration: 0.3 } }} >
              <Card style={{ width: '100%' }}>
                <Card.Img variant='center' src={item.imageUrl} />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </motion.div>
  );
}

export default Service;
