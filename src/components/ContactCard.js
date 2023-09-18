const ContactCard = ({ contact }) => {
    return (
        <div className="contact">
            <div>
                <div><h3>Name:- </h3><span>{contact.name}</span></div>
                <div><h3>Email:- </h3><span>{contact.email}</span></div>
            </div>
            <button>Delete</button>
        </div>
    );
}

export default ContactCard;