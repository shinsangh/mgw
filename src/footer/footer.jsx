import React, { memo } from 'react';
import "../css/footer.css";

const Footer = memo(()=>(
	<footer className="footer">
			<div className="footer-zone">
				<ul>
					<li>Info : info@mountain-info.co.jp</li>
					<li>H.P : <a href="https://mountain-info.co.jp/">https://mountain-info.co.jp/</a></li>
				</ul>
			</div>
		</footer>
))
export default Footer;