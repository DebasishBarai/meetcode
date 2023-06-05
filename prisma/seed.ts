
import { PrismaClient, Role } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const user = await prisma.user.upsert({
    where: { email: 'testuser@test.com' },
    update: {},
    create: {
      email: 'testuser@test.com',
      name: 'Test User',
      password: `pword1234`,
      role: Role.ADMIN,
    }
  })
//   console.log({ user })
}
main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })