/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUserInfo = /* GraphQL */ `
  query GetUserInfo($id: ID!) {
    getUserInfo(id: $id) {
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
export const listUserInfos = /* GraphQL */ `
  query ListUserInfos(
    $filter: ModelUserInfoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserInfos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
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
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getLike = /* GraphQL */ `
  query GetLike($id: ID!) {
    getLike(id: $id) {
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
export const listLikes = /* GraphQL */ `
  query ListLikes(
    $filter: ModelLikeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLikes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
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
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getStock = /* GraphQL */ `
  query GetStock($id: ID!) {
    getStock(id: $id) {
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
export const listStocks = /* GraphQL */ `
  query ListStocks(
    $filter: ModelStockFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStocks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
