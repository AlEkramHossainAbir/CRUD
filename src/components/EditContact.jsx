import { Button } from 'react-bootstrap';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editContact,updateContact } from '../services/action/Action';

import { useHistory, useParams } from 'react-router-dom';

const EditContact =() =>{
 
    let {id} = useParams()
    let history = useHistory()
    const contact = useSelector((state)=> state.contact.contact)
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [phone,setPhone] = useState('')
    const dispatch = useDispatch()
    useEffect(()=>{
        if(contact!=null)
        {
            setName(contact.name)
            setPhone(contact.phone)
            setEmail(contact.email)
        }
        dispatch(editContact(id))
    },[contact]) 
    const onEditContact=(e)=>{
        e.preventDefault()
        const update_contact = Object.assign(contact,{
            name:name,
            phone:phone,
            email:email
        })

        dispatch(updateContact(update_contact))
        history.push('/')

    }

    return (
        <div>
                <h1>Add A contact</h1>
    <form onSubmit={(e)=>onEditContact(e)}>
        <div className="form-group">
            <input type="text" className="form-control" placeholder="Enter Your Name" value={name} onChange={(n)=>{setName(n.target.value)}}></input>
        </div>
        <div className="form-group">
            <input type="text" className="form-control" placeholder="Enter Your Phone" value={phone} onChange={(p)=>{setPhone(p.target.value)}}></input>
        </div>
        <div className="form-group">
            <input type="text" className="form-control" placeholder="Enter Your Email" value={email} onChange={(e)=>{setEmail(e.target.value)}}></input>
        </div>
        <Button variant="danger" type="submit">Submit</Button>
    </form>
    </div>
    )
}


export default EditContact