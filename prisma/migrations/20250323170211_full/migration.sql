-- CreateTable
CREATE TABLE "User" (
    "id" BIGSERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastOnline" TIMESTAMP(3),
    "image" TEXT,
    "regionId" BIGINT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Region" (
    "id" BIGSERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Region_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Chat" (
    "id" BIGSERIAL NOT NULL,
    "fromId" BIGINT NOT NULL,
    "toId" BIGINT NOT NULL,
    "productId" BIGINT NOT NULL,
    "text" TEXT NOT NULL,
    "time" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Chat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "id" BIGSERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "categoryId" BIGINT NOT NULL,
    "image" TEXT,
    "price" DOUBLE PRECISION NOT NULL,
    "userId" BIGINT NOT NULL,
    "new_old" BOOLEAN NOT NULL,
    "deal_with_price" BOOLEAN NOT NULL,
    "type" TEXT NOT NULL,
    "old_price" DOUBLE PRECISION,
    "desc" TEXT NOT NULL,
    "available" BIGINT NOT NULL,
    "discount" INTEGER NOT NULL,
    "checked" BOOLEAN NOT NULL,
    "star" DOUBLE PRECISION,
    "views" INTEGER NOT NULL,
    "location" TEXT,
    "likes" INTEGER NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Color" (
    "id" BIGSERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "productId" BIGINT NOT NULL,

    CONSTRAINT "Color_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" BIGSERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Coment" (
    "id" BIGSERIAL NOT NULL,
    "userId" BIGINT NOT NULL,
    "productId" BIGINT NOT NULL,
    "text" TEXT NOT NULL,
    "star" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Coment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User_like" (
    "id" BIGSERIAL NOT NULL,
    "userId" BIGINT NOT NULL,
    "productId" BIGINT NOT NULL,

    CONSTRAINT "User_like_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Order" (
    "id" BIGSERIAL NOT NULL,
    "productId" BIGINT NOT NULL,
    "userId" BIGINT NOT NULL,
    "prod_count" INTEGER NOT NULL,
    "ordered_time" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WebInfo" (
    "id" BIGSERIAL NOT NULL,
    "phone" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telegram_link" TEXT,
    "insta_link" TEXT,
    "facebook_link" TEXT,

    CONSTRAINT "WebInfo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ColorToProduct" (
    "A" BIGINT NOT NULL,
    "B" BIGINT NOT NULL,

    CONSTRAINT "_ColorToProduct_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_ColorToProduct_B_index" ON "_ColorToProduct"("B");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_regionId_fkey" FOREIGN KEY ("regionId") REFERENCES "Region"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Chat" ADD CONSTRAINT "Chat_fromId_fkey" FOREIGN KEY ("fromId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Chat" ADD CONSTRAINT "Chat_toId_fkey" FOREIGN KEY ("toId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Coment" ADD CONSTRAINT "Coment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Coment" ADD CONSTRAINT "Coment_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User_like" ADD CONSTRAINT "User_like_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User_like" ADD CONSTRAINT "User_like_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ColorToProduct" ADD CONSTRAINT "_ColorToProduct_A_fkey" FOREIGN KEY ("A") REFERENCES "Color"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ColorToProduct" ADD CONSTRAINT "_ColorToProduct_B_fkey" FOREIGN KEY ("B") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;
