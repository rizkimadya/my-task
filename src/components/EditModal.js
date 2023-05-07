import React from "react";
import Button from "./Button";
import "./EditModal.css";

const EditModal = ({ edit, close, data, change, update }) => {
	if (edit) {
		return (
			<div className="modal-container">
				<div className="modal-box">
					<h3>Edit Task</h3>
					<div className="input">
						<input type="text" value={data.title} onChange={change} />
					</div>
					<div className="btn-group">
						<Button title="Update" btnColor="primary" action={update}/>
						<Button title="Kembali" btnColor="warning" action={close} />
					</div>
				</div>
			</div>
		);
	} else {
		return null;
	}
};

export default EditModal;
