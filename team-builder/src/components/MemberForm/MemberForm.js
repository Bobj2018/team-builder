import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

function MemberForm({ addNewMember }) {
	const [ member, setMember ] = useState({
		name: '',
		email: '',
		role: ''
	});

	const handleChanges = (event) => {
		setMember({ ...member, [event.target.name]: event.target.value });
	};

	const submitForm = (event) => {
		event.preventDefault();

		addNewMember(member);

		setMember({
			name: '',
			email: '',
			role: ''
		});
	};

	return (
		<Form onSubmit={submitForm}>
			<FormGroup>
				<label htmlFor="name">Name: </label>
				<input
					id="name"
					type="text"
					name="name"
					placeholder="John Doe"
					value={member.name}
					onChange={handleChanges}
				/>
			</FormGroup>
			<FormGroup>
				<label htmlFor="email">Email: </label>
				<input
					id="email"
					type="email"
					name="email"
					placeholder="johndoe@example.com"
					value={member.email}
					onChange={handleChanges}
				/>
			</FormGroup>
			<FormGroup>
				<label htmlFor="role">Role: </label>
				<input
					id="role"
					type="text"
					name="role"
					placeholder="Front-End Dev"
					value={member.role}
					onChange={handleChanges}
				/>
			</FormGroup>
			<Button type="submit">Submit</Button>
		</Form>
	);
}

export default MemberForm;
