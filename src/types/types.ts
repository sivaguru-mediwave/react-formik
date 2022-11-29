export type FriendsArray =  {
    name: string
    email: string
    includeAge: boolean
    age: number | string | undefined
}

export type FormValues =  {
    firstName: string
    email: string
    mobileNumber: string
    dataBirth: any
    password: string
    confirmPassword: string
    profession: string
    friends: FriendsArray[]
}