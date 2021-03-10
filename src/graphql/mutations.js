/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUserInfo = /* GraphQL */ `
  mutation CreateUserInfo(
    $input: CreateUserInfoInput!
    $condition: ModelUserInfoConditionInput
  ) {
    createUserInfo(input: $input, condition: $condition) {
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
export const updateUserInfo = /* GraphQL */ `
  mutation UpdateUserInfo(
    $input: UpdateUserInfoInput!
    $condition: ModelUserInfoConditionInput
  ) {
    updateUserInfo(input: $input, condition: $condition) {
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
export const deleteUserInfo = /* GraphQL */ `
  mutation DeleteUserInfo(
    $input: DeleteUserInfoInput!
    $condition: ModelUserInfoConditionInput
  ) {
    deleteUserInfo(input: $input, condition: $condition) {
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
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
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
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
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
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
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
export const createLike = /* GraphQL */ `
  mutation CreateLike(
    $input: CreateLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    createLike(input: $input, condition: $condition) {
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
export const updateLike = /* GraphQL */ `
  mutation UpdateLike(
    $input: UpdateLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    updateLike(input: $input, condition: $condition) {
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
export const deleteLike = /* GraphQL */ `
  mutation DeleteLike(
    $input: DeleteLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    deleteLike(input: $input, condition: $condition) {
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
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
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
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
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
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
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
export const createStock = /* GraphQL */ `
  mutation CreateStock(
    $input: CreateStockInput!
    $condition: ModelStockConditionInput
  ) {
    createStock(input: $input, condition: $condition) {
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
export const updateStock = /* GraphQL */ `
  mutation UpdateStock(
    $input: UpdateStockInput!
    $condition: ModelStockConditionInput
  ) {
    updateStock(input: $input, condition: $condition) {
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
export const deleteStock = /* GraphQL */ `
  mutation DeleteStock(
    $input: DeleteStockInput!
    $condition: ModelStockConditionInput
  ) {
    deleteStock(input: $input, condition: $condition) {
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
