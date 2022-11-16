import React, { memo, useState, useRef, useEffect } from 'react';
import "../css/header.css";
import { Amplify } from "aws-amplify";
import Profile from "./profileModal";
import awsExports from "../aws-exports";
Amplify.configure(awsExports);


const Header = memo(() => {
	const modalRef = useRef();
	const modalImg = useRef();
	let [modal, setModal] = useState(false);
	useEffect(() => {
		document.addEventListener('mousedown', clickModalOutside);
	
		return () => {
		  document.removeEventListener('mousedown', clickModalOutside);
		};
	  });
	const clickModalOutside = event => {
		if (!modalRef.current.contains(event.target)) {
			if(!modalImg.current.contains(event.target) && modal === true){
				setModal(!modal)
			}
		}
	};

	return(
		<header className="header">
			<div className="header-zone">
				<h1></h1>
				<span className="sign-out" onClick={()=>{setModal(!modal)}}>
					<img id="sessionThumbnail"	src="https://mountain.daouoffice.com/resources/images/photo_profile_small.jpg" ref={modalImg}/>
				</span>
				<div className="modal-zone" ref={modalRef}>
					{modal === true ? <Profile /> : null}
				</div>
			</div>
		</header>	
	)
})

export default Header;