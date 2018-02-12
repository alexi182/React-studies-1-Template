import Block from '../components/Block';

const allData = {
    age: 28,
    sex: 'man'
};

export default class App extends React.Component {
    constructor(props) {
        super(props);

        /* this.name = "Alex";*/
        this.surname ="Kotlov";
    }

    render() {
        return (
            <div className="container">
                <Block surname={this.surname} data={allData} />
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


