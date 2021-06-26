import { ChangeEvent } from 'react'

type onIdEvent = (id: number) => void
type onChengEvent = (e: ChangeEvent<HTMLInputElement>) => void
type onVoidEvent = () => void

export interface IUsersProps {
  users: IUserItemProps[]
  // onDelete: onIdEvent
  // onToggle: onIdEvent
}

export interface IUserProps {
  user: IUserItemProps
  // onDelete: onIdEvent
  // onToggle: onIdEvent
}

export interface IUserDefaultProps {
  username: string
  email: string
  onChange: onChengEvent
  onCreate: onVoidEvent
}

export interface IUserItemProps extends Partial<IUserDefaultProps> {
  id: number
  active: boolean
}
