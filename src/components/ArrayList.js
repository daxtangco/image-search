import React from "react";

const contactInfo = 
[
    {name: "Juan", phone: "09929292935"},
    {name: "Sam", phone: "09923562234"},
    {name: "Diego", phone: "09924798993"}
];

const contacts = contactInfo.map( (contact, index) => {
    return <li key={index} >{contact.name}: {contact.phone}</li>
} );

class ArrayList extends React.Component {
    render () {
        return (
            <ul>
                {contacts}
            </ul>
        )
    }

}

export default ArrayList;