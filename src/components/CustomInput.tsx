import React, {ReactElement} from 'react'


interface MainTemplateProps {
    type: string
    description?: string
    error?: string
    variant?: 'default' | 'success' | 'warning'
    radius?: '0' | '5px' | '10px' | '15px' | '20px'
    size?: 'small' | 'medium' | 'large'
    disabled?: boolean
    withAsterisk?: boolean
}

interface RadioInputs extends MainTemplateProps {
    type: 'radio'
    radioInputs: {
        legend: string
        name: string
        children: {
            span: string
            value: string | number
        }[]
    }
    label?: never
    placeholder?: never
    icon?: never
}

interface BasicInputs extends MainTemplateProps {
    type: 'text' | 'password' | 'email'
    label: string
    placeholder: string
    radioInputs?: never
    icon?: ReactElement<any, any>
}

type Props = RadioInputs | BasicInputs

export const CustomInput = ({
                                type,
                                label,
                                placeholder = '',
                                description = '',
                                error = '',
                                variant = 'default',
                                radius = '5px',
                                size = 'medium',
                                disabled = false,
                                withAsterisk = true,
                                icon,
                                radioInputs
                            }: Props) => {

    const colorVariants = {
        'default': 'lightgrey',
        'success': 'green',
        'warning': 'red'
    }

    const widthSizes = {
        'small': '40%',
        'medium': '70%',
        'large': '95%'
    }

    return (
        <div className="form-group">
            {['text', 'password', 'email'].includes(type) ?
                <>
                    <label style={{
                        width: widthSizes[size],
                    }}>
                        <span>{label} {withAsterisk && <sup style={{color: 'darkred'}}>*</sup>}</span>
                        <div className="input-container">
                            {icon && <div className="form-icon">{icon}</div>}
                            <input
                                type={type}
                                disabled={disabled}
                                required={withAsterisk}
                                placeholder={placeholder}
                                style={{
                                    borderColor: colorVariants[variant],
                                    borderRadius: radius,
                                }}
                            />
                        </div>
                    </label>
                    {description.length > 0 && <p style={{
                        width: widthSizes[size],
                    }}>{description}</p>}
                    {error.length > 0 && <p style={{
                        width: widthSizes[size],
                        color: 'red'
                    }}>{error}</p>}
                </>
                : type === 'radio' ?
                    <>
                        <fieldset style={{
                            width: widthSizes[size]
                        }}>
                            <legend>{radioInputs.legend} {withAsterisk && <sup style={{color: 'darkred'}}>*</sup>}</legend>
                            <div className="radio-group">
                                {
                                    radioInputs.children.map((item: {
                                        span: string,
                                        value: string | number
                                    }, idx: number) => (
                                        <label className="radio-label" key={idx}>
                                            <input type="radio" name={radioInputs.name} value={item.value} required={idx === 0}/>
                                            <span>{item.span}</span>
                                        </label>
                                    ))
                                }
                                {description.length > 0 && <p style={{
                                    width: widthSizes[size],
                                }}>{description}</p>}
                                {error.length > 0 && <p style={{
                                    width: widthSizes[size],
                                    color: 'red'
                                }}>{error}</p>}
                            </div>
                        </fieldset>

                    </>
                    : null
            }
        </div>
    )
}
