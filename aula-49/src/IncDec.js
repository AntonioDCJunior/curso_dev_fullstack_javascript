import React from 'react' 

class IncDec extends React.Component {

    constructor() {
        super()
        this.state = {
            operacao: 0
        }
    }

    render() {
        return (
            <>
                <h1>Incrementa e Decrementa</h1>
                    <button onClick={() => this.setState({ operacao: this.state.operacao +1})}>
                        Aumenta
                    </button>
                
                    <button onClick={() => this.setState ({ operacao: this.state.operacao -1})}>
                        Diminui
                    </button>

                {this.state.operacao}
            </>
        )
    }
}

export default IncDec