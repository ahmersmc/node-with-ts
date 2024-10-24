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

  rold_id: integer('role_id')
    .notNull()
    .references(() => rolesTable.id, { onDelete: 'cascade' }),

  name: varchar({ length: 255 }).notNull(),
  sid: varchar({ length: 30 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  password: varchar({ length: 20 }).notNull(),
  contact: varchar({ length: 20 }).notNull(),
  emergency_name: varchar({ length: 20 }),
  emergency_contact: varchar({ length: 20 }),
  image: text(),

  published: boolean().default(true),
  created_at: timestamp().default(sql`now()`),
  deleted_at: timestamp(),
})

export default usersTable
