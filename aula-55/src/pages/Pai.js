import React from 'react'
import Filho from './Filho'

const Pai = (props) => {
    return (
        <div>
            <h3>{props.name} {props.sobrenome} {props.idade}</h3>
            <Filho name="Nena" Sobrenome={props.sobrenome} />
            <Filho name="Xuinha Junior" Sobrenome={props.sobrenome} />
        </div>
    )
}

export default Pai