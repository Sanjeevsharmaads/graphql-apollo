import {gql} from '@apollo/client'
export const CREATE_USER = gql`
mutation createUser($userNew:UserInput!){
    user:signupUser(userNew:$userNew){ 
      _id
      email
      firstName
      lastName
    }
  }`

export const SIGN_IN_USER = gql`
mutation SigninUser($userSignin:UserSigninInput!){
    user:signinUser(userSignin:$userSignin){ 
      token
    }
  }`

export const ADD_WEBSITE = gql`
mutation addUserWebsite($website: UserWebsiteInput!){
    user: addUserWebsite(userWebsite:$website){
        firstName,
        lastName, 
        website,
        email
    }
}`