import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const Mutation = {
  registerStudent: (
    _: any,
    args: { email: string; fullName: string; deptId: any }
  ) => {
    return prisma.student.create({
      data: {
        email: args.email,
        fullName: args.fullName,
        dept: args.deptId && {
          connect: { id: args.deptId },
        },
      },
    });
  },
  enroll: (_: any, args: { id: string }) => {
    return prisma.student.update({
      where: {
        id: Number(args.id),
      },
      data: {
        enrolled: true,
      },
    });
  },
  createDepartment: (_: any, args: { name: string; description: string }) => {
    return prisma.department.create({
      data: {
        name: args.name,
        description: args.description,
      },
    });
  },
};
