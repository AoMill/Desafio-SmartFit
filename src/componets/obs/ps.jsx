import Itens from "./itens"
import  Ps from "."


export default function Observacoes() {
    const array = [{
        "id": 1,
        "name": "Mascara",
        "imagem":"/img/required-mask.png",
        "imagem2":"/img/recommended-mask.png",
        "desc": "Obrigatório",
        "desc2": "Recomendado",
        "next":false
    },
    {
        "id": 2,
        "name": "Toalha",
        "imagem":"/img/required-towel.png",
        "imagem2":"/img/recommended-towel.png",
        "desc": "Obrigatório",
        "desc2": "Recomendado",
        "next": false
    },
    {
        "id": 3,
        "name": "Bebedouro",
        "imagem":"/img/partial-fountain.png",
        "imagem2":"/img/forbidden-fountain.png",
        "desc": "Parcial",
        "desc2": "Proibido",
        "next": false
    },
    {
        "id": 4,
        "name": "Bebedouro",
        "imagem":"/img/required-lockerroom.png",
        "imagem2":"/img/partial-lockerroom.png",
        "imagem3":"/img/forbidden-lockerroom.png",
        "desc": "Liberado",
        "desc2": "Parcial",
        "desc3": "Fechado",
        "next": true
    }
    ]

    return (
    array.map((i) =>(   
        <Ps key={i.id} {...i}/>
    ))
  )
}
