import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Row, Col } from 'reactstrap';

function Members(props) {
	console.log(props);
	return (
		<Row className="member-list">
			{props.members.map((member) => (
				<Col key={member.id} className="member">
					<Card>
						<CardTitle>{member.name}</CardTitle>
						<CardSubtitle>{member.email}</CardSubtitle>
						<CardText>{member.role}</CardText>
					</Card>
				</Col>
			))}
		</Row>
	);
}

export default Members;
