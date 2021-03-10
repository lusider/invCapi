import React, { Component } from 'react'

class Comment extends Component {
    render() {

        const { content, commentOwnerUsername } = this.props
        return (
            <div className="comment">
                <span style={{ fontStyle: "italic", color: ""}}>
                    {"Comment By: "} { commentOwnerUsername }

                </span>
                <p>{content}</p>
            </div>
        )
    }
}
export default Comment