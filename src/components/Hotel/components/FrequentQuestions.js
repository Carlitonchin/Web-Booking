import style from '../../../styles/Alojamineto/components/frequentQuestions.module.scss'
import Accordion from '../../Utils/Accordion'

let data = 
[
    {
        question:'Cuantas personas pueden dormir en Apartment Luxury Palace No1?',
        answer:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only ﬁve
        centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem
        Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable
        English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for ‘lorem
        ipsum’ will uncover many web sites still in their infancy. Various versions have evolved over the years, someti`
        
    },
    {
        question:'Cuantas personas pueden dormir en Apartment Luxury Palace No1?',
        answer:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only ﬁve
        centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem
        Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable
        English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for ‘lorem
        ipsum’ will uncover many web sites still in their infancy. Various versions have evolved over the years, someti`
        
    },
    {
        question:'Cuantas personas pueden dormir en Apartment Luxury Palace No1?',
        answer:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only ﬁve
        centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem
        Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable
        English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for ‘lorem
        ipsum’ will uncover many web sites still in their infancy. Various versions have evolved over the years, someti`
        
    },
    {
        question:'Cuantas personas pueden dormir en Apartment Luxury Palace No1?',
        answer:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only ﬁve
        centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem
        Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable
        English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for ‘lorem
        ipsum’ will uncover many web sites still in their infancy. Various versions have evolved over the years, someti`
        
    },
    {
        question:'Cuantas personas pueden dormir en Apartment Luxury Palace No1?',
        answer:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only ﬁve
        centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem
        Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable
        English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for ‘lorem
        ipsum’ will uncover many web sites still in their infancy. Various versions have evolved over the years, someti`
        
    },
    {
        question:'Cuantas personas pueden dormir en Apartment Luxury Palace No1?',
        answer:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only ﬁve
        centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem
        Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable
        English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for ‘lorem
        ipsum’ will uncover many web sites still in their infancy. Various versions have evolved over the years, someti`
        
    },
    {
        question:'Cuantas personas pueden dormir en Apartment Luxury Palace No1?',
        answer:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only ﬁve
        centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem
        Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable
        English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for ‘lorem
        ipsum’ will uncover many web sites still in their infancy. Various versions have evolved over the years, someti`
        
    }
]



export default ()=>
{
return <div className={style.container}>
    <div className={style.left}>
        <h4 className={style.h}>
        Preguntas
frecuentes sobre
Apartment Luxury
Palace No1
        </h4>
    </div>
    <div className={style.rigth}>
        <Accordion data={data}/>
    </div>
</div>
}