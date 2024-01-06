import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import rayTracerImg from "../assets/img/raytracerProjectImg.png";
import graphicsImg from "../assets/img/3dGraphicsImg.png";
import filmdomImg from "../assets/img/filmdomImg.png";
import objRecImg from "../assets/img/2dObjectRecImg.png";
import signLangRecImg from "../assets/img/signLangRec.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import portfolioImg from "../assets/img/portfolio-img.png"

export const Projects = () => {

  const webProjects = [
    {
      title: "Filmdom",
      description: "Film and TV based social media platform. Uses React, redux, netlify on the front-end, Node, MongoDB, express, heroku on the back-end.",
      imgUrl: filmdomImg,
	  web: true,
	  github: "https://github.com/jakestringfellow/filmdom-react-web-app",
	  link: "https://filmdom.netlify.app/#/filmdom/home",

    },
	{
		title: "Portfolio",
		description: "My personal portfolio which you are currenly viewing!",
		imgUrl: portfolioImg,
		web: true, 
		github:"https://github.com/jakestringfellow/portfolio",
		link: "https://jake-stringfellow.netlify.app/"
	}
  ];

  const otherProjects = [
	{
		title: "Ray-Tracing",
		description: "3D rendering program simulating light ray/object interaction. C++",
		imgUrl: rayTracerImg,
		web: false,
		github: "https://github.com/jakestringfellow/Ray-Tracer-Animation",
		link: "",

	},
	{
		title: "3D Graphics Engine",
		description: "3D graphics engine with modern graphics programming techniques. C++, OpenGL, GLSL, GLAD",
		imgUrl: graphicsImg,
		web: false,
		github: "https://github.com/jakestringfellow/Real-Time-3D-Graphics-Engine",
		link: "",

	},
	{
		title: "Real-Time 2D Object Recognition",
		description: "Recognition of a set of 2D objects, processes video frames to create and compare feature vectors to accurately identify objects. C++, OpenCV",
		imgUrl: objRecImg,
		web: false,
		github: "https://github.com/jakestringfellow/Real-Time-2D-Object-Recognition",
		link: "",
	},
	{
		title: "Real-Time Sign Language Recognition",
		description: "Recognition of hand gestures using the ASL alphabet in real time using a CNN. Python, OpenCV, Keras, Tensorflow, MediaPipe, NumPy",
		imgUrl: signLangRecImg,
		web: false,
		github: "https://github.com/jakestringfellow/ASL-Letter-Recognition",
		link: "",
	}
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Here are a few past projects I've worked on. For web development projects, click on the first tab. For computer graphics or vision projects, click on the second.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Web</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Graphics</Nav.Link>
                    </Nav.Item>
                    
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          webProjects.map((webProject, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...webProject}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
						<Row>
							{
							otherProjects.map((otherProject, index) => {
								return (
								<ProjectCard
									key={index}
									{...otherProject}
									/>
								)
							})
							}
                      	</Row>
                    </Tab.Pane>
                    
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}