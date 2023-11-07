/*
  Warnings:

  - You are about to drop the `course` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `department` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `student` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `teacher` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "course" DROP CONSTRAINT "course_departmentId_fkey";

-- DropForeignKey
ALTER TABLE "course" DROP CONSTRAINT "course_teacherId_fkey";

-- DropForeignKey
ALTER TABLE "student" DROP CONSTRAINT "student_departmentId_fkey";

-- DropTable
DROP TABLE "course";

-- DropTable
DROP TABLE "department";

-- DropTable
DROP TABLE "student";

-- DropTable
DROP TABLE "teacher";

-- DropEnum
DROP TYPE "TeacherType";

-- CreateTable
CREATE TABLE "Student" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "dept" TEXT,
    "enrolled" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("id")
);
