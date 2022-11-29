import React from 'react'

interface InputProps {
     id: string
     name: string
     label: string
     type: string
     placeholder: string
     value?: string | number
     addClass?: string
     errors?: any
     onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
     onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
}

export const TextInput: React.FC<InputProps> = (props) => {
     const {
          id,
          name,
          label,
          type,
          placeholder,
          value,
          addClass,
          errors,
          onChange,
          onBlur,
     } = props
     return (
          <div className="mb-1">
               <label htmlFor={name}>{label}</label>
               <input
                    type={type}
                    name={name}
                    className={`form-control ${addClass}`}
                    id={id}
                    placeholder={placeholder}
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
               />
               {errors ? <div className="error">{errors}</div> : null}
          </div>
     )
}
