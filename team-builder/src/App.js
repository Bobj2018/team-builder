import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import MemberForm from './components/MemberForm';
import Members from './components/Members';

import { Container, Row, Col } from 'reactstrap';

function App() {
	const [ members, setMembers ] = useState([
		{
			id: 1,
			name: 'Joshua Rieth',
			email: 'johndoe@gmail.com',
			role: 'Coder'
		}
	]);

	const addNewMember = (member) => {
		const newMember = {
			id: Date.now(),
			name: member.name,
			email: member.email,
			role: member.role
		};

		setMembers([ ...members, newMember ]);
	};

	return (
		<Container className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<MemberForm addNewMember={addNewMember} />

				<Members members={members} />
			</header>
		</Container>
	);
}

export default App;
