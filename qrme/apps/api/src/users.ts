export interface IUser {
    id: number
    name: string
    owner: boolean
    email: string
}

export const users: IUser[] = [
    {
        id: 1,
        name: 'Aleksandar Dordevic',
        owner: false,
        email: 'alex@gmail.com'
    },
    {
        id: 2,
        name: 'Aleksandar Dordevic2',
        owner: false,
        email: 'alex@gmail.com'
    },
    {
        id: 3,
        name: 'Aleksandar Dordevic3',
        owner: false,
        email: 'alex@gmail.com'
    },

    {
        id: 4,
        name: 'Aleksandar Dordevic4',
        owner: true,
        email: 'alex@gmail.com'
    },
    {
        id: 5,
        name: 'Aleksandar Dordevic5',
        owner: true,
        email: 'alex5@gmail.com'
    },
]