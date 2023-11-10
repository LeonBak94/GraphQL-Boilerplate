import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const Query = {
  enrollment: () => {
    try {
      return prisma.student.findMany({});
    } catch (err) {
      console.log(err);
      return false;
    }
  },
  students: () => {
    try {
      return prisma.student.findMany({});
    } catch (err) {
      console.log(err);
      return false;
    }
  },
  student: (_: any, args: { id: number }) => {
    try {
      return prisma.student.findFirst({
        where: { id: args.id },
      });
    } catch (err) {
      console.log(err);
      return false;
    }
  },
  departments: () => {
    try {
      return prisma.department.findMany({});
    } catch (err) {
      console.log(err);
      return false;
    }
  },

  department: (_: any, args: { id: number }) => {
    try {
      return prisma.department.findFirst({
        where: { id: args.id },
      });
    } catch (err) {
      console.log(err);
      return false;
    }
  },
};
