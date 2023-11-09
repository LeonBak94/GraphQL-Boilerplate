const { gql } = require("apollo-server");

export const typeDefs = gql`
  type User {
    id: ID!
    email: String!
    password: String!
  }
  type AccessToken {
    accessToken: String!
  }
  type Student {
    id: ID!
    email: String!
    fullName: String
    dept: Department!
    enrolled: Boolean
    deptId: ID!
  }

  type Department {
    id: ID!
    name: String!
    description: String
    updatedAt: String
    createdAt: String
  }

  type Query {
    enrollment: [Student!]
    students: [Student!]!
    student(id: ID!): Student
    departments: [Department!]!
    department(id: ID!): Department
  }

  type Mutation {
    registerUser(email: String!, password: String!): User
    login(email: String!, password: String!): AccessToken
    registerStudent(email: String!, fullName: String!, deptId: Int!): Student!
    enroll(id: ID!): Student
    createDepartment(name: String!, description: String!): Department!
  }
`;
