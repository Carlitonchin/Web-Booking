import style from '../../styles/Search/searchBar.module.scss'
import BlueButton from '../Utils/BlueButton'
import InputComponent from './InputComponent'
import { useState } from 'react'

export default ({placeholder, handleClick, value, setValue, handlerChange, linkTo})=>
{
    function handlerChange(e)
    {
        setValue(e.target.value);
    }
    return <><div className={style.input}>
        <InputComponent 
        placeholder={placeholder}
        value={value}
        handlerChange={handlerChange}
        />
        </div>
        <div className={style.button}>
        {linkTo?<a href={linkTo}><BlueButton text="Buscar"/></a>:<BlueButton text="Buscar"/>}
        
        </div>
        </>
}