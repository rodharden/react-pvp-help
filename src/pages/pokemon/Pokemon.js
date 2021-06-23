import { Component } from "react";

class Pokemon extends Component {
    state = {
        listPokemons: []
    }

    componentDidMount() {
        fetch('https://pogoapi.net/api/v1/pokemon_names.json')
        .then(res => res.json())
        .then((data) => {
          this.setState({ listPokemons: data })
          console.log(this.state.todos)
        })
        .catch(console.log)
    }

    render() {
        return (
            <div>
                <table border="1">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.listPokemons.map((item) => {
                        return (
                            <tr>
                                <td>
                                     {item.id}
                                </td>
                                <td>
                                    {item.name}
                                </td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>
        );
    }

}
export default Pokemon;