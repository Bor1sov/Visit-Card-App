/*
  Warnings:

  - Added the required column `github` to the `Profile` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Profile" ADD COLUMN     "github" TEXT NOT NULL,
ADD COLUMN     "linkedin" TEXT;
