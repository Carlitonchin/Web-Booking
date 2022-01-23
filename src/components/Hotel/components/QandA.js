import style from '../../../styles/Alojamineto/components/qAndA.module.scss'
import {useState} from 'react';
import createArrayOfLength from '../../Utils/Functions/createArrayOfLength'
import questionIcon from '../../../svg_vistas_travel/capacidad.svg';
import answerIcon from '../../../svg_vistas_travel/chat.svg';

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
    const [[liked, notLiked], setLiked] = useState([[], []]);

    let maxQuestions = 2
    let max = more?data.length:maxQuestions;

    function handleMore()
    {
        setMore(!more);
    }

    function handleLike(index)
    {
        console.log(liked)
        if(liked.includes(index))
            setLiked([liked.filter(i=>i!=index), notLiked]);
        
        else
            setLiked([liked.concat([index]), notLiked.filter(i=>i!=index)]);
    }

    function handleNotLike(index)
    {
        if(notLiked.includes(index))
            setLiked([liked, notLiked.filter(i=>i!=index)]);

        else
            setLiked([liked.filter(i=>i!=index), notLiked.concat([index])]);
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
        {createArrayOfLength(max).map(i=>
            {
                let {question, answer, translate, details} = data[i-1];
                return  <><div className={style.box + " " + style.singleQuestion}>
                    <div className={style.containerQA}>
                <div className={style.qa}>
                    <div style={{backgroundImage:`url(${questionIcon})`}}
                    className={style.icon}></div>
                    <p style={{fontWeight:'bold'}}>{question}</p>
                </div>

                <div className={style.qa}>
                    <div style={{backgroundImage:`url(${answerIcon})`}}
                    className={style.icon}></div>
                    <p>{answer}</p>
                </div>
                </div>

                <div className={style.translateAndLike}>
                    <div className={style.like}>
                        <p class="text-primary"
                        onClick={handleLike.bind(this, i-1)}
                        >
                            <i class={liked.includes(i-1)?"bi bi-hand-thumbs-up-fill":"bi bi-hand-thumbs-up"}></i>Útil</p>
                        <p 
                        onClick={handleNotLike.bind(this, i-1)}
                        class="text-primary">
                            <i class={notLiked.includes(i-1)?"bi bi-hand-thumbs-down-fill":"bi bi-hand-thumbs-down"}></i>
                            Poco Útil</p>
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