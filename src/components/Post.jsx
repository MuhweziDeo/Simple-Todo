import React, { Component } from 'react'
import axios from 'axios';
import {connect} from 'react-redux';
import {deletePost} from '../actions/postActions';


class Post extends Component{
    // componentDidMount(){
    // //     let id=this.props.match.params.post_id;
    // //    this.setState({id:id})
    // //    axios.get('https://jsonplaceholder.typicode.com/posts/'+ id).then(
    // //        res=>{
    // //            this.setState({post:res.data})
    // //        }
    // //    )
    // console.log(this.props)
    // }
    handleClick=()=>{
        this.props.deletePost(this.props.post.id)
        this.props.history.push('/')
    }
    render(){
        const post=this.props.post ? (
            <div>
                {this.props.post.title}
                <hr/>
                <button onClick={this.handleClick} className="btn btn-success">Delete Post</button>
            </div>
        ):(
            <div>
                loading.......
            </div>
        )
        return (
            <div className="container">
            {post}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    let id=ownProps.match.params.post_id
  
    return {
        post: state.posts.find(post => post.id === parseInt(id))
       
    }
  
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        deletePost: (id) => {
            dispatch(deletePost(id))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Post);