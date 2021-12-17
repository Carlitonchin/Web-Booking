import "../../styles/Search/PeopleRooms.scss"

function Select({count, text, handle})
{
    function plus(){
        return handle(1);
    }
    function minus()
    {
        return handle(-1);
    }

    return <div className="select">
        <div className="buttonCount" onClick={minus}>
            -
        </div>
        <div>
            {`${count} ${text}`}
        </div>
        <div className="buttonCount" onClick={plus}>
            +
        </div>
        </div>
}

export default ({adults, handleAdults, childs, handleChilds, rooms, handleRooms}) =>
{
    let textAdult = adults === 1  ? "adulto" : "adultos";
    let textChild = childs === 1 ? "niño" : "niños";
    let textRoom = rooms === 1 ? "habitación" : "habitaciones";

    return <div>

        <div className="containerSelects  form-control">
        <Select count={adults} text={textAdult} handle={handleAdults}/>
        <Select count={childs} text={textChild} handle={handleChilds}/>
        <Select count={rooms} text={textRoom} handle={handleRooms}/>
        </div>
        
    </div>
}