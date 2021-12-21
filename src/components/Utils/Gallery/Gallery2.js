import gallery2 from '../../../styles/Utils/Gallery/gallery2.module.scss'

export default ({pictures})=>
{
    return <div className={gallery2.container}>
        <div 
        className={gallery2.img}
        style={{backgroundImage:`url(${pictures[0]})`}}>
        </div>

        <div 
        className={gallery2.img}
        style={{backgroundImage:`url(${pictures[1]})`}}>
        </div>
    </div>
}