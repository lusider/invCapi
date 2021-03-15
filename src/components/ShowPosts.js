import React, { useEffect, useState } from 'react'
import { fetchPosts } from '../redux/actions'
import PostItem from '../components/post/PostItem'
import Container from 'react-bootstrap/Container'

const ShowPosts = () => {

    const [posts, updatePosts] = useState([])

    useEffect(() => {
        fetchPosts()
    }, [])
    const renderPosts = (posts) => {
        posts.map(post => <PostItem key={post.id} post={post} />)
    }
    // async function getData() {
    //     try {
    //         const postData = await API.graphql(graphqlOperation(listPosts))
    //         console.log('postData:', postData)
    //         updatePosts(postData)
    //         console.log(posts)
    //     } catch (err) {
    //         console.log('error fetching posts', err)
    //     }
    // }
    return (
        <Container>
            {
                renderPosts(posts)
            }
        </Container>
    )

}

export default ShowPosts














// export class DisplayPosts extends Component {

//     state = {
//         posts: []
//     }

//     componentDidMount = async () => {
//         this.getPosts()
//         this.createPostListener = API.graphql(graphqlOperation(onCreatePost))
//             .subscribe({
//                 next: postData => {
//                     const newPost = postData.value.data.onCreatePost
//                     const prevPosts = this.state.posts.filter( post => post.id !== newPost.id)
//                     const updatedPost = [newPost, ...prevPosts]
//                     this.setState({posts: updatedPost})
//                 }
//             })
        // this.createCommentListener = API.graphql(graphqlOperation(onCreateComment))
        //     .subscribe({
        //         next: commentData => {
        //             const createdComment = commentData.value.data.onCreateComment
        //             let posts = [ ...this.state.posts ] 
        //             for (let post of posts) {
        //                 if ( createdComment.post.id === post.id ) {
        //                     post.comments.items.push(createdComment)
        //                 }
        //             } 
        //             this.setState({ posts })
        //         }
        //     })
//     }

//     componentWillUnmount() {
//         this.createPostListener.unsubscribe()
//         // this.createCommentListener.unsubscribe()
//     }
//     getPosts = async () => {
//         const result = await API.graphql(graphqlOperation(listPosts))
//         this.setState({ posts: result.data.listPosts.items })
//     }

//     render() {
//         const { posts } = this.state
//         return posts.map(( post, index ) => {
//             return (
                
//                 <div style={styles.container} key={post.id ? post.id : index} >
    
//                         <div style={{display: 'flex', flexDirection: 'row', borderBottom: 'groove'}}>
                        
//                             <div style={styles.userBox}>
//                             <p>{post.owner}</p>

//                             </div>
//                             <div style={styles.stockBox}>
//                             <div style={styles.postSymbol}>{post.symbol}</div>              
//                             <div style={styles.info}>Prediction: ${post.prediction}</div>
//                             <div style={styles.info}>By Date: {post.predictionEndDate}</div>
//                             </div>
                            
//                             <div style={styles.postBox}>
//                             <div style={styles.post}>{post.call}</div>
//                                 <span style={{fontStyle: 'italic', fontSize: 10, fontWeight: 'bold', color: "#0ca5e297", marginLeft: 10}}>
//                                     <time style={{fontStyle: 'italic'}}>
//                                         { new Date(post.createdAt).toDateString() }
//                                         { " at " } 
//                                         { new Date(post.createdAt).toTimeString()}
//                                     </time>
//                                 </span>
//                             </div>
//                         </div>
                               
//                 </div>
//             )
//         })
//     }
// }
// const styles = {
//     container: { width: 600, margin: '0 auto', display: 'flex', flexDirection: 'column', padding: 20, justifyContent: 'start' },
//     stockBox: { borderRight: 'groove', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flex: 3, paddingRight: '10px', paddingTop: '10px' },
//     userBox: { borderRight: 'groove', display: 'flex', flexDirection: 'column', padding: 20, justifyContent: 'flex-start', flex: 1},
//     postBox: { display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flex: 8},
  
//     postSymbol: { fontSize: 23, fontWeight: 'bold', paddingLeft: 10, display: 'flex', flexDirection: 'row' },
//     post: { paddingLeft: 10, paddingTop: 10, paddingBottom: 5},
//     info: { display: 'flex', flexDirection: 'row', fontSize: 12, fontWeight: 400, paddingLeft: 10 },
    
  
//   }
// export default DisplayPosts
