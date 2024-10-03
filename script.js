const dadosPessoa = {
    "nome": "Ariel Guilardi",
    "cpf": "39772018837",
    "endereco": "Rua dos caminhões",
    "numero": 101,
    "cep": 123456789,
    "bairro": "Engenho Velho de Brotas",
    "cidade": "Pato Branco",
    "estado": "Paraná",
    "complemento": "Era uma casa muito engraçada",
    "sexo": "Masculino",
    "estadoCivil": "Solteiro",
    "profissao": "Implantador",
    "telefone": "71986822422",
    "email": "ariel@marcofaria.com",
    "dataNascimento": "21/02/1994",
    "urls": ["https://github.com/Arielguilardi",
        "https://linkedin.com/in/arielguilardi",
        "https://facebook.com/arielguilardi"]
}

//===========Montando div title
const divTitle = document.getElementById("title")

console.log(dadosPessoa);
const h1Nome = document.createElement("h1")
h1Nome.textContent = dadosPessoa.nome

divTitle.appendChild(h1Nome)

const spanProfissao = document.createElement("span")
spanProfissao.textContent = dadosPessoa.profissao

divTitle.appendChild(spanProfissao)

//===========Montando div title contact
const divContact = document.getElementById("contact")

// lista não ordenada
const listaContato = document.createElement("ul")

// item de lista o endereço completo
const itemEndereco = document.createElement("li")
itemEndereco.textContent = `${dadosPessoa.endereco}, ${dadosPessoa.numero}`
listaContato.appendChild(itemEndereco)

// item de lista para e-mail
const itemEmail = document.createElement("li")
itemEmail.textContent = dadosPessoa.email
listaContato.appendChild(itemEmail)

// item de lista para telefone
const itemTelefone = document.createElement("li")
itemTelefone.textContent = dadosPessoa.telefone
listaContato.appendChild(itemTelefone)

// item de lista com link para cada link listado
for (url of dadosPessoa.urls) {
    const itemLink = document.createElement("li")
    const ancora = document.createElement("a")
    ancora.textContent = url
    ancora.setAttribute("href", url)
    itemLink.appendChild(ancora)
    listaContato.appendChild(itemLink)
}


divContact.appendChild(listaContato)