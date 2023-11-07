import { Query } from "./query";
import { Mutation } from "./mutation";

const Student = {
  id: (parent: { id: any }, args: any, context: any, info: any) => parent.id,
  email: (parent: { email: string }) => parent.email,
  fullName: (parent: { fullName: string }) => parent.fullName,
  dept: (parent: { dept: string }) => parent.dept,
  enrolled: (parent: { enrolled: boolean }) => parent.enrolled,
};

export const resolvers = {
  Student,
  Query,
  Mutation,
};
