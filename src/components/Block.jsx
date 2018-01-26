import {autobind} from 'core-decorators';

@autobind()
export default class Block extends React.Component {

   constructor(props) {
      super(props);
      this.state = {
         users: [
            {
               "Name":"Москва",
               "Surname":"Попов",
               "Username": "alex"
            },
            {
               "Name":"Москва",
               "Surname":"Попов",
               "Username": "alex"
            },
            {
               "Name":"Москва",
               "Surname":"Попов",
               "Username": "alex"
            },
            {
               "Name":"Москва",
               "Surname":"Попов",
               "Username": "alex"
            },
            {
               "Name":"Москва",
               "Surname":"Попов",
               "Username": "alex"
            }
         ]
      }
   }

   say() {
      console.log(`${this.props.surname} is mine`);
   }

   render() {

      const { users } = this.state;

      return (
          <div>

             <p onClick={this.say}>Клик</p>

             <img className="img-style" src={require("../img/2.jpg")} />

             <p>{this.props.name}</p>

             <table className="table">
                <thead>
                <tr>
                   <th scope="col">Имя</th>
                   <th scope="col">Фамилия</th>
                   <th scope="col">Username</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                   {users.map((item,i) => {
                      return (
                          <td key={i}>{item}</td>
                      )
                   })
                   }
                </tr>
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




