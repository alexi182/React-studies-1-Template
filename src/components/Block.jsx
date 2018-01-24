import {autobind} from 'core-decorators';

@autobind()
export default class Block extends React.Component{

   constructor(props) {
      super(props);
      this.state = {
         buyItems: ['metal', 'rock', 'core']
      }
   }

   say() {
      console.log(`${this.props.surname} is mine`);
   }

   render() {

      const { buyItems } = this.state;

      return (
          <div>

             <p onClick={this.say}>Клик</p>

             <img className="img-style" src={require("../img/2.jpg")} />

             {buyItems.map((item,i) => {
                return (
                    <p key={i}>{item}</p>
                )
             })
             }
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




