import { Form, Formik, Field, ErrorMessage } from 'formik'
import { toast, ToastContainer } from 'react-toastify'
import * as yup from 'yup';
import 'react-toastify/dist/ReactToastify.css';

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
                        <Lable text='نام کاربری' _for='userName' />
                        <Input name='userName' />
                        <p className='h-6 '>
                            <Error name="userName" />
                        </p>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <Lable _for='password' text="رمزعبور" />
                        {/* <Field type="password" name="password" /> */}
                        <Input name='password' />
                        <p className='h-6'>
                            <Error name="password" />
                        </p>
                    </div>
                    <a href='/' className='text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors duration-100' title='برای ساخت حساب کلیک کنید'>حساب کاربری ندارید؟</a>
                    <div className='flex justify-around mt-6'>
                        <Button type="submit" text="ورود"></Button>
                        <Button type='reset' text='پاک کردن'></Button>
                    </div>
                </Form>
            </Formik>
            <ToastContainer />
        </div>
    )
}

export default Login

const Lable = ({ text, _for }: any) => {
    return <label htmlFor={_for} className='opacity-70 font-bold text-xl'>{text}</label>

}

const Button = ({ type, text }: any) => {
    return <button className='bg-blue-600 text-lg text-slate-50 rounded-lg px-4 py-1 font-Nunito hover:bg-blue-500 transition duration-200 font-semibold ' type={type}>{text}</button>

}
const Input = ({ name }: any) => {
    return (
        <Field name={name} className="w-11/12 block  rounded-lg focus:outline-none px-3 py-0.5 ring-1 ring-blue-500 focus:ring-2" />
    )
}
const Error = ({ name }: any) => {
    return (
        <ErrorMessage name={name} className="text-red-500 text-xs" component="span" />
    )
}