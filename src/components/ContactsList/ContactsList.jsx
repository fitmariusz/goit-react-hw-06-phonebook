import { useDispatch, useSelector } from "react-redux";
import { searchContact } from "../Search/Search";
import css from "./ContactsList.module.css"
import { getContacts } from "../../redux/selectors";
import { deleteContact } from "../../redux/contactSlice";

export const ContactList = () => { 
  const dispatch = useDispatch();
  const dataPhonebook = useSelector(getContacts)
  const onDelete = (Id) => { 
    dispatch(deleteContact(Id));
  };
  return (<>
    
    <ul className={css.ul}>
          {searchContact(dataPhonebook.contacts, dataPhonebook.filter).length !== 0 ? 
            searchContact(dataPhonebook.contacts, dataPhonebook.filter).map(contact =>
              <li className={css.li} key={contact.id}><span className={css.span}>{contact.name}</span><span className={css.span} >{contact.number}</span>
                <button className={css.button} onClick={() => onDelete(contact.id)} required>Delete</button></li>)
            :
          <p>No contacts....</p>}
      </ul>
    </>);
};


