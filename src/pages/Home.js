/* eslint jsx-a11y/anchor-is-valid: 0 */
import React from 'react'
import { connect } from 'react-redux' // High order Compoment (HOC)
import PostItem from '../components/post/PostItem'
import { fetchPosts } from '../redux/actions'

class Home extends React.Component {
  
  // state = {
  //   posts: []
  // }

  componentDidMount() {
    this.props.fetchPosts()
  }
  
  // posts = Array.from(this.props.fetchPosts)
  
  renderPosts= (posts) => 
    posts.map(post => <PostItem key={post.id} post={post} />) 


    render() {
      const { posts } = this.props
      console.log(this.props.posts)
      return (
      <div>


        <section>
          <div>
            <div>
              <h4>Stuff</h4>
            </div>
            <div>
              <div>
              { this.renderPosts(posts) }
              </div>
            </div>
          </div>
        </section>

      </div>
      )
    }
}

const mapStateToProps = state => ({posts: state.posts.all})
 

export default connect(mapStateToProps, {fetchPosts})(Home)