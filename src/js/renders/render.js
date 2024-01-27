import Ls from "../localStorageService";
import renderContacts from "./renderContacts";
import renderGroupList from "./renderGroupList";
import renderMessage from "./renderMessage";
import renderOptionsGroup from "./renderOptionGroup";



export default function render() {
    const contactList = Ls.getContacts()
    

    renderGroupList()
    renderOptionsGroup()
    if(contactList === null) {
        renderMessage()
    }else {
        renderContacts()
    }
    
}
