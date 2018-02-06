import {autobind} from 'core-decorators';

const users = [
    {
        name: 'Саша',
        surname :'Попов',
        username: 'alex182'
    },
    {
        name: 'Андрей',
        surname :'Котлов',
        username: 'shogun'
    },
    {
        name: 'Сергей',
        surname :'Сидоров',
        username: 'uran'
    }
];

@autobind()
export default class Block extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            search: '',
            table: users
        }
    }

    /* say() {
        console.log(`${this.props.surname} is mine`);
     }*/

    search(e) {

        /*let result = users.forEach((item) => {
           return (
               item.name
           )
        });debugger;*/

        let result = users;

        let nameResult = result.forEach(function(item) {
            return (
                item.name
            )
        });

        console.log(nameResult);

        let val = e.target.value;

        this.setState({
            search: val
            /*    table: result*/
        });

    }

    render() {

        const {search, table} = this.state;

        return (
            <div>

                {/*<p onClick={this.say}>Клик</p>*/}

                <img className="img-style" src={require("../img/2.jpg")} />

                <img className="img-style" src={require("../img/3.jpg")} />

                <p>{search}</p>

                <p>{this.props.name}</p>

                <input type="text" className="form-control" onChange={this.search} />

                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">Имя</th>
                        <th scope="col">Фамилия</th>
                        <th scope="col">Username</th>
                    </tr>
                    </thead>

                    <tbody>
                    {users.map((item,i) => {
                        return (
                            <tr key={i}>
                                <td>{item.name}</td>
                                <td>{item.surname}</td>
                                <td>{item.username}</td>
                            </tr>
                        )
                    })
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}

/*
class BlockItem extends Block {
   say() {
      super.say();
      console.log(`${this.nick} is mine2`);
   }
}
*/




