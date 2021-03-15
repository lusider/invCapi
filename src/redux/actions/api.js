import { API, graphqlOperation } from 'aws-amplify'
import { createPost } from '../../graphql/mutations'
import { listPosts } from '../../graphql/queries'

// POSTS

export const addPost = newPost => {
    return API.graphql(graphqlOperation(createPost, { newPost }))
    .then(docRef => docRef.id)
}


export const displayPosts = () => {
    return API.graphql(graphqlOperation(listPosts))
    .then(postData => {
        const posts = postData.data.listPosts.items.map((doc) => ({
            id: doc.id, 
            call: doc.call, 
            prediction: doc.prediction, 
            predictionEndDate: doc.predictionEndDate,
            postOwnerUsername: doc.postOwnerUsername,
            postOwnerId: doc.postOwnerId,
            symbol: doc.symbol

        }))
        // const posts = postData.data.listPosts.items.map(doc => ({...doc.data}))
        return posts	
    })
}
