import {nombre, costo, departamento, categoria, get_departamento, get_categoria, get_products, id} from '../varGlobal'

export default (state,action) => {
    const {payload, type} = action;

    switch (type) {
        case nombre:
            return{
                ...state,
                nombre: payload.newValue
                
        }
        case costo:
            return{
                ...state,
                costo: payload.newValue
                
        }
        case get_departamento:
            return{
                ...state,
                getDepartament: payload
                
        }
        case departamento:
            return{
                ...state,
                departamento: payload.newValue
                
        }
        case id:
            return{
                ...state,
                id: payload.newValue
                
        }
        case get_categoria:
            return{
                ...state,
                getCategoria: payload
                
        }
        case get_products:
            return{
                ...state,
                getProducts: payload
                
        }
        case categoria:
            return{
                ...state,
                categoria: payload.newValue
                
        }

        
    }

}