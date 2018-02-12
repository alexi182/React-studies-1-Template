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

const users2 = [
    {
        name: 'Саша2',
        surname :'Попов2',
        username: 'alex1822'
    }
];

@autobind()
export default class Block extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            search: '',
            table: users,
            table2: users
        }
    }

    /* say() {
        console.log(`${this.props.surname} is mine`);
     }*/

    addItem(e) {
        e.preventDefault();
        const newItem = 'test';

        this.setState({
            table: [users2]
        })
    }

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
            /* table: result*/
        });
    }

    render() {

        const {search, table} = this.state;

        return (
            <div>
                {/*<p onClick={this.say}>Клик</p>*/}

                <img className="img-style" src={require("../img/1.jpg")} />
                <img className="img-style" src={require("../img/5.jpg")} />

                <p>{search}</p>
                <p>{this.props.name}</p>

                <input type="text" className="form-control" onChange={this.search} />

                <form className="form-inline" onSubmit={(e) => this.addItem(e)}>
                    <div className="form-group">
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ввести текст" />
                    </div>

                   {/* <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>*/}

                    <button type="submit" className="btn btn-primary">Add</button>
                </form>

                <table className="table">
                    <thead>
                    <tr>
                        <th>Имя</th>
                        <th>Фамилия</th>
                        <th>Username</th>
                        <th className="text-center">Action</th>
                    </tr>
                    </thead>

                    <tbody>
                    {table.map((item,i) => {
                        return (
                            <tr key={i}>
                                <td>{item.name}</td>
                                <td>{item.surname}</td>
                                <td>{item.username}</td>
                                <td className="text-center"><button type="button" className="btn btn-outline-secondary">Remove</button></td>
                            </tr>
                        )
                    })
                    }
                    </tbody>
                </table>

                <div className="d-flex justify-content-end">
                    <button type="button" className=" btn btn-outline-secondary">Remove All</button>
                </div>
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




