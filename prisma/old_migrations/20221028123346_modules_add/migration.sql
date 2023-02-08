-- DropForeignKey
ALTER TABLE "ActivityResource" DROP CONSTRAINT "ActivityResource_id_fkey";

-- CreateTable
CREATE TABLE "Module" (
    "id" TEXT NOT NULL,
    "moduleName" TEXT NOT NULL,

    CONSTRAINT "Module_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ActivityResource" ADD CONSTRAINT "ActivityResource_id_fkey" FOREIGN KEY ("id") REFERENCES "Module"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Module" ADD CONSTRAINT "Module_id_fkey" FOREIGN KEY ("id") REFERENCES "Course"("id") ON DELETE CASCADE ON UPDATE CASCADE;
