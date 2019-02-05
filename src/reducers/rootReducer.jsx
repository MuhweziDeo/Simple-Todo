const initState={
    posts:[
        {id:1,title:'deee1',body:'anndkandkandkanaknacknakcnakn'},
        {id:2,title:'deee2',body:'anndkandkandkayopqqaxa,.x'},
        {id:3,title:'deee3',body:'anndkanda smsm,smx'}
    ]
}
const rootReducer=(state=initState,action)=>{
    if(action.type === 'DELETE_POST'){
        let newPosts=state.posts.filter(post=>{
            return action.id !== post.id
        });
        return {
            ...state,
            posts:newPosts
        }
    }
    return state;
}

export default rootReducer;