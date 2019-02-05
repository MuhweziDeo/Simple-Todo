import React,{Component} from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';
import Image from '../assets/img/theme/team-4-800x800.jpg'

class Home extends Component{
    state={
        posts:[]
    }
componentDidMount(){
axios.get('https://jsonplaceholder.typicode.com/posts').then(
    res=>{
        this.setState({posts:res.data.slice(0,10)})
    }
)

}    

render(){
    const {posts}=this.state
    const postList=posts.length ? (posts.map(post=>{
        return (
            <div key={post.id} className="shadow-lg mb-5 p-3 container" style={{width:"20%"}}>
            <Link to={'/'+ post.id}>
            <p type="button" className="btn btn-default" data-container="body" data-toggle="popover" data-placement="top">{post.title.slice(0,5)}</p>
            </Link>
                
                <br/>
                <div>
                    <img src={Image} alt=""/>
                    {post.body}
                </div>
            </div>
            
        )
    })):(<p>No Posts Yet</p>)
    return(
        <div className="home__container">
        <h1>Home</h1>
        {postList}
        <hr/>
        </div>
    )
}
}


export default Home;