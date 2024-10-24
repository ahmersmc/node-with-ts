import {
  boolean,
  integer,
  pgTable,
  text,
  timestamp,
  varchar,
} from 'drizzle-orm/pg-core'
import { sql } from 'drizzle-orm'

import rolesTable from '@/schema/rolesSchema'

const usersTable = pgTable('users', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),

  name: varchar({ length: 255 }).notNull(),
  about: text(),
  image: text(),
  age: integer().notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  rold_id: integer('role_id')
    .notNull()
    .references(() => rolesTable.id, { onDelete: 'cascade' }),

  published: boolean().default(true),
  created_at: timestamp().default(sql`now()`),
  deleted_at: timestamp(),
})

export default usersTable
