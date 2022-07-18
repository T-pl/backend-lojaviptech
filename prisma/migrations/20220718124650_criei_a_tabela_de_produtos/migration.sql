-- CreateTable
CREATE TABLE "PRODUCTS" (
    "id" SERIAL NOT NULL,
    "brand" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "color" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PRODUCTS_pkey" PRIMARY KEY ("id")
);
