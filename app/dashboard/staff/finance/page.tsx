import React from 'react'
import prisma from '@/lib/prisma'

// Example server action for creating a saving record (App Router server action)
export async function createSavingAction(userId: string) {
  'use server'
  return await prisma.savings.create({ data: { userId, balance: 0 } })
}

export default async function StaffFinance() {
  return (
    <section className="p-6">
      <h3 className="text-xl font-semibold">Staff Finance</h3>
      <p className="mt-2">Staff interface to manage finance operations</p>
    </section>
  )
}
