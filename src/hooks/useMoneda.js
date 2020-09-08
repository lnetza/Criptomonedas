import React,{Fragment, useState} from 'react';

const useMoneda = (label,stateInicial,opcionesMonedas)=>{
    //State de nuestro custom hook
    const [state,actualizarState] = useState(stateInicial);
    
    //Cuerpo del STATE
    const Seleccionar = () =>(
        <Fragment>
            <label>{label}</label>
            <select
                onChange={e=>actualizarState(e.target.value)}
                value={state}
            >
                <option value="">-Seleccione-</option>
                {opcionesMonedas.map(opcion=>(
                    <option key={opcion.codigo} value={opcion.codigo}> {opcion.nombre} </option>
                ))}
            </select>
        </Fragment>
    );
    //Retornar state, interfaz y fn que modifica el state
    return [state,Seleccionar, actualizarState];
}

export default useMoneda;