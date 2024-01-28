import Ls from "../localStorageService";

const contentNode = document.querySelector('#content')

export default function renderContacts() {
    const groupList = Ls.getGroups()
    const contactsList = Ls.getContacts()
    
    const accordion = document.createElement('div')
    accordion.className ='accordion accordion-flush'
    accordion.id = 'accordionFlush'
    for (let i = 0; i < groupList.length; i++) {
        const container = document.createElement('div')
        container.className = 'accordion-item'

        const accordionHeader = document.createElement('h2')

        accordionHeader.className = 'accordion-header'
        const accordionButton = document.createElement('button')
        
        accordionButton.className = 'accordion-button collapsed'
        accordionButton.type = 'button'
        accordionButton.setAttribute('data-bs-toggle', 'collapse')
        accordionButton.setAttribute('data-bs-target', `#flush-collapse${i}`)
        accordionButton.setAttribute('aria-expanded', `false`)
        accordionButton.setAttribute('aria-controls', `flush-collapse${i}`)
        accordionButton.textContent = `${groupList[i]}`

        const accordionBodyContainer = document.createElement('div')
        accordionBodyContainer.id = `flush-collapse${i}`
        accordionBodyContainer.className = 'accordion-collapse collapse'
        accordionBodyContainer.setAttribute('data-bs-parent', '#accordionFlush')

        const accordionBody = document.createElement('div')
        accordionBody.className = 'accordion-body'
        const filteredList = contactsList.filter((item) => item.group === groupList[i])
        for (let i = 0; i < filteredList.length; i++) {
            
            const contactContainer = document.createElement('div')
            contactContainer.className = 'contact_container'

            const name = document.createElement('div')
            name.textContent = `${filteredList[i].name}`

            const rightContainer = document.createElement('div')
            rightContainer.className = 'right_container'

            const phone = document.createElement('div')
            phone.textContent = `${filteredList[i].phone}`

            const svgContainerEdit = document.createElement('div')

            const svgEdit = document.createElement('img')
            svgContainerEdit.className = 'svg_container_edit'
            svgEdit.src = './img/Mode edit.svg'

            const svgContainerDelete = document.createElement('div')
            svgContainerDelete.setAttribute('data-id', `${filteredList[i].id}`)

            const svgDelete = document.createElement('img')
            svgContainerDelete.className = 'svg_container_delete'
            svgDelete.src = './img/Delete forever.svg'
            svgContainerEdit.append(svgEdit)
            svgContainerDelete.append(svgDelete)
            rightContainer.append(phone, svgContainerEdit, svgContainerDelete)
            contactContainer.append(name, rightContainer)
            accordionBody.append(contactContainer)

            svgContainerDelete.addEventListener('click', ()=> {
                const index = contactsList.findIndex((object) => object.id === svgContainerDelete.dataset.id)
                contactsList.splice(index, 1)
                Ls.setContacts(contactsList)
                accordionBody.removeChild(contactContainer)
            })
        }
        

        accordionBodyContainer.append(accordionBody)
        accordionHeader.append(accordionButton)
        container.append(accordionHeader, accordionBodyContainer)
        accordion.append(container)



    }
    contentNode.append(accordion)
}
