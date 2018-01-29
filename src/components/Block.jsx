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

      }
   }

   say() {
      console.log(`${this.props.surname} is mine`);
   }

   render() {

      /* const { users } = this.state;*/

      return (
          <div>

             <p onClick={this.say}>Клик</p>

             <img className="img-style" src={require("../img/2.jpg")} />

             <p>{this.props.name}</p>

             <input type="text" className="form-control" onClick={} />

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
                       <tr>
                          <td key={i}>{item.name}</td>e
                          <td key={i}>{item.surname}</td>
                          <td key={i}>{item.username}</td>
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




