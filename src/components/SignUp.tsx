import React, {useState} from 'react'
import {CustomInput} from './CustomInput'
import {IconAt, IconPassword, IconUser} from '@tabler/icons-react'

type SubmitProps = {
    name: string
    nickname: string
    email: string
    gender: string
    password: string
    repeatPassword: string
}

type Props = {
    onSubmit: ({ name, nickname, email, gender, password, repeatPassword }: SubmitProps) => void
}

export const SignUp: React.FC<Props> = ({onSubmit}): React.JSX.Element => {
    const [name, setName] = useState<string>('')
    const [nickname, setNickname] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [repeatPassword, setRepeatPassword] = useState<string>('')
    const [gender, setGender] = useState<string>('')

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
        onSubmit({ name, nickname, email, gender, password, repeatPassword })
    }

    return (
        <form onSubmit={handleSubmit} className="form">
            <h2>Регистрация</h2>
            <CustomInput
                type='text'
                label='Имя'
                withAsterisk={false}
                description="Disabled"
                disabled={true}
                placeholder='Введите имя'
                icon={<IconUser size="0.7em"/>}
                onChange={(e) => setName(e.target.value)}
            />

            <CustomInput
                type='text'
                label='Ник'
                placeholder='Введите ник'
                withAsterisk={false}
                icon={<IconUser size="0.7em"/>}
                onChange={(e) => setNickname(e.target.value)}
            />

            <CustomInput
                type='text'
                label='Email'
                placeholder='Введите email'
                icon={<IconAt size="0.7em"/>}
                onChange={(e) => setEmail(e.target.value)}
            />


            <CustomInput
                type='radio'
                withAsterisk={true}
                radioInputs={{
                    legend: 'Ваш пол',
                    name: 'gender',
                    children: [
                        {span: 'Женский', value: 'female'},
                        {span: 'Мужской', value: 'male'},
                        {span: 'Другой', value: 'other'}
                    ]
                }}
                onChange={(e) => setGender(e.target.value)}
            />

            <CustomInput
                type='password'
                label='Пароль'
                placeholder='Введите пароль'
                icon={<IconPassword size="0.7em"/>}
                onChange={(e) => setPassword(e.target.value)}
            />

            <CustomInput
                type='password'
                label='Подтверждение пароля'
                placeholder='Повторите пароль'
                icon={<IconPassword size="0.7em"/>}
                onChange={(e) => setRepeatPassword(e.target.value)}
            />

            <button type="submit">Войти</button>
        </form>
    )
}
