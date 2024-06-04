import { useDispatch } from 'react-redux';
import css from './ContactSearch.module.css'
import { filterContact } from '../../redux/contactSlice';

export const ContactSearch = () => {
    const dispatch = useDispatch();
    const onChange = (e) => {
        console.log(e.target.value);
        dispatch(filterContact(e.target.value))
     };
    return <>
        
    <input className={css.input} type="search" name="filter" onChange={onChange} placeholder='Search'></input>
    </>
 };