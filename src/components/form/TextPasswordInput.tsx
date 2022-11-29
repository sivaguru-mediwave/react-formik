import React, { useState } from 'react'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'

interface TextPasswordInputProps {
     style?: string
     text?: string
     placeholder?: string
     disabled?: boolean
     label?: string
     type: string
     name?: string
     addClass?: string
     values?: string | number
     onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
     onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
     errors?: string | null
}

const TextPasswordInput: React.FC<TextPasswordInputProps> = ({
     label,
     placeholder,
     style,
     disabled,
     type,
     onChange,
     addClass,
     name,
     errors,
     onBlur,
     values,
}) => {
     const [passwordShown, setPasswordShown] = useState(false)

     const togglePasswordVisiblity = () => {
          setPasswordShown(!passwordShown)
     }

     return (
          <div>
               <div className="input-group ">
                    {label && <label htmlFor="">{label}</label>}
                    <div className="pass-wrapper">
                         <input
                              type={passwordShown ? 'text' : 'password'}
                              className="form-control"
                              placeholder={placeholder}
                              onChange={onChange}
                              disabled={disabled}
                              name={name}
                              onBlur={onBlur}
                              value={values}
                         />
                         {passwordShown ? (
                              <i
                                   className="toggle-pass-icon"
                                   onClick={togglePasswordVisiblity}
                              >
                                   <AiFillEye />
                              </i>
                         ) : (
                              <i
                                   className="toggle-pass-icon"
                                   onClick={togglePasswordVisiblity}
                              >
                                   <AiFillEyeInvisible />
                              </i>
                         )}
                    </div>
                    {errors && <div className="form-error-msg">{errors}</div>}
               </div>
          </div>
     )
}

export default React.memo(TextPasswordInput)
