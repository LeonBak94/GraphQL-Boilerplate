import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const Mutation = {
  registerStudent: (_: any, args: { email: any; fullName: any }) => {
    return prisma.student.create({
      data: {
        email: args.email,
        fullName: args.fullName,
      },
    });
  },
  enroll: (_: any, args: { id: any }) => {
    return prisma.student.update({
      where: {
        id: Number(args.id),
      },
      data: {
        enrolled: true,
      },
    });
  },
};
