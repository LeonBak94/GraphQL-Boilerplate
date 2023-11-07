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
  student: (_: any, args: { id: any }) => {
    return prisma.student.findFirst({
      where: { id: Number(args.id) },
    });
  },
};
