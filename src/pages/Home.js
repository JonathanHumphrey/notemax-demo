import React from "react";
import "../styles/Home.css";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<div className="container">
			<div className="rectangle">
			</div>
			<div className="text">
				<h1 id="title">NoteMax</h1>
				<p id="splash-text">
					Welcome to NoteMax, the ultimate note-taking app for all your productivity needs! 
					Whether you're a student, professional, or just someone who loves to jot down ideas, NoteMax is 
					here to streamline your note-taking experience like never before.
				</p>
				</div>
				
				<div className="links">
					<Link className="styled-link" to="/login">
						<a>Log In</a>
					</Link>
					<Link className="styled-link" to="/signup">
						Sign Up
					</Link>
					
			</div>
			<Link className="styled-link" to="/dash">
				Dash Demo
			</Link>
		</div>
	);
};

export default Home;
