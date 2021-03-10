/* src/App.js */
import React, { useState, useEffect } from 'react'
import { API, Auth, graphqlOperation } from 'aws-amplify'
import Button from '@material-ui/core/Button'
import { createUserInfo } from '../graphql/mutations'

const initialState = { firstName: '', lastName: '', photo: '', userInfoOwnerId: '', userInfoUsername: '' }

const CreateUserInfo = () => {
  const [formState, setFormState] = useState(initialState)
  const [user, setUser] = useState({})

  const hiddenFileInput = React.useRef(null)
	
	const handleClick = event => hiddenFileInput.current.click()
	
	const handleUpload = (event) => {
	    URL.createObjectURL(event.target.files[0], {type: 'image/jpeg'})
	}

  useEffect(() => {
    getAuth()
  }, [])
  function setInput(key, value) {
    setFormState({ ...formState, [key]: value })
  }
  async function getAuth() {
    await Auth.currentUserInfo()
      .then(user => {
        console.log(user.id)
        console.log(user.attributes.sub)
        console.log(user.username)
      })
  }

  async function addUser() {
    try {
      if (!formState.firstName || !formState.lastName || !formState.photo) return
      const userForm = { ...formState }


      const input = {
        userInfoOwnerId: this.user.id,
        userInfoUsername: this.user.attributes.sub,
        photo: this.state.photo,
        firstName: this.state.firstName,
        lastName: this.state.lastName
      }
      setUser(input)
      await API.graphql(graphqlOperation(createUserInfo, {input}))
    } catch (err) {
      console.log('error creating user:', err)
    }
  }

  return (
    <div style={styles.container}>
      <input
        onChange={event => setInput('firstName', event.target.value)}
        style={styles.input}
        value={formState.firstName}
        placeholder="First Name"
      />
      <input
        onChange={event => setInput('lastName', event.target.value)}
        style={styles.input}
        value={formState.lastName}
        placeholder="Last Name"
      />
      <div>Choose Avatar Image</div>
      <div className={styles.controls}>
    		<input
          onClick={event => handleUpload} 
    		  type="file" 
    		  onChange={event => setInput('photo', event.target.value)} 
          value={formState.photo} 
    		 />

	        <Button
	          type="input"
	          style={{marginTop: 50}}
	          onClick={handleClick}
	          variant="contained"
	          color="primary"
	          classes={{ root: styles.cropButton }}
	        >
	          Select Image
	        </Button>
		</div>
      <button style={styles.button} onClick={addUser}>Submit</button>
      
    </div>
  )
}

const styles = {
  container: { width: 400, margin: '0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 20 },
  input: { border: 'none', backgroundColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 18 },
  button: { backgroundColor: 'black', color: 'white', outline: 'none', fontSize: 18, padding: '12px 0px' }
}

export default CreateUserInfo