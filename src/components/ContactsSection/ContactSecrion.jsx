import { ContactSearch } from 'components/ContactSearch/ContactSearch'
import css from './ContactSection.module.css'
import { ContactList } from 'components/ContactsList/ContactsList'


export const ContactsSection = () => { 
    return <>
    <div className={css.contener}>
      <ContactSearch/>
      <ContactList/>
      </div>
    </>
};

