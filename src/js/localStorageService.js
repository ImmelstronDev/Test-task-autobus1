
export default class Ls {
    static getGroups () {
        const data = localStorage.getItem('group')
        if (data !== null || data !== undefined) {
            const result = JSON.parse(data || [])
            return result
        }
        return []
    }

    static setGroups (groups) {
        localStorage.setItem('group', JSON.stringify(groups))
    }

    static getContacts () {
        const data = localStorage.getItem('contacts')
        if (data !== null || data !== undefined) {
            const result = JSON.parse(data || [])
            return result
        }
        return []
    }

    static setContacts(contacts) {
        localStorage.setItem('contacts', JSON.stringify(contacts))
    }
}