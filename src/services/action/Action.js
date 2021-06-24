import { Create_Contact } from "../../constant/Types"
import { Edit_Contact,Update_Contact,Delete_Contact } from "../../constant/Types"

export const addContact = (contact)=>{
    return{
      type:Create_Contact,
      payload:contact
    }
  }


  export const editContact =(id)=>({
      type:Edit_Contact,
        payload:id
      
  })

  export const updateContact =(contact)=>({
    type:Update_Contact,
      payload:contact
    
})


export const deleteContact =(id)=>({
    type:Delete_Contact,
      payload:id
    
})

