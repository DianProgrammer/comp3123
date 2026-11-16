/*
Define Student as a class component and then late inject 
this into App component by instantiating it inside 
*/ 

import {Component} from "react";

export default class Student extends Component {
    // Can use the default constructor instead, but since
    //we want to initialize the constructor values custome
    //we will define one
    constructor(props){
        //Instead of using props.studentId, we can 
        //destruct the properties in props right in the 
        //params list of the constructor

        //The first thing to always do in a child constructor is ... 
        super(props);
        this.regularProperty = "regular property, this doe snot hook into react lifecycle pahses";

        //Define internal data varaiables for this class components 
        this.state = {
            studentId: props.studentId,
            firstName: "Kiana",
            
        }
        
        this.showMessage = this.showMessage.bind(this);
    }

    //Helper methods
    //Regilar syntax method - most bind the context of the 
    // "this" keyword to it in the constructor

    showMessage(){
        alert("Welcome " + this.state.firstName);
    }
    //Arrow syntax methods - the binding is automatically done for you 

    incrementEventHandler = () => {
        this.regularProperty = "Updated: " + this.regularProperty;
        console.log(this.regularProperty);
        this.setState({
            studentId: this.state.studentId + 1
        })
    }

    eventHandlerPrinter = (event) =>{
        console.log(event);
        console.log(event.target.name + " " + event.target.value);

    }

    readName = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }


    //Required method for every Component 
    render(){
        console.log("The student class component is about to render")
        return (
            <section>
                <h2>Student Component</h2>
                <p>regularProperty: {this.regularProperty}</p>
                <p>studentId: {this.state.studentId}</p>
                <p>State: {JSON.stringify(this.state)}</p>

                <input name="firstName" onChange={this.readName}/>
                <br/>

                <button name= "buttonEvent" value="Event" 
                
                onClick = {(event)=>{

                    this.eventHandlerPrinter(event);
                }}>
                
                

                
                
                </button>
                <button onClick={this.showMessage}>Click to show message</button>
            </section>

        )

        
    }

    //use th eold React lifecycle methods to practice 
        componentDidMount(){
            console.log("Component just mounted");
        }

        shouldComponentUpdate(newProps, newState){

            console.log("Component will update to this new state : " + JSON.stringify(newState));

            return true;
        }
}