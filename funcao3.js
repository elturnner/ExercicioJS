function addNewContact(){
    //Permitir a manipulação do Submit
    event.preventDefault();

    const cpNome = document.querySelector("input[name='inome']").value
    const cpFone = document.querySelector("input[name='ifone']").value
    const cpEmail = document.querySelector("input[name='iemail']").value
    const cpLocal = document.querySelector("input[name='ilocal']").value

    //criar um novo elemento
    let itemContact = document.createElement("li")
    itemContact.innerText=cpNome + "\n" + cpFone + "-" + cpEmail + "-" + cpLocal

    let btnRemove = document.createElement("button")
    btnRemove.type = "button"
    btnRemove.innerText = "Remover"
    btnRemove.style.display="inline-block"
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

function addFone(){
    const formulario = document.querySelector("#phones")
    const novoFone = formulario.children[0].cloneNode(true)
    const pos = formulario.children.length + 1

    //reset elementos
    novoFone.querySelector("label").innerText="Telefone "+pos+":"
    novoFone.querySelector("input[name='ifone']").value=""

    //adicionar ao formulario
    formulario.appendChild(novoFone)
}