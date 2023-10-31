import s from './MiniRegister.scss'

const joinForm = [
    {
        data: [
            {
                type: 'text',
                value: 'joinFirstName',
                placeHolder: 'First Name',
                customClass: `py-2 ${s.inpStyle}`,
                required: true,
            },
            {
                type: 'text',
                value: 'joinLastName',
                placeHolder: 'Last Name',
                customClass: `py-2 ${s.inpStyle}`,
                required: true,
            },
        ]
    },
    {
        data: [
            {
                type: 'text',
                value: 'joinEmail',
                placeHolder: 'Email',
                customClass: `py-2 ${s.inpStyle}`,
            },
            {
                type: 'text',
                value: 'joinContactNum',
                placeHolder: 'Telephone Number',
                customClass: `py-2 ${s.inpStyle}`,
            },
        ]
    },
    {
        fullCol: true,
        data: [
            {
                type: 'select',
                value: 'joinMemeberType',
                placeHolder: 'Member Type',
                customClass: `${s.inpStyle} mb-0 py-2`,
                options: [
                    'Individual',
                    'Charity',
                    'Business',
                ],
            },
        ]
    }
]

export default joinForm
