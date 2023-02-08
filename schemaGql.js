import {gql} from "apollo-server"
const typeDefs = gql`
 type Query{
    users:[User]
    user(_id:ID!):User
    quotes:[QuoteWithName]
    iquote(by:ID!):[Quote]
 }

 type QuoteWithName{
     name:String
     by:IdName
 }
 
 type IdName{
     _id:String
     firstName:String
 }

 type User{
     _id:ID!
     firstName:String!
     lastName:String!
     email:String!
     password:String!
     quotes:[Quote]
     website: String
 }
 type Quote{
     name:String!
     by:ID!
 }

 type Token{
     token:String!
 }

 type Mutation{
     signupUser(userNew:UserInput!):User
     signinUser(userSignin:UserSigninInput!):Token
     createQuote(name:String!):String
     addUserWebsite(userWebsite: UserWebsiteInput!):User
 }

 input UserInput{
    firstName:String!
    lastName:String!
    email:String!
    password:String!
 }
 input UserSigninInput{
    email:String!
    password:String!
 }

 input UserWebsiteInput {
    website:String!
 }

`
export default typeDefs