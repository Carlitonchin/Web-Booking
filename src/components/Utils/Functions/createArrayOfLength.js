//funcion que crea un array de tamanho length

export default (length) =>
{
    let result = [];
    for(let i = 0; i < length; i++)
    {
        result.push(i+1);
    }

    return result;
}
