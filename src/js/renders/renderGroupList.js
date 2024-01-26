import Ls from "../localStorageService"

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
        const svgContainer = document.createElement('div')
        const svg = document.createElement('img')
        svgContainer.className = 'svg_container'
        svg.src = './img/Delete forever.svg'
        svgContainer.append(svg)
        container.append(input, svgContainer)
        groupOffcanvas.append(container)
        
    }
}