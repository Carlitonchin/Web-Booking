export default (pictures)=>
{
    let result = []
    for(let i = 0; i < pictures.length; i++)
    {
        result.push({
            original:pictures[i],
            thumbnail:pictures[i]
        })
    }

    return result;
}