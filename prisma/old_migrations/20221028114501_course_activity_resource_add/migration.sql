-- CreateEnum
CREATE TYPE "type" AS ENUM ('EXAMPLE', 'CHALLENGE', 'CODING');

-- CreateTable
CREATE TABLE "Course" (
    "id" TEXT NOT NULL,
    "courseName" TEXT NOT NULL,
    "order" INTEGER NOT NULL,

    CONSTRAINT "Course_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ActivityResource" (
    "id" TEXT NOT NULL,
    "type" "type" NOT NULL,
    "name" TEXT NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "ActivityResource_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ActivityResource_id_key" ON "ActivityResource"("id");

-- AddForeignKey
ALTER TABLE "ActivityResource" ADD CONSTRAINT "ActivityResource_id_fkey" FOREIGN KEY ("id") REFERENCES "Course"("id") ON DELETE CASCADE ON UPDATE CASCADE;
