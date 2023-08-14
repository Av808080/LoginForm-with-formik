import { FC, ReactNode } from 'react';
interface ButtonProps {
    type: 'submit' | 'reset'
    children: ReactNode
}

export const Button: FC<ButtonProps> = ({ type, children }) => {
    return <button className='bg-blue-600 text-lg text-slate-50 rounded-lg px-4 py-1 font-Nunito hover:bg-blue-500 transition duration-200 font-semibold ' type={type}>{children}</button>
}