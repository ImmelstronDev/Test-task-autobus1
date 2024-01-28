import Ls from "../localStorageService"

const select = document.querySelector('.form-select')

export default function renderOptionsGroup () {
    const groupList = Ls.getGroups()
    const oldOptions = document.querySelectorAll('.option')
    if(oldOptions.length !== 0) {
        oldOptions.forEach((item,index)=> {
            select.removeChild(item)
        })
    }
    
    for (let i = 0; i < groupList.length; i++) {
        const option = document.createElement('option')
        option.className = 'option'
        option.textContent = `${groupList[i]}`
        option.value = `${groupList[i]}`
        select.append(option)
    }
}
