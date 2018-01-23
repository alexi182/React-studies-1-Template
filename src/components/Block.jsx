import {autobind} from 'core-decorators';

@autobind()
export default class Block extends React.Component{

   constructor(props) {
      super(props);
      /* this.nick = "Sasha";*/
      this.state = {
         buyItems: ['metal', 'rock', 'core']
      }
   }

   say() {
      console.log(`${this.props.surname} is mine`);
   }

   render() {

      const {name} = this.props;
      const {age, sex} = this.props.data;
      const { buyItems } = this.state;

      return (
          <div>
             <p>{name}</p>
             <p>{age}</p>
             <p>{sex}</p>

             <p onClick={this.say}>Клик</p>

             {buyItems.map((item,i) => {
                return (
                    <span key={i}>{item}</span>
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




