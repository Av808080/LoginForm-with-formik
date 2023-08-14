import {FC , ReactNode} from 'react'

interface HeaderProps {
    children:ReactNode
}

const Header:FC<HeaderProps> = ({children}) => {
    return (
        <h1 className='text-4xl text-blue-600 my-4 font-Nunito font-bold mx-auto tracking-wider'>{children}</h1>

    )
}

export default Header
