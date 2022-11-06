import React from "react";

class StateFul extends React.Component {

    constructor() {
        super()
        this.state = {
            nome: "Xuxinha"
        }
    }

    render(){
        return(
            <>
                <h1>StateFul</h1>
                    <button onClick={() => this.setState({ nome: 'Nena de Jesus'})}>
                        Click
                    </button>
                {this.state.nome}
            </>
        )
            
            
    }
}

export default StateFul