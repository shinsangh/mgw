import React from 'react';
import { Amplify } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import awsExports from "../aws-exports";

Amplify.configure(awsExports);


  
function Profile({ signOut, user }) {

	return (
		
		<div class="notremoval gnb_layer gnb_profile_layer on" id="mini_gnb_profile_more">
			<div class="mini_gnb_content"> <img id="photo_thumb"
				src="https://mountain.daouoffice.com/resources/images/photo_profile_small.jpg" title="신상훈"/>
				<p class="mini_gnb_name" id="profile_name">{user.attributes.family_name} {user.attributes.name} {user.attributes['custom:position']}</p>
				<p class="mini_gnb_name" id="profile_name">{user.attributes['custom:department']}</p> 
				<p class="mini_gnb_txt" id="profile_email">{user.attributes.email}</p>
				<div class="mini_gnb_btn_wrap">
					<button onClick={signOut}>Sign out</button>
				</div>
			</div>
		</div>
	);
}

export default withAuthenticator(Profile);