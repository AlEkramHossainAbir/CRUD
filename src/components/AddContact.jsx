import { Button } from 'react-bootstrap';
import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../services/action/Action';
import shortid from 'shortid'
import { useHistory } from 'react-router-dom';

const AddContact = () => {
    let history = useHistory()
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [phone,setPhone] = useState('')
    const dispatch = useDispatch()

    const createContact= (val) =>{
        val.preventDefault();

        const newContact={
            id:shortid.generate(),
            name:name,
            phone:phone,
            email:email
        }
        dispatch(addContact(newContact))
        history.push("/")

    }
    return (
        <div>
                <h1>Add A contact</h1>
    <form onSubmit={(e)=>{createContact(e)}}>
        <div className="form-group">
            <input type="text" className="form-control" placeholder="Enter Your Name" value={name} onChange={(n)=>{setName(n.target.value)}}></input>
        </div>
        <div className="form-group">
            <input type="text" className="form-control" placeholder="Enter Your Phone" value={phone} onChange={(p)=>{setPhone(p.target.value)}}></input>
        </div>
        <div className="form-group">
            <input type="text" className="form-control" placeholder="Enter Your Email" value={email} onChange={(e)=>{setEmail(e.target.value)}}></input>
        </div>
        <Button variant="info" type="submit">Submit</Button>
    </form>
    </div>

    )
}
export default AddContact;