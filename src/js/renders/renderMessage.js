const contentNode = document.querySelector('#content')

 export default function renderMessage() {
    const p = document.createElement('p')
    p.textContent = 'Список контактов пуст'
    p.className = 'main_message'
    contentNode.append(p)
}
