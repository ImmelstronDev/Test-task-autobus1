
export default class Ls {
    static getGroups () {

        try {const data = localStorage.getItem('group')
        return JSON.parse(data)
        } catch (error) {
            return []
        }
    }

    static setGroups (groups) {
        localStorage.setItem('group', JSON.stringify(groups))
    }

    static getContacts () {
        try {const data = localStorage.getItem('contacts')
        return JSON.parse(data)
        } catch (error) {
            return []
        }
    }

    static setContacts(contacts) {
        localStorage.setItem('contacts', JSON.stringify(contacts))
    }
}