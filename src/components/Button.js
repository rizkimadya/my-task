import React from "react";
import "./Button.css";

const Button = ({ title, action, btnColor }) => {
	return (
		<>
			<button onClick={action} className={`btn btn-${btnColor}`}>
				{title}
			</button>
		</>
	);
};

export default Button;
