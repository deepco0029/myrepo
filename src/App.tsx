import React, { useCallback, useMemo, useReducer, useRef, useState } from 'react';
import Greeting from './components/Greeting';
import Wrapper from './components/Wrapper';
import Counter from './components/Counter';
import InputTest from './components/InputTest'
import UserList from './components/UserList'
import CreateUser from './components/CreateUser'


// const App = () => <Greeting name="JH" mark="KM" color="grey"/>
const json = [
    {
        id: 1,
        username: 'velopert',
        email: 'public.velopert@gmail.com',
        active: true
    },
    {
        id: 2,
        username: 'tester',
        email: 'tester@example.com',
        active: true
    },
    {
        id: 3,
        username: 'liz',
        email: 'liz@example.com',
        active: true
    }
]

const initialState = {
    inputs: {
        username: '',
        email: ''
    },
    users: [
        {
          id: 1,
          username: 'velopert',
          email: 'public.velopert@gmail.com',
          active: true
        },
        {
          id: 2,
          username: 'tester',
          email: 'tester@example.com',
          active: false
        },
        {
          id: 3,
          username: 'liz',
          email: 'liz@example.com',
          active: false
        }
      ]    
}
function activeUsers(users: any): number {
    console.log('활성유저 세는중,,,,,')
    return users.filter((user: any) => user.active).length
}

function reducer (state:any, action:any) {
    switch (action.type) {
        case 'CHANGE_INPUT' :
            return {
                ...state,
                inputs: {
                    ...state.inputs,
                    [action.name] : action.value
                }
            }
        case 'CREATE_USER':
            return {
                inputs: initialState.inputs,
                users: [...state.users, action.user]
            }
        case 'DELETE_USER':
            return {
                ...state,
                users: state.users.filter((user:any) => user.id !== action.id)
            }
        case 'TOGGLE_USER':
            return {
                users: state.users.map((user: any) => user.id === action.id ? { ...user, active: !user.active } : user)
            }
        default:
            return state
    }
}
function App() {
    const [state, dispatch] = useReducer(reducer, initialState)
    const nextId = useRef(4);

    const { users } = state;
    const { username, email } = state.inputs;
    const onChange = useCallback((e: any) => {
        const { name, value } = e.target
        dispatch({
            type: 'CHANGE_INPUT',
            name,
            value
        })
    }, [])

    const onCreate = useCallback(() => {
        dispatch({
            type: 'CREATE_USER',
            user: {
                id: nextId.current,
                username,
                email,
                active: true
            }
        })
        nextId.current += 1;
    }, [username, email])

    const onDelete = useCallback((id: number) => {
        dispatch({
            type: 'DELETE_USER',
            id
        })
    }, [])
    
    const onToggle = useCallback((id: number) => {
        alert('asdasd')
        dispatch({
            type: 'TOGGLE_USER',
            id
        })
    },[])
    // const [users, setUsers] = useState(json);
    // const [inputs, setInputs] = useState({
    //     username: '',
    //     email: ''
    // })

    // const { username, email } = inputs
    // const onChange = useCallback((e: any) => {
    //     const { value, name } = e.target
    //     setInputs(inputs => ({
    //         ...inputs,
    //         [name]: value
    //     }))
    // }, [])

    // const nextId = useRef(4);
    // const onCreate = useCallback(() => {
    //     const user = {
    //         id: nextId.current,
    //         username,
    //         email,
    //         active: true
    //     };
    //     setUsers(users => [...users, user]);
    //     setInputs({
    //         username: '',
    //         email: ''
    //     });
    //     nextId.current += 1;
    // }, [username, email])

    // const onDelete = useCallback((id: number) => {
    //     setUsers(users => users.filter(ele => ele.id != id));
    // }, [])

    // const onToggle = useCallback((id: number) => {
    //     setUsers(users =>
    //         users.map(user => user.id == id ? { ...user, active: !user.active } : user)
    //     )
    // }, [])

    // const count = useMemo(() => activeUsers(users), [users])
    return (
        <Wrapper>
            <Greeting name="JH" mark="KM" isGood={false} />
            <Greeting name="Jeonghyeon" mark="KyungMin" isGood={true} />
            <Counter />
            <InputTest />
            <CreateUser
                username={username}
                email={email}
                onChange={onChange}
                onCreate={onCreate}
            />
            <UserList users={users}
                onDelete={onDelete}
                onToggle={onToggle}
            />
            현재 활성유저: 0
        </Wrapper>
    )
}

export default App;