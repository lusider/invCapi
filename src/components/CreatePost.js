/* src/App.js */
import React, { useState, useEffect } from 'react'
import { API, graphqlOperation, Auth } from 'aws-amplify'
import { createPost } from '../graphql/mutations'


const initialState = { 
  postOwnerId: '',
  postOwnerUsername: '',
  symbol: '', 
  prediction: '', 
  predictionEndDate: '', 
  call: '' }

const CreatePost = () => {
  const [formState, setFormState] = useState(initialState)
  const [posts, setPosts] = useState([])

  useEffect(() => {
    getAuth()
  }, [])
 
  function setInput(key, value) {
    setFormState({ ...formState, [key]: value })
  }
  async function getAuth() {
    await Auth.currentUserInfo()
      .then(user => {
        setFormState({
          postOwnerId: user.attributes.sub,
          postOwnerUsername: user.username
        })
        // console.log(user.id)
        // console.log(user.attributes.sub)
        // console.log(user.username)
      })
  }
  

  async function addPost() {
    try {
      if ( !formState.postOwnerId || !formState.postOwnerUsername || !formState.symbol || !formState.prediction || !formState.predictionEndDate || !formState.call) return
      const post = { ...formState }
      setPosts([...posts, post])
      setFormState(initialState)
      await API.graphql(graphqlOperation(createPost, {input: post}))
    } catch (err) {
      console.log('error creating post:', err)
    }

  }

  return (
    <div style={styles.container}>
      <input
        onChange={event => setInput('call', event.target.value)}
        style={styles.input}
        value={formState.call}
        placeholder="Post"
      />
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
          <input
            onChange={event => setInput('symbol', event.target.value)}
            style={styles.small}
            value={formState.symbol}
            placeholder="WXYZ"
          />
          <input
            onChange={event => setInput('prediction', event.target.value)}
            style={styles.small}
            value={formState.prediction}
            placeholder="$0.00"
          />
          <input
            onChange={event => setInput('predictionEndDate', event.target.value)}
            style={styles.medium}
            value={formState.predictionEndDate}
            placeholder="12-11-21"      
          />
          <button style={styles.button} onClick={addPost}>Create Post</button>
        </div>

      </div>
    </div>
  )
}

const styles = {
  container: { width: 580, margin: '0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 20, borderBottom: 'solid orange' },
  small: {  border: 'none', backgroundColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 18, width: 70 },
  medium: {  border: 'none', backgroundColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 18, width: 180 },
  input: { border: 'none', backgroundColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 18 },
  postSymbol: { fontSize: 20, fontWeight: 'bold' },
  postPrediction: { marginBottom: 0 },

  button: { width: '150px', height: '38px', backgroundColor: 'black', color: 'white', outline: 'none', fontSize: 18 }
}

export default CreatePost