import ContactCard from './ContactCard'

const ContactList = ({ contacts }) => {
    return (
        <div>
            {
                contacts.map((contact, index) => {
                    return (
                        <div key={index}>
                            <ContactCard contact={contact} />
                        </div>
                    )
                })
            }
        </div>
    );
}

export default ContactList; 