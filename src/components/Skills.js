import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css";
import javascriptLogo from "../assets/img/javascript-original.svg";
import reactLogo from "../assets/img/react-original.svg";
import cssLogo from "../assets/img/css3-original.svg";
import htmlLogo from "../assets/img/html5-original.svg";
import nodejsLogo from "../assets/img/nodejs-original.svg";
import cplusplusLogo from "../assets/img/cplusplus-original.svg";
import pythonLogo from "../assets/img/python-original.svg";
import openglLogo from "../assets/img/opengl-original.svg";
import opencvLogo from "../assets/img/opencv-original.svg";
import mongodbLogo from "../assets/img/mongodb-original.svg";
import gitLogo from "../assets/img/git-original.svg";
import bootstrapLogo from "../assets/img/bootstrap-original.svg"




export const Skills = () => {

	// Handle carousel responsiveness
	const responsive = {
		superLargeDesktop: {
			breakpoint: { max: 4000, min: 3000 },
			items: 5
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1
		}
	};

	return (
		<section className="skill" id="skills">
			<Container>
				<Row>
					<Col>
						<div className="skill-bx">
							<h2>
								Skills
							</h2>
							<p>
							My proficiency in programming is highlighted by my fluency in languages like Python and C++, complemented by my understanding of JavaScript. In the realm of web development, I focus on creating dynamic, responsive, and user-friendly interfaces using HTML, CSS, and React.js, along with backend development using Node.js. My fascination with the intersection of technology and visual representation is evident in my work with OpenGL and OpenCV, where I dive into the complexities of computer graphics and vision. Each of these skills has been cultivated through practice and application, reflecting my commitment to continual learning and professional growth in software engineering.
							</p>
							<Carousel responsive={responsive} infinite={true} className="skill-slider">
								<div className="item">
									<img src={javascriptLogo} alt="Image" />
									<h5>Javascript</h5>
								</div>
								<div className="item">
									<img src={reactLogo} alt="Image" />
									<h5>React</h5>
								</div>
								<div className="item">
									<img src={cssLogo} alt="Image" />
									<h5>CSS</h5>
								</div>
								<div className="item">
									<img src={htmlLogo} alt="Image" />
									<h5>HTML</h5>
								</div>
								<div className="item">
									<img src={nodejsLogo} alt="Image" />
									<h5>Node.js</h5>
								</div>
								<div className="item">
									<img src={cplusplusLogo} alt="Image" />
									<h5>C++</h5>
								</div>
								<div className="item">
									<img src={pythonLogo} alt="Image" />
									<h5>Python</h5>
								</div>
								<div className="item">
									<img src={openglLogo} alt="Image" />
									<h5>OpenGL</h5>
								</div>
								<div className="item">
									<img src={opencvLogo} alt="Image" />
									<h5>OpenCV</h5>
								</div>
								<div className="item">
									<img src={mongodbLogo} alt="Image" />
									<h5>MongoDB</h5>
								</div>
								<div className="item">
									<img src={gitLogo} alt="Image" />
									<h5>Git</h5>
								</div>
								<div className="item">
									<img src={bootstrapLogo} alt="Image" />
									<h5>Bootstrap</h5>
								</div>
							</Carousel>
						</div>
					</Col>
				</Row>
			</Container>
			

		</section>
	)

}