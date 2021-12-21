import gallery1 from '../../../styles/Utils/Gallery/gallery1.module.scss'

export default ({pictures}) =>
{
    return <div 
    className = {gallery1.img}  style={{backgroundImage:`url(${pictures[0]})`}}>
    </div>
}