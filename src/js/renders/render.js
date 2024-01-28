import Ls from "../localStorageService";
import renderContacts from "./renderContacts";
import renderGroupList from "./renderGroupList";
import renderMessage from "./renderMessage";
import renderOptionsGroup from "./renderOptionGroup";

export default function render() {
    const contactList = Ls.getContacts()
    const groupList = Ls.getGroups()
    if(groupList !== null ) {
        renderGroupList()
        renderOptionsGroup()
    }
    
    if(contactList === null || contactList.length === 0) {
        renderMessage()
    }else {
        renderContacts()
    }
    
}
