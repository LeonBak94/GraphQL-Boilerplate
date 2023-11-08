const { gql } = require("apollo-server");

export const typeDefs = gql`
  type Student {
    id: ID!
    email: String!
    fullName: String
    dept: Department!
    enrolled: Boolean
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
    registerStudent(email: String!, fullName: String!, deptId: Int!): Student!
    enroll(id: ID!): Student
    createDepartment(name: String!, description: String): Department!
  }
`;
