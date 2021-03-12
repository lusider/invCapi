import React, { Component } from 'react'
import { API,Auth, graphqlOperation } from 'aws-amplify'
import { createComment } from '../graphql/mutations'

class CreateComment extends Component {
    
    state = {
        commentOwnerId: "",
        commentOwnerUsername: "",
        content: ""
    }
    componentDidMount = async () => {
        await Auth.currentUserInfo()
            .then(user => {
                this.setState({
                    commentOwnerId: user.attributes.sub,
                    commentOwnerUsername: user.username
                })
            })
    }

    handleChangeComment = event => this.setState({
        content: event.target.value
    })
    handleAddComment = async event => {
        event.preventDefault()
        const input = {
            commentPostId: this.props.postId,
            commentOwnerId: this.state.commentOwnerId,
            commentOwnerUsername: this.state.commentOwnerUsername,
            content: this.state.content
        }
        await API.graphql(graphqlOperation(createComment, { input }))
        this.setState({
            content: ""
        })
    }

    render() {
        return (
            <div>
                <form className="add-comment"

                
                 onSubmit={this.handleAddComment}>
                    <textarea
                        type="text"
                        name="content"
                        rows="3"
                        cols="40"
                        required
                        placeholder="Add your comment..."
                        value={this.state.content}
                        onChange={this.handleChangeComment}
                    />
                    <input
                        className="btn"
                        style={{ fontSize: '19px' }}
                        value="Add Comment"
                        type="submit"
                    />
                </form>
            </div>
        )
    }
}

export default CreateComment