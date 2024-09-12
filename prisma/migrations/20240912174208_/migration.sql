/*
  Warnings:

  - A unique constraint covering the columns `[title]` on the table `tudo_list` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "tudo_list_title_key" ON "tudo_list"("title");
