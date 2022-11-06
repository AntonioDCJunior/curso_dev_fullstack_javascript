import pessoas from "./cadastro.json"

function Table() {

    function dados() {
        
        console.log(pessoas)

        const name = "Xuxinha"
        const email = "xuxinha@gmail.com"
        const senha = "123@123"

        return (
            <tr>
                <td>{name}</td>
                <td>{email}</td>
                <td>{senha}</td>
            </tr>
        )
    }

    return (
        <table>
            <thead>
                <tr>
                    <td>Nome</td>
                    <td>Email</td>
                    <td>Senha</td>
                </tr>
            </thead>
            <tbody>
                {dados()}
            </tbody>
        </table>
    )
}

export default Table;