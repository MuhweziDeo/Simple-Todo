import React,{Component} from 'react'
import {Link} from 'react-router-dom';
import Image from '../assets/img/theme/team-4-800x800.jpg'
import {connect} from 'react-redux';

class Home extends Component{
   
componentDidMount(){
// axios.get('https://jsonplaceholder.typicode.com/posts').then(
//     res=>{
//         this.setState({posts:res.data.slice(0,10)})
//     }
console.log()


}    

render(){
    const {posts}=this.props
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

// get posts from store
const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(Home);