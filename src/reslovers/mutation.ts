import { PrismaClient } from "@prisma/client";
import { compare, hash } from "bcryptjs";
import jsonwebtoken from "jsonwebtoken";
const prisma = new PrismaClient();

export const Mutation = {
  registerUser: async (_: any, args: { email: string; password: string }) => {
    const hashPassword = await hash(args.password, 5);
    try {
      return prisma.user.create({
        data: {
          email: args.email,
          password: hashPassword,
        },
      });
    } catch (err) {
      console.log(err);
      return false;
    }
  },

  login: async (_: any, args: { email: string; password: string }) => {
    try {
      const user = await prisma.user.findFirst({
        where: { email: args.email },
      });
      if (!user) throw new Error("User not found.");
      const verify = compare(args.password, user.password);
      if (!verify) throw new Error("Wrong Password");
      const token = jsonwebtoken.sign(
        { email: args.email },
        process.env.SECRET_KEY!,
        {
          expiresIn: "1d",
        }
      );
      return { accessToken: token };
    } catch (err) {
      console.log(err);
      return false;
    }
  },

  registerStudent: (
    _: any,
    args: { email: string; fullName: string; deptId: any }
  ) => {
    try {
      return prisma.student.create({
        data: {
          email: args.email,
          fullName: args.fullName,
          dept: args.deptId && {
            connect: { id: args.deptId },
          },
        },
      });
    } catch (err) {
      console.log(err);
      return false;
    }
  },

  createDepartment: (_: any, args: { name: string; description: string }) => {
    try {
      return prisma.department.create({
        data: {
          name: args.name,
          description: args.description,
        },
      });
    } catch (err) {
      console.log(err);
      return false;
    }
  },
};
