/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUserInfo = /* GraphQL */ `
  subscription OnCreateUserInfo {
    onCreateUserInfo {
      id
      userInfoOwnerId
      userInfoOwnerUsername
      firstName
      lastName
      photo
      stocks {
        id
        symbol
        companyName
        date
        price
        dailyHigh
        createdAt
        updatedAt
        owner
      }
      posts {
        items {
          id
          postOwnerId
          postOwnerUsername
          symbol
          prediction
          predictionEndDate
          call
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateUserInfo = /* GraphQL */ `
  subscription OnUpdateUserInfo {
    onUpdateUserInfo {
      id
      userInfoOwnerId
      userInfoOwnerUsername
      firstName
      lastName
      photo
      stocks {
        id
        symbol
        companyName
        date
        price
        dailyHigh
        createdAt
        updatedAt
        owner
      }
      posts {
        items {
          id
          postOwnerId
          postOwnerUsername
          symbol
          prediction
          predictionEndDate
          call
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteUserInfo = /* GraphQL */ `
  subscription OnDeleteUserInfo {
    onDeleteUserInfo {
      id
      userInfoOwnerId
      userInfoOwnerUsername
      firstName
      lastName
      photo
      stocks {
        id
        symbol
        companyName
        date
        price
        dailyHigh
        createdAt
        updatedAt
        owner
      }
      posts {
        items {
          id
          postOwnerId
          postOwnerUsername
          symbol
          prediction
          predictionEndDate
          call
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
      id
      postOwnerId
      postOwnerUsername
      symbol
      prediction
      predictionEndDate
      call
      user {
        id
        userInfoOwnerId
        userInfoOwnerUsername
        firstName
        lastName
        photo
        stocks {
          id
          symbol
          companyName
          date
          price
          dailyHigh
          createdAt
          updatedAt
          owner
        }
        posts {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      likes {
        items {
          id
          numberLikes
          likeOwnerId
          likeOwnerUsername
          createdAt
          updatedAt
        }
        nextToken
      }
      comments {
        items {
          id
          commentOwnerId
          commentOwnerUsername
          content
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
      id
      postOwnerId
      postOwnerUsername
      symbol
      prediction
      predictionEndDate
      call
      user {
        id
        userInfoOwnerId
        userInfoOwnerUsername
        firstName
        lastName
        photo
        stocks {
          id
          symbol
          companyName
          date
          price
          dailyHigh
          createdAt
          updatedAt
          owner
        }
        posts {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      likes {
        items {
          id
          numberLikes
          likeOwnerId
          likeOwnerUsername
          createdAt
          updatedAt
        }
        nextToken
      }
      comments {
        items {
          id
          commentOwnerId
          commentOwnerUsername
          content
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
      id
      postOwnerId
      postOwnerUsername
      symbol
      prediction
      predictionEndDate
      call
      user {
        id
        userInfoOwnerId
        userInfoOwnerUsername
        firstName
        lastName
        photo
        stocks {
          id
          symbol
          companyName
          date
          price
          dailyHigh
          createdAt
          updatedAt
          owner
        }
        posts {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      likes {
        items {
          id
          numberLikes
          likeOwnerId
          likeOwnerUsername
          createdAt
          updatedAt
        }
        nextToken
      }
      comments {
        items {
          id
          commentOwnerId
          commentOwnerUsername
          content
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateLike = /* GraphQL */ `
  subscription OnCreateLike {
    onCreateLike {
      id
      numberLikes
      likeOwnerId
      likeOwnerUsername
      post {
        id
        postOwnerId
        postOwnerUsername
        symbol
        prediction
        predictionEndDate
        call
        user {
          id
          userInfoOwnerId
          userInfoOwnerUsername
          firstName
          lastName
          photo
          createdAt
          updatedAt
          owner
        }
        likes {
          nextToken
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateLike = /* GraphQL */ `
  subscription OnUpdateLike {
    onUpdateLike {
      id
      numberLikes
      likeOwnerId
      likeOwnerUsername
      post {
        id
        postOwnerId
        postOwnerUsername
        symbol
        prediction
        predictionEndDate
        call
        user {
          id
          userInfoOwnerId
          userInfoOwnerUsername
          firstName
          lastName
          photo
          createdAt
          updatedAt
          owner
        }
        likes {
          nextToken
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteLike = /* GraphQL */ `
  subscription OnDeleteLike {
    onDeleteLike {
      id
      numberLikes
      likeOwnerId
      likeOwnerUsername
      post {
        id
        postOwnerId
        postOwnerUsername
        symbol
        prediction
        predictionEndDate
        call
        user {
          id
          userInfoOwnerId
          userInfoOwnerUsername
          firstName
          lastName
          photo
          createdAt
          updatedAt
          owner
        }
        likes {
          nextToken
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
      id
      commentOwnerId
      commentOwnerUsername
      content
      post {
        id
        postOwnerId
        postOwnerUsername
        symbol
        prediction
        predictionEndDate
        call
        user {
          id
          userInfoOwnerId
          userInfoOwnerUsername
          firstName
          lastName
          photo
          createdAt
          updatedAt
          owner
        }
        likes {
          nextToken
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
      id
      commentOwnerId
      commentOwnerUsername
      content
      post {
        id
        postOwnerId
        postOwnerUsername
        symbol
        prediction
        predictionEndDate
        call
        user {
          id
          userInfoOwnerId
          userInfoOwnerUsername
          firstName
          lastName
          photo
          createdAt
          updatedAt
          owner
        }
        likes {
          nextToken
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
      id
      commentOwnerId
      commentOwnerUsername
      content
      post {
        id
        postOwnerId
        postOwnerUsername
        symbol
        prediction
        predictionEndDate
        call
        user {
          id
          userInfoOwnerId
          userInfoOwnerUsername
          firstName
          lastName
          photo
          createdAt
          updatedAt
          owner
        }
        likes {
          nextToken
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateStock = /* GraphQL */ `
  subscription OnCreateStock {
    onCreateStock {
      id
      symbol
      companyName
      date
      price
      dailyHigh
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateStock = /* GraphQL */ `
  subscription OnUpdateStock {
    onUpdateStock {
      id
      symbol
      companyName
      date
      price
      dailyHigh
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteStock = /* GraphQL */ `
  subscription OnDeleteStock {
    onDeleteStock {
      id
      symbol
      companyName
      date
      price
      dailyHigh
      createdAt
      updatedAt
      owner
    }
  }
`;
