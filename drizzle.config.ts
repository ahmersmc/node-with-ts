import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  out: './drizzle',
  schema: [
    './database/schema/rolesSchema.ts',
    './database/schema/usersSchema.ts',
    './database/schema/productsSchema.ts',
    './database/schema/ordersSchema.ts',
    './database/schema/notificationsSchema.ts',
  ],
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
})
