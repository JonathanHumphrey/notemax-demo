import React from "react";
import "../styles/Dash.css";
import FileUpload from "./FileUpload";
import ItemCard from "../components/ItemCard";

import { useState } from "react";

import { useGetUsersQuery } from "../features/usersApiSlice";

// data imported from static to mimic the backend
import { dummyData } from "../static/dummyData"


const Dash = () => {
	useGetUsersQuery(undefined, {
		pollingInterval: 60000,
		refetchOnFocus: true,
		refetchOnMountOrArgChange: true,
	});
	const user = {
		name: "test",
		categories: ['Worksheets', "Note Taking"],
		userId: 0
	}

	const [modalOpen, setModalOpen] = useState(false);
	const handleModalOpen = () => {
		setModalOpen(true);
	};
	const handleCloseModal = () => {
		setModalOpen(false);
	};


	
	
	if (user) {
		return (
			<div className="dash-container">
				<div>
					<FileUpload isOpen={modalOpen} onClose={handleCloseModal} />
				</div>
				<h2>Welcome, {user.name}</h2>
				<div className="button-group">
					<p>
						<button onClick={handleModalOpen} className="styled-link"> Upload Template </button>
					</p>
				</div>
				<div className="content-feed">
					{user.categories.map((category, id) => 
						<div className="user-categories" key={id}>
							<h4>{category}</h4>
							<br></br>
							{dummyData.map((data, index) => (
								user.categories.includes(data.category) && category === data.category ?
									<ItemCard 
										key={index} 
										author={data.author}
										file={data.file}
										date={data.date}
										likes={data.likes}
										dislikes={data.dislikes}
										category={data.category}
										comments={data.comments}
									/> : null
							))}
						</div>
					)}
					<div className="user-templates">
					<h3>User's Templates</h3>
					{user.categories.map((category, id) => 
						<div className="user-feed" key={id}>
						
							<h4>{category}</h4>
							<br></br>
							{dummyData.map((data, index) => (
								user.categories.includes(data.category) && category === data.category ?
									<ItemCard 
										key={index} 
										author={user.name}
										file={data.file}
										date={data.date}
										likes={data.likes}
										dislikes={data.dislikes}
										category={data.category}
										comments={data.comments}
									/> : null
							))}
						</div>
					)}
				</div>
				</div>
				
			</div>
		);
	}
};

export default Dash;

/* {user.categories.includes(dummyData.category)?
	dummyData.map((data, index) =>{
		<ItemCard author={data.author}/>
	})
:
null
} */