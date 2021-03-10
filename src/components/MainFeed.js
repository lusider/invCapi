import React, { useEffect, useState } from 'react'
import { API, graphqlOperation } from 'aws-amplify'
import { onCreatePost } from '../graphql/subscriptions'
import { listPosts } from '../graphql/queries'

const MainFeed = () => {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetchPosts()
    createPostListener()
  }, [])


  async function createPostListener() { API.graphql(graphqlOperation(onCreatePost))
            .subscribe({
                next: postData => {
                    const newPost = postData.value.data.onCreatePost
                    const prevPosts = posts.filter( post => post.id !== newPost.id)
                    const updatedPost = [newPost, ...prevPosts]
                    this.setState({posts: updatedPost})
                }
            })
        }

        async function fetchPosts() {
    try {
      const postData = await API.graphql(graphqlOperation(listPosts))
      const posts = postData.data.listPosts.items
      setPosts(posts)
    } catch (err) { console.log('error fetching posts') }
  }

  return (
    <div style={styles.container}>
      {
        posts.map((post, index) => (
          <div key={post.id ? post.id : index} style={{display: 'flex', flexDirection: 'row', borderBottom: 'groove'}}>
        
            <div style={styles.userBox}>
              <p>{post.owner}</p>

            </div>
            <div style={styles.stockBox}>
              <div style={styles.postSymbol}>{post.symbol}</div>              
              <div style={styles.info}>Prediction: ${post.prediction}</div>
              <div style={styles.info}>By Date: {post.predictionEndDate}</div>
            </div>
            
            <div style={styles.postBox}>
              <div style={styles.post}>{post.call}</div>
              <p style={styles.info}>{post.createdAt}</p>
            </div>
          </div>
        ))
      }
    </div>
  )
}

const styles = {
  container: { width: 600, margin: '0 auto', display: 'flex', flexDirection: 'column', padding: 20, justifyContent: 'start' },
  stockBox: { borderRight: 'groove', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flex: 3, paddingRight: '10px', paddingTop: '10px' },
  userBox: { borderRight: 'groove', display: 'flex', flexDirection: 'column', padding: 20, justifyContent: 'flex-start', flex: 1},
  postBox: { display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flex: 8},

  postSymbol: { fontSize: 23, fontWeight: 'bold', paddingLeft: 10, display: 'flex', flexDirection: 'row' },
  post: { paddingLeft: 10, paddingTop: 10, paddingBottom: 5},
  info: { display: 'flex', flexDirection: 'row', fontSize: 12, fontWeight: 400, paddingLeft: 10 },
  

}

export default MainFeed