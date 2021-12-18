import style from "../../styles/Utils/BlueButton.module.scss"

export default ({handleClick, text})=>
{
    return  <div className={style.containerBlueButton}>
    <button type="button" className={"btn btn-primary " + style.blueButton}>
        {text}
    </button>
</div>
}