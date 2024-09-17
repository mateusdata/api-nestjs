/*
  Warnings:

  - You are about to drop the `Teste` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Teste";

-- CreateTable
CREATE TABLE "Follower" (
    "followerId" SERIAL NOT NULL,
    "followedId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Follower_pkey" PRIMARY KEY ("followerId")
);

-- CreateTable
CREATE TABLE "Session" (
    "sessionId" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "token" TEXT NOT NULL,
    "ip" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("sessionId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Follower_followerId_followedId_key" ON "Follower"("followerId", "followedId");

-- CreateIndex
CREATE UNIQUE INDEX "Session_token_key" ON "Session"("token");

-- AddForeignKey
ALTER TABLE "Follower" ADD CONSTRAINT "Follower_followerId_fkey" FOREIGN KEY ("followerId") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Follower" ADD CONSTRAINT "Follower_followedId_fkey" FOREIGN KEY ("followedId") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;
