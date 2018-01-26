import Block from '../components/Block';

const allData = {
   age: 28,
   sex: 'man'
};

const name = "Alex";

export default class App extends React.Component {
   constructor(props) {
      super(props);

/*      this.name = "Alex";*/
      this.surname ="Kotlov";
   }

   render() {
      return (
          <div className="container">
             <Block name={name} surname={this.surname} data={allData} />
          </div>
      )
   }
}

/*
Block.propTypes = {
   data: PropTypes.object.isRequired,
   name: PropTypes.string.isRequired
};
*/


