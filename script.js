let numeri = 76

const creaNumeri= function(numeri) {
    const tabellaContenitore = document.getElementById("tabella")
    for (let i = 0; i < numeri; i++) {
        const contenitoreCaselle = document.createElement("div")
    
        const cellaNumero = document.createElement("h3")
    cellaNumero.innerText = i + 1
    contenitoreCaselle.appendChild(cellaNumero)
    tabellaContenitore.appendChild(contenitoreCaselle)
 
}

}







creaNumeri(numeri)