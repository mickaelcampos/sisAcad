function openClose(numFase, event) {
    const button = event.target;
    const table = document.getElementById(numFase);
    const isHidden = table.getAttribute('hidden');
    isHidden ? (
        table.removeAttribute('hidden'),
        button.innerText = button.innerText.replace('▶', '▼')
        ) : (
        table.setAttribute('hidden', 'true'),
        button.innerText = button.innerText.replace('▼', '▶')
    )
}
