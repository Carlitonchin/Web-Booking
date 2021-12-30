export function getDateFromString(date)
{
    if(!date)
        return date;
    let newDateArray = date.split('-').map(e => Number(e));
    return new Date(newDateArray[0], newDateArray[1] - 1, newDateArray[2])
}

export function getStringFromDate(date)
{

    if(!date)
        return date;

    let m = (date.getMonth() + 1).toString();
    let d = date.getDate().toString();
    
    let mounth = m.length === 1 ? "0" + m :   m;
    let day = d.length === 1? "0" + d:d;
    return date.getFullYear() + "-" + mounth + "-" + day;
}