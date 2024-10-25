import { sql } from 'drizzle-orm'
import { boolean, integer, pgTable, timestamp } from 'drizzle-orm/pg-core'

import usersTable from '@/schema//usersSchema'
import productsTable from '@/schema//productsSchema'

const ordersTable = pgTable('orders', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),

  user_id: integer('user_id')
    .notNull()
    .references(() => usersTable.id, { onDelete: 'cascade' }),
  product_id: integer('product_id')
    .notNull()
    .references(() => productsTable.id, { onDelete: 'cascade' }),

  price: integer(),
  quantity: integer('quantity'),
  pending: boolean().default(true).notNull(),
  fulfilled: boolean().default(false).notNull(),

  published: boolean().default(true),
  created_at: timestamp().default(sql`now()`),
  deleted_at: timestamp(),
})

export default ordersTable
