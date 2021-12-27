import { Link } from "react-router-dom"
import style from "../../styles/Utils/BlueButton.module.scss"

export default ({handleClick, text, link})=>
{

    return  <div className={style.containerBlueButton}>
     {(link)?<Link to={link}>
     <button type="button" className={"btn btn-primary " + style.blueButton}>
        {text}
    </button>
    </Link>: 
    <button type="button" className={"btn btn-primary " + style.blueButton}>
    {text}
</button>
    }
</div>
}