import React, { Component } from 'react';

class Counter extends Component {

    state = {
        value: this.props.value,
    };

    
    handleIncrement = () => { 
        this.setState({value: this.state.value + 1})
       
    }
    handleDecrement = () => { 
        this.setState({value: this.state.value - 1})
       
    }
 
    /* 
    
        TODO
        Add icon for increament and decrement buttons
    
    */
    render() { 
        return (
            <div>
                <h1>{this.state.value}</h1>
                <button  
                    className='btn btn-secondary btn-sm btn-warning' 
                    onClick={this.handleIncrement}>
                    <i className="bi bi-arrow-up"></i>+
                </button>
                <span className='px-2'></span>    
                <button  
                    className='btn btn-secondary btn-sm btn-warning' 
                    onClick={this.handleDecrement}>-
                </button>
            </div>
            );
    }
 ß
}
 
export default Counter ;