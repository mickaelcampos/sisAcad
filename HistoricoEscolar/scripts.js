function openClose(id, event) {
    let button = event.target;
    if (button && button.localName === "a") {
        button = button.parentNode
    }
    const table = document.getElementById(id);
    const isHidden = table.getAttribute('hidden');
    isHidden ? (
        table.removeAttribute('hidden'),
        button.setAttribute('class', 'active')
    ) : (
        table.setAttribute('hidden', 'true'),
        button.removeAttribute('class')
    )
}
