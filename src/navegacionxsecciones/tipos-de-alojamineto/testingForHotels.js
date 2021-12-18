var d = {
    "Estrellas:":
    {
        "1 estrella":{
            "count":100,
            "boolean":false
        },
        "2 estrellas":{
            "count":20,
            "boolean":false
        },
    }
    ,

    "Camas:":
    {
        "1 cama":{
            "count":5,
            "boolean":false
        },
        "2 camas":{
            "count":10,
            "boolean":false
        },
    }

}

var list = 
[
    {
       name:"Hotel Moderno",
       stars:5,
       location:"Varadero",
       imgUrl:"../../images/cancun.jpg",
       info:"La mejor comida de la region",
       bad:"Quedan pocos cupos",
       good:"15% de descuento",
        price:500,
        points:7.4,
        nigths:3,
        adults:2,
        childs:1,
        rooms:1
    },
    {
        name:"Hotel Gran Manzana",
        stars:5,
        location:"La Habana Vieja",
        imgUrl:"../../images/cancun.jpg",
        info:"Somos historia del pais",
        bad:"Quedan pocos cupos",
        good:"Bebida gratis",
         price:1000,
         points:10,
         nigths:3,
         adults:2,
         childs:2,
         rooms:2
     },
     {
        name:"Hotel Cayo Santamaria",
        stars:4,
        location:"Varadero",
        imgUrl:"../../images/cancun.jpg",
        info:"Las mejores vistas al mar",
        bad:"Quedan pocos cupos",
        good:"Concierto de Shakira",
         price:300,
         points:8,
         nigths:10,
         adults:5,
         childs:3,
         rooms:3
     }
     
]

list.push(list[0])
list.push(list[0])
list.push(list[0])
list.push(list[0])
list.push(list[0])
list.push(list[0])
list.push(list[0])

export var list;
export var d;