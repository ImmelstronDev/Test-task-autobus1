import '../scss/styles.scss'
import * as bootstrap from 'bootstrap'
import * as Popper from "@popperjs/core"
import renderMessage from './renders/renderMessage'
import Ls from './localStorageService'
import renderOptionsGroup from './renders/renderOptionGroup'
import render from './renders/render'
import renderContacts from './renders/renderContacts'

const saveBtn = document.querySelector('.save')
const contactBtn = document.querySelector('#save_contact')
const inputName = document.querySelector('#name')
const inputPhone = document.querySelector('#phone')
const select = document.querySelector('.form-select')
const defaultOption = document.querySelector('#default_option')
const content = document.querySelector('#content')
const groupOffcanvas = document.querySelector('.groups')
const lightBtn = document.querySelector('.btn-light')

render()

contactBtn.addEventListener('click', ()=> {
    const message = document.querySelector('p')
    let contactList = Ls.getContacts()
    const accordion = document.querySelector('.accordion-flush')
    const result = {}
    result.name = inputName.value
    result.phone = inputPhone.value
    result.group = select.value
    inputName.value = ''
    inputPhone.value = ''
    defaultOption.selected = 'true'
    if(contactList === null) contactList = []
    contactList.push(result)
    contactList.forEach((item, index)=>{
        item.id = `${index}`
    })
    Ls.setContacts(contactList)
    if(accordion !== null) content.removeChild(accordion)
    if(message) content.removeChild(message)
    
    if(contactList === null || contactList.length === 0) {
        renderMessage()
    }else {
        renderContacts()
    }
})

saveBtn.addEventListener('click', ()=> {
    const contactList = Ls.getContacts()
    const groupList = []
    const inputList = document.querySelectorAll('.group_input')
    const accordion = document.querySelector('.accordion-flush')
    const message = document.querySelector('p')

    inputList.forEach((item)=> {
        groupList.push(item.value)
    })
    Ls.setGroups(groupList)
    if(accordion !== null) content.removeChild(accordion)
    if(message) content.removeChild(message)
    
    if(contactList === null || contactList.length === 0 || groupList.length === 0) {
        renderMessage()
    }else {
        renderContacts()
    }
    renderOptionsGroup()
})

lightBtn.addEventListener('click', ()=> {
    const container = document.createElement('div')
    container.className = 'group_container'

    const input = document.createElement('input')
    input.className = 'form-control group_input'
    input.type = 'text'

    const svgContainerDelete = document.createElement('div')

    const svgDelete = document.createElement('img')
    svgContainerDelete.className = 'svg_container_delete'
    svgDelete.src = './img/Delete forever.svg'
    svgContainerDelete.append(svgDelete)
    container.append(input, svgContainerDelete)
    groupOffcanvas.append(container)

    svgContainerDelete.addEventListener('click', ()=> {
        groupOffcanvas.removeChild(container)

    })
})
