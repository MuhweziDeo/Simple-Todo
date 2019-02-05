import React, { Component } from 'react'
import axios from 'axios';

class Post extends Component{
    state={
        post:null
    }
    componentDidMount(){
        let id=this.props.match.params.post_id;
       this.setState({id:id})
       axios.get('https://jsonplaceholder.typicode.com/posts/'+ id).then(
           res=>{
               this.setState({post:res.data})
           }
       )
    
    }
    
    render(){
        const post=this.state.post ? (
            <div>
                {this.state.post.title}
            </div>
        ):(
            <div>
                loading.......
            </div>
        )
        console.log(post)
        return (
            <div className="container">
            {post}
            </div>
        )
    }
}

export default Post;