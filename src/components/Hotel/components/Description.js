import style from '../../../styles/Alojamineto/components/description.module.scss'
import {useState} from 'react'

function getText(text, index)
{
    let result = "";
    let split = text.split('\n')

    for(let i = 0; i < split.length; i++)
    {
        if(result.length + split[i].length > index)
            break;

        result += split[i];
        if(i < split.length - 1 )
            result += '\n';
    }

    return result;
}

export default ({text}) =>
{
    const [expand, setExpand] = useState(false)

    function handleExpand()
    {
        setExpand(!expand);
    }

    let index = text.length;
    let maxLetters = 1000;

    if(index > maxLetters)
        index = expand?index:maxLetters;

    let result = getText(text, index);

    return <>
    {result.split('\n').map(p=><p className={style.text}>{p}</p>)}
    {(index < text.length?<p>...</p>:"")}
    {text.length >= maxLetters?
    <button
    className={"btn btn-outline-primary " + style.button}
    onClick={handleExpand}
    >
        {(expand)?"Ver menos":"Ver más"}
        </button>
        :""
}
    
        
    </>
}