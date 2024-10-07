import React from 'react'
import {CustomInput} from './CustomInput'
import {IconAt, IconPassword, IconUser} from '@tabler/icons-react'


export const SignUp: React.FC = () => {
    return (
        <form action="" className="form">
            <h2>Регистрация</h2>
            <CustomInput
                type='text'
                label='Имя'
                withAsterisk={false}
                description="Disabled"
                disabled={true}
                placeholder='Введите имя'
                icon={<IconUser size="0.7em"/>}
            />

            <CustomInput
                type='text'
                label='Ник'
                placeholder='Введите ник'
                withAsterisk={false}
                icon={<IconUser size="0.7em"/>}
            />

            <CustomInput
                type='text'
                label='Email'
                placeholder='Введите email'
                icon={<IconAt size="0.7em"/>}
            />


            <CustomInput
                type='radio'
                withAsterisk={true}
                radioInputs={{
                    legend: 'Ваш пол',
                    name: 'sex',
                    children: [
                        {span: 'Женский', value: 'female'},
                        {span: 'Мужской', value: 'male'},
                        {span: 'Другой', value: 'other'}
                    ]
                }}
            />

            <CustomInput
                type='password'
                label='Пароль'
                placeholder='Введите пароль'
                icon={<IconPassword size="0.7em"/>}
            />

            <CustomInput
                type='password'
                label='Подтверждение пароля'
                placeholder='Повторите пароль'
                icon={<IconPassword size="0.7em"/>}
            />

            <button type="submit">Войти</button>
        </form>
    )
}
