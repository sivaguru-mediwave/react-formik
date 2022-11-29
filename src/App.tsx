import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {
     useFormik,
     FormikProps,
     FieldArray,
     ErrorMessage,
     FormikProvider,
} from 'formik'
import { TextInput, DatePickerInput } from './components/form'
import { Button } from './components/ui/index'
import moment from 'moment'
import { FormValues } from './types/types'
import { FormSchema } from './schema/ValidationSchema'

function App() {
     const professions = ['Developer', 'Designer', 'Other']
     const myValues: FormValues = {
          firstName: '',
          email: '',
          mobileNumber: '',
          dataBirth: '',
          password: '',
          confirmPassword: '',
          profession: '',
          friends: [
               {
                    name: '',
                    email: '',
                    includeAge: false,
                    age: '',
               },
          ],
     }
     const formik: FormikProps<FormValues> = useFormik<FormValues>({
          initialValues: myValues,
          validationSchema: FormSchema,
          onSubmit: (values: FormValues, actions: any) => {
               console.log({ values, actions })
               console.log('formik', formik)
               alert(JSON.stringify(values, null, 2))
          },
     })

     return (
          <div className="App">
               <header className="App-header">
                    <h1>React Formik</h1>

                    <form onSubmit={formik.handleSubmit}>
                         <div className="grid">
                              <TextInput
                                   id="firstName"
                                   name="firstName"
                                   type="text"
                                   placeholder="Enter the user name"
                                   label="User name"
                                   value={formik.values.firstName}
                                   onChange={formik.handleChange}
                                   onBlur={formik.handleBlur}
                                   errors={
                                        formik.errors.firstName &&
                                        formik.touched.firstName
                                             ? formik.errors.firstName
                                             : null
                                   }
                              />
                         </div>
                         <div className="grid grid-cols-2 gap-4 mb-2">
                              <TextInput
                                   id="email"
                                   name="email"
                                   type="email"
                                   placeholder="Enter the email address"
                                   label="Email Address"
                                   value={formik.values.email}
                                   onChange={formik.handleChange}
                                   onBlur={formik.handleBlur}
                                   errors={
                                        formik.errors.email &&
                                        formik.touched.email
                                             ? formik.errors.email
                                             : null
                                   }
                              />
                              <TextInput
                                   id="mobileNumber"
                                   name="mobileNumber"
                                   type="text"
                                   placeholder="Enter the your mobile number"
                                   label="Mobile number"
                                   value={formik.values.mobileNumber}
                                   onChange={formik.handleChange}
                                   onBlur={formik.handleBlur}
                                   errors={
                                        formik.errors.mobileNumber &&
                                        formik.touched.mobileNumber
                                             ? formik.errors.mobileNumber
                                             : null
                                   }
                              />
                         </div>
                         <div>
                              <DatePickerInput
                                   label="Date of birth"
                                   name="dataBirth"
                                   id="dataBirth"
                                   selected={
                                        (formik.values.dataBirth &&
                                             new Date(
                                                  formik.values.dataBirth
                                             )) ||
                                        null
                                   }
                                   placeholderText="Select the Date of birth"
                                   maxDate={new Date()}
                                   dateFormat="dd/MM/yyyy"
                                   onChange={(date: Date) =>
                                        formik.setFieldValue(
                                             'dataBirth',
                                             moment(date).format('YYYY-MM-DD')
                                        )
                                   }
                                   onBlur={() => {
                                        formik.setTouched({
                                             ...formik.touched,
                                             dataBirth: true,
                                        })
                                   }}
                              />
                              {formik.errors.email &&
                                   formik.touched.dataBirth && (
                                        <div className="error">
                                             {formik.errors.email}
                                        </div>
                                   )}
                         </div>
                         <div className="grid grid-cols-2 gap-4 mb-2">
                              <TextInput
                                   id="password"
                                   type="password"
                                   label="Password"
                                   name="password"
                                   placeholder="Please enter your password"
                                   onChange={formik.handleChange}
                                   onBlur={formik.handleBlur}
                                   value={formik.values.password}
                                   errors={
                                        formik.touched.password &&
                                        formik.errors.password
                                             ? formik.errors.password
                                             : null
                                   }
                              />
                              <TextInput
                                   id="confirmPassword"
                                   type="password"
                                   label="Confirm password"
                                   name="confirmPassword"
                                   placeholder="Please enter your confirm password"
                                   onChange={formik.handleChange}
                                   onBlur={formik.handleBlur}
                                   value={formik.values.confirmPassword}
                                   errors={
                                        formik.touched.confirmPassword &&
                                        formik.errors.confirmPassword
                                             ? formik.errors.confirmPassword
                                             : null
                                   }
                              />
                         </div>
                         <div className="mb-4">
                              <label htmlFor="profession">Profession</label>
                              <select
                                   name="profession"
                                   id="profession"
                                   className="form-control"
                                   onChange={formik.handleChange}
                                   onBlur={formik.handleBlur}
                                   value={formik.values.profession}
                              >
                                   <option value="" selected disabled>
                                        Choose your option
                                   </option>
                                   {professions.map((profession, index) => (
                                        <option value={profession} key={index}>
                                             {profession}
                                        </option>
                                   ))}
                              </select>
                              {formik.touched.profession &&
                                   formik.errors.profession && (
                                        <div className="error">
                                             {formik.errors.profession}
                                        </div>
                                   )}
                         </div>
                         <FormikProvider value={formik}>
                              <FieldArray
                                   name="friends"
                                   render={({
                                        move,
                                        swap,
                                        push,
                                        insert,
                                        unshift,
                                        pop,
                                        remove,
                                   }) => (
                                        <div>
                                             {formik.values.friends.length >
                                                  0 &&
                                                  formik.values.friends.map(
                                                       (friend, index) => (
                                                            <div
                                                                 key={index}
                                                                 className="p-2 border"
                                                            >
                                                                 <div className="grid grid-cols-2 gap-4">
                                                                      <div>
                                                                           <TextInput
                                                                                id={`friends.${index}.name`}
                                                                                name={`friends.${index}.name`}
                                                                                type="text"
                                                                                placeholder="Enter the name"
                                                                                label="Name"
                                                                                value={
                                                                                     formik
                                                                                          .values
                                                                                          .friends[
                                                                                          index
                                                                                     ]
                                                                                          .name
                                                                                }
                                                                                onChange={
                                                                                     formik.handleChange
                                                                                }
                                                                                onBlur={
                                                                                     formik.handleBlur
                                                                                }
                                                                           />
                                                                           <ErrorMessage
                                                                                component="div"
                                                                                className="error"
                                                                                name={`friends.${index}.name`}
                                                                           />
                                                                      </div>
                                                                      <div>
                                                                           <TextInput
                                                                                id={`friends.${index}.email`}
                                                                                name={`friends.${index}.email`}
                                                                                type="email"
                                                                                placeholder="Enter the your email"
                                                                                label="Email"
                                                                                value={
                                                                                     formik
                                                                                          .values
                                                                                          .friends[
                                                                                          index
                                                                                     ]
                                                                                          .email
                                                                                }
                                                                                onChange={
                                                                                     formik.handleChange
                                                                                }
                                                                                onBlur={
                                                                                     formik.handleBlur
                                                                                }
                                                                           />
                                                                           <ErrorMessage
                                                                                component="div"
                                                                                className="error"
                                                                                name={`friends.${index}.email`}
                                                                           />
                                                                      </div>
                                                                 </div>
                                                                 <div className="grid grid-cols-2">
                                                                      <div>
                                                                           <input
                                                                                type="checkbox"
                                                                                name={`friends.${index}.includeAge`}
                                                                                id={`friends.${index}.includeAge`}
                                                                                checked={
                                                                                     formik
                                                                                          .values
                                                                                          .friends[
                                                                                          index
                                                                                     ]
                                                                                          .includeAge
                                                                                }
                                                                                onChange={() => {
                                                                                     console.log(
                                                                                          formik
                                                                                               .values
                                                                                               .friends[
                                                                                               index
                                                                                          ]
                                                                                               .includeAge
                                                                                     )
                                                                                     formik.setFieldValue(
                                                                                          `friends.${index}.includeAge`,
                                                                                          !formik
                                                                                               .values
                                                                                               .friends[
                                                                                               index
                                                                                          ]
                                                                                               .includeAge
                                                                                     )
                                                                                }}
                                                                           />
                                                                           <label>
                                                                                Include
                                                                                Age
                                                                           </label>
                                                                      </div>
                                                                 </div>
                                                                 <div className="grid grid-cols-1">
                                                                      <div>
                                                                           {formik
                                                                                .values
                                                                                .friends[
                                                                                index
                                                                           ]
                                                                                .includeAge ===
                                                                                true && (
                                                                                <div className="col-sm-6">
                                                                                     <TextInput
                                                                                          id={`friends.${index}.age`}
                                                                                          name={`friends.${index}.age`}
                                                                                          type="number"
                                                                                          placeholder="Enter the age"
                                                                                          label="Age"
                                                                                          value={
                                                                                               formik
                                                                                                    .values
                                                                                                    .friends[
                                                                                                    index
                                                                                               ]
                                                                                                    .age
                                                                                          }
                                                                                          onChange={(
                                                                                               e: any
                                                                                          ) =>
                                                                                               formik.setFieldValue(
                                                                                                    `friends.${index}.age`,
                                                                                                    e
                                                                                                         .target
                                                                                                         .value
                                                                                               )
                                                                                          }
                                                                                          onBlur={
                                                                                               formik.handleBlur
                                                                                          }
                                                                                     />
                                                                                     <ErrorMessage
                                                                                          component="div"
                                                                                          className="error"
                                                                                          name={`friends.${index}.age`}
                                                                                     />
                                                                                </div>
                                                                           )}
                                                                      </div>
                                                                 </div>

                                                                 <div className="flex justify-end">
                                                                      <Button
                                                                           onClick={() =>
                                                                                remove(
                                                                                     index
                                                                                )
                                                                           }
                                                                           type="button"
                                                                           addClass="btn-primary"
                                                                           label="Remove"
                                                                      />
                                                                 </div>
                                                            </div>
                                                       )
                                                  )}
                                             <div className="flex justify-end">
                                                  <Button
                                                       onClick={() =>
                                                            push({
                                                                 name: '',
                                                                 email: '',
                                                                 includeAge:
                                                                      false,
                                                                 age: '',
                                                            })
                                                       }
                                                       type="button"
                                                       addClass="btn-border-color text-white"
                                                       label="Add list"
                                                  />
                                             </div>
                                        </div>
                                   )}
                              />
                         </FormikProvider>
                         <div className="flex justify-between">
                              <Button
                                   type="button"
                                   addClass="btn-danger m-3"
                                   label="Reset"
                                   onClick={() => formik.resetForm()}
                              />
                              <Button
                                   type="submit"
                                   addClass="btn-primary m-3"
                                   label="Save"
                              />
                         </div>
                         <pre>{JSON.stringify(formik, null, 4)}</pre>
                    </form>
               </header>
          </div>
     )
}

export default App
