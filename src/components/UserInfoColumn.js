import React, { useEffect } from 'react'
import { API, graphqlOperation } from 'aws-amplify'
import { getUserPhoto } from '../graphql/queries'

const UserInfoColumn = () => {

    const [photo, setPhoto] = useState('')
  //   const [photos, setPhotos] = useState([])
  
    useEffect(() => {
      fetchPhoto()
    }, [])
  
  //   async function fetchPhoto(id) {
  //     try {
  //       const photoData = await API.graphql(graphqlOperation(getUserPhoto(id)))
  //       const photos = photoData.data.getUserPhoto.items
  //       setPosts(posts)
  //     } catch (err) { console.log('error fetching posts') }
  //   }
  
    async function fetchPhoto(id) {
      try {
        const photoData = await API.graphql(graphqlOperation(getUserPhoto(id)))
        const image = photoData.data.getUserPhoto.items
        setPhoto(image)
      } catch (err) { console.log('error fetching posts') }
    }
  
    return (
      <div style={styles.container}>
        {
          posts.map((post, index) => (
            <div key={post.id ? post.id : index} style={{display: 'flex', flexDirection: 'row', borderBottom: 'groove'}}>
          
              <div style={styles.userBox}>
                <p>{post.owner}</p>
                {console.log(post.ownerId)}
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
  export default UserInfoColumn