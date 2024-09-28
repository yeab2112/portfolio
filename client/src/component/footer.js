import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
    return (
        <footer className="bg-dark text-light text-center py-2">
            <Container>
                <Row>
                    <Col>
                        <p>&copy; [YEABSIRA] [2023]</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Link to="https://www.linkedin.com/in/yeabsira-aychiluhim/" className='text-light mx-2'>
                            <FontAwesomeIcon icon={faLinkedin} size="lg" />
                        </Link>
                        <Link to="https://github.com/yeab2112/ecommer" className='text-light mx-2'>
                            <FontAwesomeIcon icon={faGithub} size="lg" />
                        </Link>
                        <Link to="[Your Twitter URL]" className='text-light mx-2'>
                            <FontAwesomeIcon icon={faTwitter} size="lg" />
                        </Link>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
