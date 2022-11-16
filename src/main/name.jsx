import React from 'react';
import { Amplify } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import awsExports from "../aws-exports";
import "../css/namecard.css";

Amplify.configure(awsExports);


  
function Profile({ user }) {

	return (
		<div class="go-gadget-content">
			<div class="gadget_design_wrap">
				<div class="profile"> <img id="photo_thumb"
					src="https://mountain.daouoffice.com/resources/images/photo_profile_small.jpg" title="신상훈"/>
					<p class="mini_gnb_name" id="profile_name">{user.attributes.family_name} {user.attributes.name} {user.attributes['custom:position']}</p>
					<p class="mini_gnb_name" id="profile_name">{user.attributes['custom:department']}</p> 
				</div>
			</div>
		</div>
	);
}

export default withAuthenticator(Profile);
