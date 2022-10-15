import React, { useState, useEffect } from "react";
import { ContactList } from './'
import { SingleContact } from './'




// const dummyContacts = [
//   {"id": 1, "name": "R2-D2", "phone": "222-222-2222", "email": "r2d2@droids.com"},
//   {"id": 2, "name": "C-3PO", "phone": "333-333-3333", "email": "c3po@droids.com"},
//   {"id": 3, "name": "BB-8", "phone": "888-888-8888", "email": "bb8@droids.com"}
// ]

const Main = () => {
  const [contacts, setContacts] = useState([])
  const [selectedContact, setSelectedContact] = useState({})
  
  useEffect(()=> {  
    async function getContacts () {
    let fetchedData = await fetch('http://jsonplace-univclone.herokuapp.com/users')
    let data = await fetchedData.json()
    setContacts(data)
    }
  getContacts()
  },[])

async function selectContact (contactId) {
  let fetchedContact = await fetch (`http://jsonplace-univclone.herokuapp.com/users/${contactId}`)
  let contactData = await fetchedContact.json()
  setSelectedContact(contactData)
}

  return (
    <div id="main">
    <div id="navbar">
      <div>Contact List</div>
    </div>
    <div id="container">
      {selectedContact.id ? <SingleContact selectedContact={selectedContact} setSelectedContact={setSelectedContact}/>: <ContactList  contacts={contacts} selectedContact={selectedContact} selectContact={selectContact}/>}
    </div>
  </div>
  );
};

export default Main;
