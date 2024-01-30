import Ls from "../localStorageService"
import Deleteforever from "./../../img/Delete forever.svg"

const groupOffcanvas = document.querySelector('.groups')
const groupList = Ls.getGroups()

export default function renderGroupList () {

    
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
        svgDelete.src = Deleteforever
        svgContainerDelete.append(svgDelete)
        container.append(input, svgContainerDelete)
        groupOffcanvas.append(container)

        svgContainerDelete.addEventListener('click', ()=> {
            groupOffcanvas.removeChild(container)

        })
        
    }

    
}
