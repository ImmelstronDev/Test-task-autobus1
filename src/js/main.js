import '../scss/styles.scss'
import * as bootstrap from 'bootstrap'
import * as Popper from "@popperjs/core"
import renderMessage from './renders/renderMessage'
import Ls from './localStorageService'
import renderGroupList from './renders/renderGroupList'
import renderOptionsGroup from './renders/renderOptionGroup'
import render from './renders/render'
import renderContacts from './renders/renderContacts'

const saveBtn = document.querySelector('.save')

const contactList = Ls.getContacts()
// const contacts = [
//     {"name":"Оби Ван Кеноби","phone":"+88005553535","group":"Чуханы"},
//     {"name":"Энакен Скайуокер","phone":"+88005553535","group":"Орки"},
//     {"name":"Мэйс Винду","phone":"+88005553535","group":"Джедаи"},
//     {"name":"Граф Дуку","phone":"+88005553535","group":"Ситхи"}]
// const groups = ['Чуханы', 'Орки', 'Ситхи', 'Джедаи']
// Ls.setContacts(contacts)
// Ls.setGroups(groups)

render()

saveBtn.addEventListener('click', ()=> {
    console.log('save')
    const groupList = []
    const inputList = document.querySelectorAll('.group_input')
    const content = document.querySelector('#content')
    const accordion = document.querySelector('.accordion-flush')
    inputList.forEach((item)=> {
        groupList.push(item.value)
    })
    Ls.setGroups(groupList)
    content.removeChild(accordion)
    if(contactList === null) {
        renderMessage()
    }else {
        renderContacts()
    }
    renderOptionsGroup()
})