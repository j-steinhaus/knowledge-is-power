const { gql } = require("apollo-server-express");

const typeDefs = gql`
type User {
    _id: ID
    name: String
    username: String
    email: String
    password: String
}

type Auth {
    token: String
    user: User
}

type Query {
    me: User
}
`;

module.exports = typeDefs;