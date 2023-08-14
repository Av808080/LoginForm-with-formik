import { ReactNode, FC } from 'react'
interface ContainerProps {
    children: ReactNode
}

const Container: FC<ContainerProps> = ({ children }) => {
    return (
        <div className=' bg-slate-50/95 shadow-2xl shadow-slate-300 rounded-2xl px-2 py-6 w-96 '>
            {children}
        </div>
    )
}

export default Container
