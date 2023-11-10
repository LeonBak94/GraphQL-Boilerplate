import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

import { Query } from "./query";
import { Mutation } from "./mutation";

const Student = {
  id: (parent: { id: any }) => parent.id,
  email: (parent: { email: string }) => parent.email,
  fullName: (parent: { fullName: string }) => parent.fullName,
  dept: (parent: { dept: any }) => {
    return prisma.department.findFirst({
      where: { id: parent.dept },
    });
  },
};

export const resolvers = {
  Student,
  Query,
  Mutation,
};
