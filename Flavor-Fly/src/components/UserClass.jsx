import React from 'react';

class UserClass extends React.Component{
    constructor(props) {
        super(props);
        //After using super(props), we've access to the
        //props through out the class with the help of 
        // 'this' keyword like this.props

        //creating states
        this.state = {
            count: 0,
            count2: 1, //multiple state variables inside the same this.state which hold the whole big object
            
        }

        // console.log(props);
        console.log("Child Constructor called ");
    }

    // ComponentDidMount is used to make APIs calls 
    // coz first we mount the component and then 
    // fill the data got from APIs response
    // It will help in reducing the time of component 
    // rendering/mounting 
    componentDidMount() {
        console.log("Child Component mounted !");
    }

    render() {
        const {name} = this.props
        const { count } = this.state;
        console.log("Render called");
        return (
            <div> 
                <h1>Count: {this.state.count}</h1>
                <button 
                    onClick={()=>{
                        //never update states like this
                        // this.state.count = this.state.count + 1;

                        this.setState({
                            count: count + 1
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