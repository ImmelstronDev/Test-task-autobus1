import Ls from "../localStorageService"

const select = document.querySelector('.form-select')
const groupList = Ls.getGroups()

export default function renderOptionsGroup () {
    for (let i = 0; i < groupList.length; i++) {
        const option = document.createElement('option')
        option.textContent = `${groupList[i]}`
        option.value = `${groupList[i]}`
        select.append(option)
    }
}