import { useState, useCallback, ChangeEvent } from 'react'

interface IUserForm {
  username: string
  email: string
  onChange: () => void
  reset: () => void
}

const useInputs = (initalForm: any) => {
  const [form, setForm] = useState(initalForm)

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setForm((form: any) => ({ ...form, [name]: value }))
  }, [])
  const reset = useCallback(() => setForm(initalForm), [initalForm])
  return [form, onChange, reset]
}

export default useInputs
