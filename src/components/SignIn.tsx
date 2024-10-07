import React from 'react'
import {CustomInput} from './CustomInput'
import {IconAt, IconPassword} from '@tabler/icons-react'


export const SignIn: React.FC = () => {
    return (
        <form action="" className="form">
            <h2>Войти</h2>
            <CustomInput
                type='email'
                label='Email'
                placeholder='Введите email'
                icon={<IconAt size="0.7em"/>}
            />
            <CustomInput
                type='password'
                label='Пароль'
                placeholder='Введите пароль'
                icon={<IconPassword size="0.7em"/>}
            />
            <button>Войти</button>
        </form>

    )
}
