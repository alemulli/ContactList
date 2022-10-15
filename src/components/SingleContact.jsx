import React from 'react';


const SingleContact = (props) => {
    const selectedContact = props.selectedContact;
    const setSelectedContact = props.setSelectedContact;

    return <div id="single-contact">
        <div id="contact-info">
            <p><b>Name:</b>{selectedContact.name} </p>
            <p><b>Email:</b>{selectedContact.email} </p>
            <p><b>Phone:</b>{selectedContact.phone} </p>
            <div>
                <b>Address:</b>
                <p>
                    <b>Street:{selectedContact.address.street}</b> 
                    <br />
                    <b>City/Zip:{selectedContact.address.city}{selectedContact.address.zipcode}</b> 
                </p>
            </div>
            <p><b>Company:</b>{selectedContact.company.name} </p>
        </div>
    </div>
}

export default SingleContact