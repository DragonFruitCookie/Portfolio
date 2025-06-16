import React, { useState, useEffect } from 'react';
import {Container, Row, Col} from "react-bootstrap";
import bannerimg1 from "../assets/img/banner-img1.jpg";
import bannerimg2 from "../assets/img/banner-img2.jpg";
import bannerimg3 from "../assets/img/banner-img3.jpg";

function Banner(){

    //Background effects:
    const bgImages = [bannerimg1, bannerimg2, bannerimg3];
    const textColor=['#FFB823' , '#FFF1CA', '#AF3E3E'];
    const [currentBgIndex, setCurrentBgIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
        setCurrentBgIndex((prevIndex) => (prevIndex + 1) % bgImages.length);
        }, 8000); 

        return () => clearInterval(interval); 
    }, [bgImages.length]);
    

    return (
        <section>

            <Container 
                className={"banner"}
                id="home" 
                style={{
                    backgroundImage: `url(${bgImages[currentBgIndex]})`,
                    }}
            >
                <Row class="align-items-center">

                    <Col xs={12} md={6} xl={7}>
                    <span className="tagline">Welcome to my portfolio!</span>
                    <h1 style={{color:textColor[currentBgIndex]}}>I'm a Web Developer</h1>
                    <p>
                        I'm a web developer who loves creating responsive, 
                        full-stack applications. I'm currently working on several projects 
                        to learn and explore real-world implementation of the MERN stack 
                        (MongoDB, Express, React, Node.js).
                    </p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Banner;