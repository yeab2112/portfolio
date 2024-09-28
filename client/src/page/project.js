import React from 'react';
import project1 from './image/project1.jpeg';
import project2 from './image/project2.jpeg';
import { Card, Row, Col } from 'react-bootstrap';
import {  motion } from 'framer-motion';

function Project() {
  const projectList = () => [
    {
      id: 1,
      name: "Portfolio Website",
      imageUrl: project1
    },
    {
      id: 2,
      name: "E-commerce Website",
      imageUrl: project2
    },
  ];

  return (
    <motion.div
      animate={{
        scale: [2, 1],
        rotate: [90, 0],
      }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      <Row className="justify-content-center h-100 m-5">
        <h2 className="text-center mt-4">Projects</h2>
        {projectList().map((item) => (
          <Col xs={12} md={6} key={item.id} className='mb-4'>
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

export default Project;
