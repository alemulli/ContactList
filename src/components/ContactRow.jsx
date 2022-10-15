import React from 'react'

const ContactRow = (props) => {
    const contacts = props.contacts
    const selectedContact = props.selectedContact;
    const selectContact = props.selectContact;

    return contacts.map((element, index)=>{
      return <tr onClick={() => selectContact(element.id)} key={`contact-${index}`}>
    <td key={`name-${index}`}>{element.name}</td>
    <td key={`phone-${index}`}>{element.phone}</td>
    <td key={`email-${index}`}>{element.email}</td>
    </tr>
    }
    )
    
}

export default ContactRow