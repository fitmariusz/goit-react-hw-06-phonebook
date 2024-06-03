import { addContact } from "./actions";
import { initialContactsState } from "./constants";



export const contactsReducer = (state = initialContactsState, action) => {
  switch (action.type) {
    case addContact.type:
      return [...state, action.payload];

    // case deleteTask.type:
    //   return state.filter(task => task.id !== action.payload);

    // case toggleCompleted.type:
    //   return state.map(task => {
    //     if (task.id !== action.payload) {
    //       return task;
    //     }
    //     return { ...task, completed: !task.completed };
    //   });

    default:
      return state;
  }
};
// console.log(addContact());