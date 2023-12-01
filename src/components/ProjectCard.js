import { Col, Row } from "react-bootstrap";
import githubIcon from '../assets/img/github.svg';
import linkIcon from "../assets/img/link-icon.svg";

export const ProjectCard = ({ title, description, imgUrl, web, github, link}) => {
	return (
		<Col size={12} sm={6} md={4}>
			
			<div className="proj-imgbx">
				<img src={imgUrl} />
				<div className="proj-txtx">
					<h4>{title}</h4>
					<span>{description}</span>
				</div>

			
				<Row className="proj-link">
					<Col size={6}>
						<a href={github} className="proj-icon" target="_blank"><img src={githubIcon} alt="" /></a>
					</Col>
					{web &&
						<Col size={6}>
						<a href={link} className="proj-icon" target="_blank"><img src={linkIcon} alt="" /></a>
						</Col>
					} 
				</Row>
			</div>
		</Col>
	)
}