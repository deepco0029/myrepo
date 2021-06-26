import React, { ChangeEvent, useCallback, useMemo, useReducer, useRef, useState } from 'react'
import Greeting from './components/Greeting'
import Wrapper from './components/Wrapper'
import Counter from './components/Counter'
import InputTest from './components/InputTest'
import UserList from './components/UserList'
import CreateUser from './components/CreateUser'
import { IUserItemProps } from './components/types'
import useInputs from './hooks/useInput'

const initialState = {
  inputs: {
    username: '',
    email: '',
  },
  users: [
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
      active: true,
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
      active: false,
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
      active: false,
    },
  ],
}

const activeUsers = function (users: IUserItemProps[]): number {
  console.log('활성유저 세는중,,,,,')
  return users.filter((user: IUserItemProps) => user.active).length
}

const reducer = function (state: any, action: any) {
  switch (action.type) {
    case 'CHANGE_INPUT':
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.name]: action.value,
        },
      }
    case 'CREATE_USER':
      return {
        inputs: initialState.inputs,
        users: [...state.users, action.user],
      }
    case 'DELETE_USER':
      return {
        ...state,
        users: state.users.filter((user: IUserItemProps) => user.id !== action.id),
      }
    case 'TOGGLE_USER':
      return {
        ...state,
        users: state.users.map((user: IUserItemProps) =>
          user.id === action.id ? { ...user, active: !user.active } : user
        ),
      }
    default:
      return state
  }
}

export const UserDispatch: any = React.createContext(null)

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const { users } = state

  const count = useMemo(() => activeUsers(users), [users])
  return (
    <Wrapper>
      <Greeting name='JH' mark='KM' isGood={false} />
      <Greeting name='Jeonghyeon' mark='KyungMin' isGood={true} />
      <Counter />
      <InputTest />
      <UserDispatch.Provider value={dispatch}>
        <CreateUser />
        <UserList users={users} />
        현재 활성유저: {count}
      </UserDispatch.Provider>
    </Wrapper>
  )
}

export default App
