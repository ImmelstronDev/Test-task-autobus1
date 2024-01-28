import Ls from "../localStorageService"

const groupOffcanvas = document.querySelector('.groups')
const groupList = Ls.getGroups()

export default function renderGroupList () {
    const lightBtn = document.querySelector('.btn-light')
    
    for (let i = 0; i < groupList.length; i++) {
        const container = document.createElement('div')
        container.className = 'group_container'

        const input = document.createElement('input')
        input.value = `${groupList[i]}`
        input.className = 'form-control group_input'
        input.type = 'text'
        input.disabled = 'true'

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
        
    }

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
}
