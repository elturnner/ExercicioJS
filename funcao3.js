function addNewContact(){
    //Permitir a manipulação do Submit
    event.preventDefault();

    const cpNome = document.querySelector("input[name='inome']").value
    const cpFone = document.querySelector("input[name='ifone']").value
    const cpEmail = document.querySelector("input[name='iemail']").value
    const cpLocal = document.querySelector("input[name='ilocal']").value

    //criar um novo elemento
    let itemContact = document.createElement("li")
    itemContact.innerText=cpNome + "\n" + cpFone + "\n" + cpEmail + "\n" + cpLocal
    itemContact.style.borderStyle="double"

    let btnRemove = document.createElement("button")
    btnRemove.type = "button"
    btnRemove.innerText = "Remover"
    btnRemove.style.display="inline-block"
    btnRemove.style.marginLeft="260px"

    btnRemove.setAttribute("onclick","removeContact(this)")

    //add o button ao li
    itemContact.appendChild(btnRemove)

    //add o li ao ul
    document.querySelector("ul#listContact").appendChild(itemContact)

    //limpeza do form
    document.querySelector("input[name='inome']").value = ""
    document.querySelector("input[name='ifone']").value = ""
    document.querySelector("input[name='iemail']").value = ""
    document.querySelector("input[name='ilocal']").value = ""
}

function removeContact(btn){
    let elem = btn.parentNode
    document.querySelector("ul#listContact").removeChild(elem)
}
