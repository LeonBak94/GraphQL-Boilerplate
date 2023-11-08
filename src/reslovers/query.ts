import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const Query = {
  enrollment: () => {
    return prisma.student.findMany({
      where: { enrolled: true },
    });
  },
  students: () => {
    return prisma.student.findMany({});
  },
  student: (_: any, args: { id: number }) => {
    return prisma.student.findFirst({
      where: { id: args.id },
    });
  },
  departments: () => {
    return prisma.department.findMany({});
  },

  department: (_: any, args: { id: number }) => {
    return prisma.department.findFirst({
      where: { id: args.id },
    });
  },
};
