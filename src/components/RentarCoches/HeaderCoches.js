
import InputComponent from '../Search/InputComponent'
import DateComponent from '../Search/DateComponent'
import BlueButton from '../Utils/BlueButton'

const HeaderCoches = ({placeRent,handlePlaceRent, placeReturn, handlePlaceReturn,
  returnAtSamePlace, handleReturnAtSamePlace, since, handleSince, to, handleTo}) => {

    return <>
    <h6>Lugar de recogida</h6>
    <InputComponent
    handlerChange={handlePlaceRent}
    value={placeRent}
    />

    {!returnAtSamePlace
    ?<>
    <h6>Lugar de devolucion</h6>
    <InputComponent
    handlerChange={handlePlaceReturn}
    value={placeReturn}
    />
    </>
    :""}

      <h6>Fecha de recogida</h6>
      <DateComponent
      date = {since}
      handleChange={handleSince}
      />
        <h6>Fecha de devolucion</h6>
      <DateComponent
      date = {to}
      handleChange={handleTo}
      />
<div>
      <div class="form-check">
        <input
        type="radio"
        id="returnAtSamePlace"
        class="form-check-input"
        checked={returnAtSamePlace}
        onChange={handleReturnAtSamePlace.bind(this, true)}
        />
        <label 
        for="returnAtSamePlace"
        class="form-check-label"
        name="return"
        >Devolver en el mismo lugar</label>

</div>

<div class="form-check">
<input
        type="radio"
        id="notReturnAtSamePlace"
        class="form-check-input"
        name="return"
        checked={!returnAtSamePlace}
        onChange={handleReturnAtSamePlace.bind(this, false)}
        />
        <label 
        for="notReturnAtSamePlace"
        class="form-check-label"
        >Devolver en otro sitio</label>
</div>
</div>
<div style={{marginTop:'1rem', width:'90%'}}>
<BlueButton text="Buscar"/>
</div>
    </>
}

export default HeaderCoches



