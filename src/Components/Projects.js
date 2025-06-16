
import {Container, Row, Col} from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import img1 from "../assets/img/portfolio-img.png";

function Projects(){
    const Projects=[
        {
            title: "My Portfolio",
            description: "This portfolio was built using HTML, CSS, JavaScript, and React to showcase my web development projects. It highlights both completed work and ongoing projects, reflecting my growth, skills, and passion for building interactive and responsive web applications.",
            imgUrl:img1,
            projectLink:"",
        },
        
    ];

    function createCard (projectInfo, index){
        return (
            <div className="projects" id="projects">
                <Col key={index}>
                    <Card>
                        <a href="https://www.google.com"><Card.Img variant="top" src={projectInfo.imgUrl} /></a>
                        <Card.Body>
                        <Card.Title><h2 style={{textAlign:"center", fontSize:"20px"}}>{projectInfo.title}</h2></Card.Title>
                        <Card.Text >
                            {projectInfo.description}
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
        
            </div>
        );
    }
    return (
        <section className="project" id="project">
            <Container className="card-container">
                <h2>My Projects!</h2>
                <Row xs={1} md={3} className="g-4" > 
                    {Projects.map((project, index) => createCard(project, index))}
                </Row>
            </Container>
        </section>
    )
}

export default Projects;