import React, { useState } from 'react';
import {Table} from 'react-bootstrap'
import { useSelector } from 'react-redux';
import Contacts from './Contacts';


const Content =()=>{
  const [selectAll,setSelectAll] = useState(false)
  const contacts = useSelector((state)=>state.contact.contacts)
  console.warn(contacts)
    return(
        <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>
        <div className="custom-control custom-checkbox" > 
         {/* onClick={()=>{
          setSelectAll(!selectAll)             it can be used also 
        }} */}
          {/* {!selectAll?<input type="checkbox" className="custom-control-input" />:<input type="checkbox" className="custom-control-input" checked/>} */}
          <input id="selectAll" type="checkbox"
          value={selectAll}
          className="custom-control-input" 
          onClick={()=>{
            setSelectAll(!selectAll)}}
          />
          <label htmlFor="selectAll" className="custom-control-label"/>
        </div>
      </th>
      <th>Name</th>
      <th>Phone</th>
      <th colSpan="2">Email</th>
    </tr>
  </thead>
  <tbody>
    {contacts.map((contact)=>{
      return(
        <Contacts contact={contact} key={contact.id} selectAll={selectAll}/>
      )
    })}
  </tbody>
</Table>
    )
}

export default Content