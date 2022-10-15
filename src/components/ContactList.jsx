import React from 'react'
import ContactRow from './ContactRow'

const ContactList = (props) => {
    const contacts = props.contacts
    const selectedContact = props.selectedContact;
    const selectContact = props.selectContact;

    return <table>
    <tbody>
    <tr>
      <th>Name</th>
      <th>Phone</th>
      <th>Email</th>
    </tr> 
    <ContactRow contacts={contacts} selectContact={selectContact} selectedContact={selectedContact}/>
    </tbody></table>
}

export default ContactList