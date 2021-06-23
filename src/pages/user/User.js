import { Component } from 'react';
import UserForm from './UserForm'

class User extends Component {
    render() {
        let list = [{
            name: "Rodrigo",
            email: "rodharden@gmail.com"
        },
        {
            name: "Joao",
            email: "joao@gmail.com"
        }]
        return (
            <div>
                <UserForm></UserForm>
                <table border="1">
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                    {list.map((item) => {
                        return (
                            <tr>
                                <td>
                                    {item.name}
                                </td>
                                <td>
                                    {item.email}
                                </td>
                            </tr>
                        )
                    })}
                </table>
            </div>
        );
    }
}

export default User;
