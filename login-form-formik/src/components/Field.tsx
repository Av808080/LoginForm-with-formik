import { ReactNode, FC } from 'react'
import { ErrorMessage, Field } from 'formik'

interface InputProps {
    name: string
    children: ReactNode
    type?: 'text' | 'password' | 'checkbox' | 'email'
    classname?: string

}
const Input: FC<InputProps> = ({ name, children, type = 'text', classname = '' }) => {
    return (
        <>
            <label htmlFor={name} className={`${classname} opacity-60 font-bold text-xl`}>
                {children}</label>
            <Field type={type} name={name} id={name}
                className={`${type !== 'checkbox' ? 'w-11/12 ring-1 ring-blue-500 focus:ring-2'
                    : 'accent-indigo-600'} block  rounded-lg focus:outline-none px-3 py-0.5`} />
            <p className='h-6'>
                <ErrorMessage name={name} className="text-red-500 text-xs" component="span" />
            </p>
        </>
    )
}

export default Input

// type LableProps = {
//     _for: string
//     children: React.ReactNode
//     classname?: string
// }

// const Lable: React.FC<LableProps> = ({ children, _for, classname = '' }) => {
//     return <label htmlFor={_for} className={`${classname} opacity-60 font-bold text-xl`}>{children}</label>
// }
// type InputProps = {
//     type?: 'password' | 'text' | 'checkbox'
//     name: string
// }
// export const _Input: React.FC<InputProps> = ({ name, type = 'text' }) => {
//     return (
//         <Field type={type} name={name} id={name} className={`${type !== 'checkbox' ? 'w-11/12 ring-1 ring-blue-500 focus:ring-2' : 'accent-indigo-600'} block  rounded-lg focus:outline-none px-3 py-0.5`} />
//     )
// }


// type ErrorProps = {
//     name: string
// }


// const Error: React.FC<ErrorProps> = ({ name }) => {
//     return (
//         <p className='h-6'>
//             <ErrorMessage name={name} className="text-red-500 text-xs" component="span" />
//         </p>
//     )
// }