import { isTypeOf } from '@/utils/zod'
import { z } from 'zod'

const SelectableUserSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string(),
})
const InsertableUserSchema = z.object({
  id: z.number().optional(),
  name: z.string(),
  email: z.string(),
})
const UpdatableUserSchema = SelectableUserSchema

export type SelectableUser = z.infer<typeof SelectableUserSchema>
export type InsertableUser = z.infer<typeof InsertableUserSchema>
export type UpdatableUser = z.infer<typeof UpdatableUserSchema>

export const isSelectableUser = isTypeOf(SelectableUserSchema)
export const isInsertableUser = isTypeOf(InsertableUserSchema)
export const isUpdatableUser = isTypeOf(UpdatableUserSchema)
