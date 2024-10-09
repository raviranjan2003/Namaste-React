import React from 'react';

class UserClass extends React.Component{
    constructor(props) {
        super(props);

        //creating states
        this.state = {
            count: 0,
        }

        // console.log(props);
        console.log("Constructor called ");
    }

    // ComponentDidMount is used to make APIs calls 
    // coz first we mount the component and then 
    // fill the data got from APIs response
    // It will help in reducing the time of component 
    // rendering/mounting 
    componentDidMount() {
        console.log("Component mounted !");
    }

    render() {
        const {name} = this.props
        console.log("Render called");
        return (
            <div> 
                <h1>Count: {this.state.count}</h1>
                <button 
                    onClick={()=>{
                        //never update states like this
                        // this.state.count = this.state.count + 1;

                        this.setState({
                            count: this.state.count + 1
                        })
                    }}
                >Increment</button>
                <h1>User Class</h1>
                <h2>Name: {name}</h2>
                <h3>Location: </h3>
                <h4>Contact: </h4>
            </div>
        )
    }
}

export default UserClass;

/* 
    React Life Cycle

    -Parent Constructor 
    -Parent Render
        -Child1 constructor
        -Child1 render

        -Child2 constructor
        -Child2 render

        -Child-n constructor
        -Child-n render

        <DOM manipulated/update - in single BATCH>

        -Child1 componentDidMount
        -Child2 componentDidMount
        -Child-n componentDidMount
    -Parent componentDidMount
*/