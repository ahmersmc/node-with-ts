import {
  boolean,
  integer,
  pgTable,
  text,
  timestamp,
  varchar,
} from 'drizzle-orm/pg-core'
import { sql } from 'drizzle-orm'
import ordersTable from './ordersSchema'

const notificationsTable = pgTable('notifications', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),

  product_id: integer('product_id')
    .notNull()
    .references(() => ordersTable.id, { onDelete: 'cascade' }),

  title: varchar({ length: 255 }).notNull(),

  published: boolean().default(true),
  created_at: timestamp().default(sql`now()`),
  deleted_at: timestamp(),
})

export default notificationsTable
