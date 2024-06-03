import './App.css'
// import {  useEffect, useState } from "react";
// import { nanoid } from 'nanoid';
// import { ContactList } from './ContactsList/ContactsList';
// import { Form } from './Form/Form';
// import { Section } from './Section/Section';
// import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from '../redux/selectors';
// import { deleteContact } from '../redux/contactSlice';
// import { store } from '../redux/store';
// import { addContact } from '../redux/actions';
import { ContactsSection } from './ContactsSection/ContactSecrion';
import { PhoneBook } from './PhoneBook/PhoneBook';

const INITCONTACTS = {
  contacts: [],
  filter: '',
}

export const App = () => {
  // const dispatch = useDispatch();
  // const dataPhonebook = useSelector(getContacts);
  // console.log(dataPhonebookRedux);

  const getData = () => {
    const initialValue = JSON.parse(localStorage.getItem("contacts"));
    
      return (initialValue ? initialValue : INITCONTACTS);
  };
  // useEffect(() => {
    
  //   console.log(getData());
  //   store.contacts=getData();
  // }, []);

// const [dataPhonebookRedux, setDataPhonebook] = useState(getData());


  // const setData = () => {
    // localStorage.setItem("contacts", JSON.stringify(dataPhonebookRedux));
  // };

  

  // const onChange = (event) => {
    // const { name, value } = event.target;
  //   setDataPhonebook({...dataPhonebook,[name]: value })
  //  };
    
  // const onSubmit = (event) => {

    // dispatch(addContact('test', '256354'));
   
//   };

// setData();
  // const onDelete = (contactId) => {
  //   // setDataPhonebook({
  //   //   ...dataPhonebook,
  //   //   contacts: dataPhonebook.contacts.filter(contact => contact.id !== contactId)
  //   // });
  //   dispatch(deleteContact(contactId));
  // };
    
  return (
    <>
      <div className='divForm'> 
        <PhoneBook/>
        <ContactsSection/>
      </div>
    </>
  );
};

