import React, { Component } from 'react'

export class UserDetails extends Component {
    render() {
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
        
    styles = {
        container: { width: 400, margin: '0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 20 },
        input: { border: 'none', backgroundColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 18 },
        button: { backgroundColor: 'black', color: 'white', outline: 'none', fontSize: 18, padding: '12px 0px' }
    }
}

export default UserDetails
