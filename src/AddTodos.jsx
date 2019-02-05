import React, { Component } from 'react'


class AddTodo extends Component{
    state={
        content:''
    }
    handleChnage=(e)=>{
        this.setState({
            content:e.target.value
        })

    }
    handleSubmit=(e)=>{
        e.preventDefault()
        this.props.addTodo(this.state);
        this.setState({
            content:""
        })

    }
    render(){
        return(
            <div>
            <form onSubmit={this.handleSubmit} className="form-group mt-5">
            <label htmlFor="">Add Todo</label>
            <input className="form-control" type="text"  onChange={this.handleChnage} value={this.state.content} required/>
            <input className="btn btn-success mt-3" type="submit" value="Add todo" />
            </form>
            </div>
        )
       
        
    }
}

export default AddTodo;