import { eq } from 'drizzle-orm'

import db from '@/database/drizzle'
import usersTable from '@/database/schema/usersSchema'
import rolesTable from '@/database/schema/rolesSchema'

class AuthModal {
  static getUserByEmail = (email: string) =>
    db.select().from(usersTable).where(eq(usersTable.email, email))

  static createUser = (user: typeof usersTable.$inferInsert) =>
    // db.insert(usersTable).values(user).returning()
    db.insert(rolesTable).values({ name: 'teasddddstx' })
    // db.select().from(rolesTable)
}

export default AuthModal
