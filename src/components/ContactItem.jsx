import styles from './form.module.css';

const ContactItem = ({ contact, onDeleteContact }) => (
  <li className={styles.button} >
    {contact.name} - {contact.number}
    <button  onClick={() => onDeleteContact(contact.id)}>Delete</button>
  </li>
);

export default ContactItem;