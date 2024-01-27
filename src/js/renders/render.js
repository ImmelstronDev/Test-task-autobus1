import Ls from "../localStorageService";
import renderContacts from "./renderContacts";
import renderGroupList from "./renderGroupList";
import renderMessage from "./renderMessage";
import renderOptionsGroup from "./renderOptionGroup";

const contactList = Ls.getContacts()

export default function render() {
    renderGroupList()
    renderOptionsGroup()
    if(contactList === null) {
        renderMessage()
    }else {
        renderContacts()
    }
    
}
