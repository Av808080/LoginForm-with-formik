import { Form, Formik, Field, ErrorMessage } from 'formik'
import * as yup from 'yup';
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className=' bg-slate-50/95 shadow-2xl shadow-slate-300 rounded-2xl px-2 py-6 w-96 '>
            <Formik
                initialValues={{
                    userName: "",
                    password: ""
                }}
                validationSchema={
                    yup.object({
                        userName: yup.string().required("* این فیلد الزامی است").min(5, "* نام کاربری حداقل 5 حرف میباشد"),
                        password: yup.string().required("* این فیلد الزامی است").min(8, "* رمزعبور حداقل 8 حرف میباشد")
                    })
                }
                onSubmit={(values) => {
                    toast.success(`${values.userName} عزیز با موفقیت وارد شدید `, { theme: "colored", autoClose: 3000, position: "top-right", rtl: true })
                }
                }>
                <Form className='flex flex-col gap-3 px-4'>
                    <h1 className='text-4xl text-blue-600 my-4 font-Nunito font-bold mx-auto tracking-wider'>فرم ورود</h1>
                    <div className='flex flex-col gap-3'>
                        <Lable _for='userName' >نام کاربری</Lable>
                        <Input name='userName' />
                            <Error name="userName" />
                    </div>
                    <div className='flex flex-col gap-3'>
                        <Lable _for='password'>رمزعبور</Lable>
                        {/* <Field type="password" name="password" /> */}
                        <Input name='password' type='password' />
                            <Error name="password" />
                    </div>
                    <Link to='/SignUp' className='text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors duration-100' title='برای ساخت حساب کلیک کنید'>حساب کاربری ندارید؟</Link>
                    <div className='flex justify-around mt-6'>
                        <Button type="submit">ورود</Button>
                        <Button type='reset'>پاک کردن</Button>
                    </div>
                </Form>
            </Formik>
            <ToastContainer />
        </div>
    )
}

export default Login
type LableProps = {
    _for:string
    children:React.ReactNode
    classname?:string
}

export const Lable:React.FC<LableProps> = ({ children, _for , classname=''}) => {
    return <label htmlFor={_for} className={`${classname} opacity-60 font-bold text-xl`}>{children}</label>
}
type ButtonProps = {
    type:'submit'| 'reset'
    children:React.ReactNode
}

export const Button:React.FC<ButtonProps> = ({ type, children }) => {
    return <button className='bg-blue-600 text-lg text-slate-50 rounded-lg px-4 py-1 font-Nunito hover:bg-blue-500 transition duration-200 font-semibold ' type={type}>{children}</button>

}
type InputProps = {
    type?:'password'| 'text' | 'checkbox' 
    name:string
}
export const Input:React.FC<InputProps> = ({ name, type = 'text' }) => {
    return (
        <Field type={type} name={name} id={name} className={`${type !== 'checkbox' ? 'w-11/12 ring-1 ring-blue-500 focus:ring-2' : 'accent-indigo-600'} block  rounded-lg focus:outline-none px-3 py-0.5`} />
    )
}
type ErrorProps = {
    name:string
}
export const Error:React.FC <ErrorProps> = ({ name }) => {
    return (
        <p className='h-6'>
        <ErrorMessage name={name} className="text-red-500 text-xs" component="span" />
        </p>
    )
}