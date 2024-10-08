import React, {useState} from 'react'
import {CustomInput} from './CustomInput'
import {IconAt, IconPassword} from '@tabler/icons-react'

type SubmitProps = {
    email: string
    password: string
}

type Props = {
    onSubmit: ({ email, password }: SubmitProps) => void
}

export const SignIn: React.FC<Props> = ({onSubmit}): React.JSX.Element => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
        onSubmit({ email, password })
    }

    return (
        <form onSubmit={handleSubmit} className="form">
            <h2>Войти</h2>
            <CustomInput
                type='email'
                label='Email'
                placeholder='Введите email'
                icon={<IconAt size="0.7em"/>}
                onChange={(e) => setEmail(e.target.value)}
            />
            <CustomInput
                type='password'
                label='Пароль'
                placeholder='Введите пароль'
                icon={<IconPassword size="0.7em"/>}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Войти</button>
        </form>
    )
}
