import React from "react";
import Avatar from "react-avatar";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteContact } from "../services/action/Action";

const Contacts = ({ contact,selectAll }) => {
    const dispatch = useDispatch()
    const { name, phone, email,id } = contact;
    return (
        <tr>
            <td>
                <div className="custom-control custom-checkbox">
            {!selectAll?<input type="checkbox" className="custom-control-input" />:<input type="checkbox" className="custom-control-input" checked/>} 
                    <label className="custom-control-label" />
                </div>
            </td>
            <td>
                <Avatar className="mr-2" name={name} size="45" round={true} />
                {name}
            </td>
            <td>{phone}</td>
            <td>{email}</td>
            <td>
                <Link to={`/components/edit/${id}`}>
                    <span className="material-icons">
                        edit
                    </span>
                </Link>
               
                    <Link className="material-icons" onClick={()=>{
                        dispatch(deleteContact(id))
                    }}>person_remove</Link>
          

            </td>
        </tr>
    );
};

export default Contacts;
