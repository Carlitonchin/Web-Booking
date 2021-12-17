import React, {useReducer} from 'react'
import Reducer from './Reducer'
import Context from './Context'
//import M from 'materialize-css'
import axios from 'axios'
import { departamento } from '../varGlobal'

const StateApp = (props) => {

    const initialState = {
        nombre: "",
        costo: "",
        departamento: "",
        categoria: "",
        id: "",
        getDepartament: [],
        getCategoria: [],
        getProducts: []
    }

    const [state, dispatch] = useReducer(Reducer, initialState)

    const addTask = (e) => {

      if(state.id){
          fetch(`http://localhost:3000/products/${state.id}`,{
           method: 'PUT',
           body: JSON.stringify({
            "nombre": state.nombre,
            "costo": state.costo,
            "departamento": state.departamento,
            "categoria": state.departamento
           }),
           headers:{
            'Accept': 'application/json',
             'Content-Type': 'application/json'
           }
         })
         .then(res => res.json())
         .then(data => {
             console.log(data)
             GetProducts()
             handleChangeNombre(" ")
             handleChangeCosto(" ")
             handleChangeDepartamento(" ")
             handleChangeCategoria(" ")
          })

      }else{
        var data =  JSON.stringify({
          "nombre": state.nombre,
          "costo": state.costo,
          "departamento": state.departamento,
          "categoria": state.departamento
         });

        var config = {
          method: 'post',
          url: 'http://localhost:3000/products',
          headers: { 
           'Content-Type': 'application/json'
          },
          data : data
        };

        axios(config)
        .then(function (response) {
        // M.toast({html: 'Producto Almacenado'})
         GetProducts()
         handleChangeNombre(" ")
         handleChangeCosto(" ")
         handleChangeDepartamento(" ")
         handleChangeCategoria(" ")
         
         
        })

        .catch(function (error) {
          console.log(error);
        });

       }
      console.log(state)
      e.preventDefault()
      
    }

    const handleChangeNombre = (newValue) => {
        dispatch({
            type: "nombre",
            payload: {newValue}
         });
    }

    const handleChangeCosto = (newValue) => {
        dispatch({
            type: "costo",
            payload: {newValue}
         });
    }

    const handleChangeDepartamento = (newValue) => {
      GetCategoriaxDept(newValue)
      dispatch({
          type: "departamento",
          payload: {newValue}
       });
    }

    const handleChangeCategoria = (newValue) => {
        dispatch({
          type: "categoria",
          payload: {newValue}
        });
    }
    
    const handleChangeID = (newValue) => {
      dispatch({
        type: "id",
        payload: {newValue}
      });
    }

    const GetDepartament = async () => {
      var data = [{}]
      var config = {
        method: 'get',
        url: 'http://localhost:3000/departament/',
        headers: { 
           'Content-Type': 'application/json'
        }
         
      };

      axios(config)
       .then(function (response) {
         data = response.data
        dispatch({
            type: "get_departamento",
            payload: data
         });
       })
       .catch(function (error) {
         console.log(error);
      });  
    }

    const GetCategoriaxDept = async (newValue) => {
      var data = [{}]
      var config = {
        method: 'get',
        url: `http://localhost:3000/departament/${newValue}/categories`,
        headers: { 
           'Content-Type': 'application/json'
        }
         
      };

      axios(config)
       .then(function (response) {
         data = response.data
        dispatch({
            type: "get_categoria",
            payload: data
         });
       })
       .catch(function (error) {
         console.log(error);
      });  
    }

    const GetProducts = async () => {
      var data = [{}]
      var config = {
        method: 'get',
        url: `http://localhost:3000/products`,
        headers: { 
           'Content-Type': 'application/json'
        }
         
      };

      axios(config)
       .then(function (response) {
         data = response.data
        dispatch({
            type: "get_products",
            payload: data
         });
       })
       .catch(function (error) {
         console.log(error);
      });  
    }

    const DeleteProducts = async (id) => {
      var config = {
        method: 'delete',
        url: `http://localhost:3000/products/${id}`,
        headers: { 
          'Content-Type': 'application/json'
        },
      };
      
      axios(config)
      .then(function (response) {
       // M.toast({html: 'Producto Eliminado'})
        GetProducts()
      })
      .catch(function (error) {
        console.log(error);
      });
    }

    const EditProducts = (id) => {
       fetch(`http://localhost:3000/products/${id}`)
           .then(res => res.json())
           .then(data => {
                 console.log(data)
                 handleChangeNombre(data.nombre)
                 handleChangeCosto(data.costo)
                 handleChangeDepartamento(data.departamento)
                 handleChangeCategoria(data.categoria)
                 handleChangeID(data.id)
           })
    }

    return (
        <Context.Provider value={{
            nombre: state.nombre,
            costo: state.costo,
            departamento: state.departamento,
            categoria: state.categoria,
            id: state.id,
            getDepartament: state.getDepartament,
            getCategoria: state.getCategoria,
            getProducts: state.getProducts,
            addTask,
            handleChangeNombre,
            handleChangeCosto,
            GetDepartament,
            GetCategoriaxDept,
            handleChangeDepartamento,
            handleChangeCategoria,
            GetProducts,
            DeleteProducts,
            EditProducts,
            handleChangeID
        }}>
          {props.children}
        </Context.Provider>
    )
}

export default StateApp
