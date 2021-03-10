
import React from 'react'
import { API, Auth, graphqlOperation } from 'aws-amplify'
import { createPost } from '../graphql/mutations'

class AddPost extends React.Component {
    
    state = {
        postOwnerId: "",
        postOwnerUsername: "",
        symbol: "",
        call: "",
        prediction: 0.00,
        predictionEndDate: ""
    }

    componentDidMount = async () => {
        await Auth.currentUserInfo()
        .then(user => {
            this.setState({
                postOwnerId: user.attributes.sub,
                postOwnerUsername: user.username
            })
        })
    }
    handleChangePost = event => this.setState({
        [event.target.name]: event.target.value
    })

    handleAddPost = async event => {
        event.preventDefault()
        const input = {
            postOwnerId: this.state.postOwnerId,
            postOwnerUsername: this.state.postOwnerUsername,
            symbol: this.state.symbol,
            call: this.state.call,
            prediction: this.state.prediction,
            predictionEndDate: this.state.predictionEndDate
        }
        await API.graphql(graphqlOperation(createPost, { input }))
        this.setState({ symbol: "", call: "", prediction: "", predictionEndDate: "" });
    }

    render() {
        return (
            <div className="container">


                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'start', margin: 2, padding: 5}}>
                        <input
                            onChange={this.handleChangePost}
                            className="small"
                            name="symbol"
                            value={this.state.symbol}
                            placeholder="WXYZ"
                            style={styles.small}
                        />
                        <input
                            onChange={this.handleChangePost}
                            className="small"
                            name="prediction"
                            value={this.state.prediction}
                            placeholder="$0.00"
                            style={styles.small}
                        />
                        <input
                            onChange={this.handleChangePost}
                            className="medium"
                            name="predictionEndDate"
                            value={this.state.predictionEndDate}
                            placeholder="12-11-21"  
                            style={styles.medium}    
                        />
                    </div>
                    <div style={styles.postBox}>
                        <div style={styles.post}>
                        <input
                            onChange={this.handleChangePost}
                            className="input"
                            name="call"
                            value={this.state.call}
                            placeholder="Post"
                            style={styles.input}
                            
                        />
                        </div>
                        <div style={styles.submit}>
                          <button style={styles.button} className='button' onClick={this.handleAddPost}>Create Post</button>
                        </div>
                    </div>

            </div>
        )
    }
}
const styles = {
    container: { width: 580, margin: '0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', borderBottom: 'solid orange' },
    small: {  border: 'none', backgroundColor: '#ddd', marginBottom: 10, marginRight: 5, padding: 2, fontSize: 18, width: 70 },
    medium: {  border: 'none', backgroundColor: '#ddd', marginBottom: 10, padding: 2, fontSize: 18, width: 180 },
    input: { border: 'none', backgroundColor: '#ddd', marginBottom: 10, padding: 2, fontSize: 18 },
    postSymbol: { fontSize: 20, fontWeight: 'bold' },
    postPrediction: { marginBottom: 0 },
    postBox: { display: 'flex', flexDirection: 'row', borderBottom: 'solid orange'},
    post: { display: 'flex', flexDirection: 'column', flex: 8, marginLeft: 7 },
    submit: { display: 'flex', flexDirection: 'column', flex: 2, marginLeft: 7, paddingBottom: 4, paddingRight: 7},
    button: { width: '150px', height: '25px', backgroundColor: 'fff', color: 'grey', outline: 'none', fontSize: 18 }
  }
export default AddPost
