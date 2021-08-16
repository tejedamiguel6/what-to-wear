/*
  Warnings:

  - Added the required column `published` to the `Outfit` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Outfit" ADD COLUMN     "published" BOOLEAN NOT NULL;
