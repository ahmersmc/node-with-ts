import { eq } from 'drizzle-orm'

import db from '@/database/drizzle'
import rolesTable from '@/database/schema/rolesSchema'

class RoleModal {
  static getRoles = () => db.select().from(rolesTable)

  static getRoleByName = (name: string) =>
    db.select().from(rolesTable).where(eq(rolesTable.name, name))

  static createRole = (role: typeof rolesTable.$inferInsert) =>
    db.insert(rolesTable).values(role).returning({ id: rolesTable.id })
}

export default RoleModal
