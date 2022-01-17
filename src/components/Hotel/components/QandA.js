import style from '../../../styles/Alojamineto/components/qAndA.module.scss'
import {useState} from 'react'

let data = [

    {
        question:"Hola, su apartamento con sauna también tiene acceso a la terraza y a la bañera de hidromasaje? Gracias.",
        answer:"Si",
        translate:true,
        details:"Pregunta sobre: Apartamento con sauna - Respuesta del 21 de marzo de 2021"
    },
    {
        question:"Hola, su apartamento con sauna también tiene acceso a la terraza y a la bañera de hidromasaje? Gracias.",
        answer:"Si",
        translate:true,
        details:"Pregunta sobre: Apartamento con sauna - Respuesta del 21 de marzo de 2021"
    },
    {
        question:"Hola, su apartamento con sauna también tiene acceso a la terraza y a la bañera de hidromasaje? Gracias.",
        answer:"Si",
        translate:true,
        details:"Pregunta sobre: Apartamento con sauna - Respuesta del 21 de marzo de 2021"
    },
    {
        question:"Hola, su apartamento con sauna también tiene acceso a la terraza y a la bañera de hidromasaje? Gracias.",
        answer:"Si",
        translate:true,
        details:"Pregunta sobre: Apartamento con sauna - Respuesta del 21 de marzo de 2021"
    },
    {
        question:"Hola, su apartamento con sauna también tiene acceso a la terraza y a la bañera de hidromasaje? Gracias.",
        answer:"Si",
        translate:true,
        details:"Pregunta sobre: Apartamento con sauna - Respuesta del 21 de marzo de 2021"
    },
    {
        question:"Hola, su apartamento con sauna también tiene acceso a la terraza y a la bañera de hidromasaje? Gracias.",
        answer:"Si",
        translate:true,
        details:"Pregunta sobre: Apartamento con sauna - Respuesta del 21 de marzo de 2021"
    },
    {
        question:"Hola, su apartamento con sauna también tiene acceso a la terraza y a la bañera de hidromasaje? Gracias.",
        answer:"Si",
        translate:true,
        details:"Pregunta sobre: Apartamento con sauna - Respuesta del 21 de marzo de 2021"
    }

]

export default ()=>
{

    const [more, setMore] = useState(false)

    let maxQuestions = 2
    let max = more?data.length:maxQuestions;

    function handleMore()
    {
        setMore(!more);
    }

    return <>
     <p style={{color:'gray'}}>Hay más información en las preguntas y respuestas. No encuentras lo que buscas? Envía tu propia pregunta al alojamiento abajo.</p>
    <div className={style.container}>
       <div className={style.box + " " + style.box1}>
            <p style={{fontWeight:'bold'}}>Sobre Apartment Luxury Palace No1</p>
            <p>Colaborador de Booking.com desde 12 jun 2014</p>
            <p>El alojamiento suele tardar unos días en contestar</p>
       </div>

    <div className={style.containerQuestions}>
        {data.slice(0, max).map(q=>
            {
                let {question, answer, translate, details} = q;
                return  <><div className={style.box + " " + style.singleQuestion}>
                    <div className={style.containerQA}>
                <div className={style.qa}>
                    <div style={{backgroundImage:`url(/favicon.ico)`}}
                    className={style.icon}></div>
                    <p style={{fontWeight:'bold'}}>{question}</p>
                </div>

                <div className={style.qa}>
                    <div style={{backgroundImage:`url(/favicon.ico)`}}
                    className={style.icon}></div>
                    <p>{answer}</p>
                </div>
                </div>

                <div className={style.translateAndLike}>
                    <div className={style.like}>
                        <p class="text-primary">Útil</p>
                        <p class="text-primary">Poco Útil</p>
                    </div>

                    <div className={style.translate}>
                        {translate
                        ?<><p>{"traducido - "}</p><a href='#'>Ver original</a></>
                        :""
                    }
                    </div>
                </div>

            </div>
            <p className={style.details}>{details}</p></>
            })}
            {(maxQuestions < data.length)
            ?<button 
            type="button"
            className={"btn btn-outline-primary " + style.moreQuestions}
            onClick={handleMore}>
            {more?"Ver menos preguntas":`Ver mas preguntas (${data.length-max})`}
            </button>
            :""}
            
       
    </div>

    </div></>
}