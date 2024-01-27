import renderContacts from "./renderContacts";
import renderGroupList from "./renderGroupList";
import renderMessage from "./renderMessage";
import renderOptionsGroup from "./renderOptionGroup";


export default function render() {
    renderGroupList()
    renderOptionsGroup()
    renderContacts()
}
