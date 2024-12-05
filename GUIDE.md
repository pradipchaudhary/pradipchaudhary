## Prisma integration

### Set up Prisma with PostgreSQL and create a user schema.

1. First, install Prisma dependencies:

```
npm install prisma @prisma/client
npm install bcryptjs @types/bcryptjs
```

2. Initialize Prisma:

```
npx prisma init
```

3. Create the schema in prisma/schema.prisma:

```
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id         String   @id @default(uuid())
  username   String   @unique
  email      String   @unique
  password   String
  role       Role     @default(USER)
  createdAt  DateTime @default(now()) @map("created_at")
  updatedAt  DateTime @updatedAt @map("updated_at")

  @@map("users")
}

enum Role {
  USER
  ADMIN
}
```

4. Update your .env file with your PostgreSQL connection URL:

```
DATABASE_URL="postgresql://username:password@localhost:5432/your_database_name?schema=public"
```

5. Create and run the migration:

```
npx prisma migrate dev --name init_users
```

6. Create a Prisma client instance (lib/prisma.ts):

```
import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
    globalForPrisma.prisma ||
    new PrismaClient({
        log: ["query"],
    });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
```

# Install

```
npm install yup @hookform/resolvers react-hook-form axios
```
