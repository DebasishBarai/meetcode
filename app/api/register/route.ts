import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { email, password, name, role } = await req.json()

    const user = await prisma.user.create({
      data: {
        email,
        password,
        name,
        role
      }
    })

    return NextResponse.json({
      user: {
        email: user.email
      }
    })
  } catch (err: any) {
    return new NextResponse(
      JSON.stringify({
        error: err.message
      }),
      {
        status: 500
      }
    )
  }
}