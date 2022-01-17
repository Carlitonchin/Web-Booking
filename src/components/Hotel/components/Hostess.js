import style from '../../../styles/Alojamineto/hostess.module.scss'

let name = "Josip";
let text = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever
since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only ﬁve
centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem
Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable
English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for ‘lorem
ipsum’ will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on
purpose (injected humour and the like).
purpose (injected humour and the like).purpose (injected humour and the like).purpose (injected humour`

let calification = 9.8;
let picture = '/favicon.ico'

let languages = 'Ingles, Croata'

export default ()=>
{
    return <>
    <div className={style.header}>
        <h4>{"Anﬁtrión: " + name}</h4>

        <div className={style.calification}>
            <p className={style.textCalification}>
                Puntuación del anfitrión:
            </p>
            <div className={style.points}>{calification}</div>
        </div>
    </div>

    <div className={style.description}>
        <div className={style.hostess}>
            <div className={style.picture}
            style={{backgroundImage:`url(${picture})`}}></div>
            <p className={style.nameSubPicture}>{name}</p>
        </div>
        <div className={style.descriptionText}>
            <p>{text}</p>
            <p>{"Idiomas que habla: " + languages}</p>
        </div>
    </div>
    </>
}