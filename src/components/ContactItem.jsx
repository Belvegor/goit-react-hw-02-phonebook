const ContactItem = ({ contact }) => (
  <li>
    {contact.name} - {contact.number}
  </li>
);

export default ContactItem;