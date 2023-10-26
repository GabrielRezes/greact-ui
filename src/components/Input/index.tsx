import { ChangeEvent, FC } from 'react'

import './style.css'

interface InputProps {
  type: 'text' | 'number' | 'email' | 'password'
  label: string
  value: string | number
  name: string
  placeholder: string
  error: boolean
  errorMessage?: string
  disabled?: boolean
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const Input: FC<InputProps> = ({
  type,
  label,
  value,
  name,
  placeholder,
  error,
  errorMessage,
  disabled,
  onChange,
}) => {
  return (
    <div className="input-wrapper">
      <label htmlFor={label}>{label}</label>
      <input
        type={type}
        id={label}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
      />
      {error && <p className="error">{errorMessage || 'O campo não pode estar vazio!'}</p>}
    </div>
  )
}

export default Input