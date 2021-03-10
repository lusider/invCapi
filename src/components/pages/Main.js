import React, { Component } from 'react'
import AddPost from '../../classComponents/AddPost'
import DisplayPosts from '../../classComponents/DisplayPosts'

export default class Main extends Component {
    render() {
        return (
            <div style={{display: 'flex', flexDirection: 'row', margin: 20}}>

                
                <div style={{border: 'groove .5px', borderRadius: '10px', display: 'flex', flexDirection: 'column' }}>
                  <AddPost />
                  <DisplayPosts />
                </div>
            </div>
        )
    }
}
