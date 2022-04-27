var form = document.getElementById('sheetdb-form');
form.addEventListener("submit", e => {
    e.preventDefault();
    fetch(form.action, {
        method: "POST",
        body: new FormData(document.getElementById("sheetdb-form")),
    }).then(
        response => response.json()
    ).then((html) => {
        resetarDados()
    });
});

const txtC = document.getElementById('txtCerto')
const txtE = document.getElementById('txtErrado')
const selec = document.getElementById('selec')

function resetarDados() {
    txtC.value = '';
    txtE.value = '';
    selec.value = '';
}