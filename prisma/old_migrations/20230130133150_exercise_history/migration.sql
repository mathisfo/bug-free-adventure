-- CreateTable
CREATE TABLE "ExerciseHistory" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "visitedAt" TIMESTAMP(3) NOT NULL,
    "completedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ExerciseHistory_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ExerciseHistory_userId_key" ON "ExerciseHistory"("userId");

-- AddForeignKey
ALTER TABLE "ExerciseHistory" ADD CONSTRAINT "ExerciseHistory_id_fkey" FOREIGN KEY ("id") REFERENCES "ActivityResource"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExerciseHistory" ADD CONSTRAINT "ExerciseHistory_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
