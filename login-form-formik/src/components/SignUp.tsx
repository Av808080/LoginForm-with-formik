import { Form, Formik } from 'formik'
import * as yup from 'yup'
import { Input, Button, Error, Lable } from './Login'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom'
const SignUp = () => {
    const navigate = useNavigate()
    return (
        <div className='bg-slate-50/95 shadow-2xl rounded-2xl px-2 py-4'>
            <ToastContainer />
            <Formik
                initialValues={{
                    userName: "",
                    email: '',
                    password: '',
                    confirmPassword: '',
                    acceptTerms: false
                }}
                onSubmit={(values) => {
                    setTimeout(() => {
                        navigate('/', { replace: true })
                    }, 3000)
                    toast.success(`${values.userName} عزیز حساب شما با موفقیت ساخته شد `, { theme: "colored", autoClose: 3000, position: "top-right", rtl: true})

                }}
                validationSchema={yup.object({
                    userName: yup.string().required("* این فیلد الزامی است").min(5, "* نام کاربری باید حداقل 5 حرف باشد"),
                    email: yup.string().email('فرمت ایمیل را به درستی وارد کنید').required("* این فیلد الزامی است"),
                    password: yup.string().min(8,).required("* این فیلد الزامی است"),
                    confirmPassword: yup.string().required("* این فیلد الزامی است").oneOf([yup.ref('password')], "رمزعبور مطاقبت ندارد"),
                    acceptTerms: yup.boolean().isTrue('قوانین امنیتی را بپذیرید')
                })}
            >
                <Form className='flex flex-col gap-2 w-96 px-4'>
                    <h1 className='text-blue-600 text-4xl my-4 font-Nunito font-bold mx-auto tracking-wider'>ثبت نام</h1>
                    <Lable _for='userName'>نام کاربری</Lable>
                    <Input name='userName' />
                    <Error name='userName' />
                    <Lable _for='email'>ایمیل</Lable>
                    <Input name='email' />
                    <Error name='email' />
                    <Lable _for='password'>رمزعبور</Lable>
                    <Input name='password' type='password' />
                    <Error name='password' />
                    <Lable _for='confirmPassword'>تکرار رمزعبور</Lable>
                    <Input name='confirmPassword' type='password' />
                    <Error name='confirmPassword' />
                    <div className='flex gap-2 my-1'>
                        <Lable _for='acceptTerms' classname='text-[12px]'>تمام قوانین مربوطه را میپذیرم</Lable>
                        <Input name='acceptTerms' type='checkbox' />
                        <Error name='acceptTerms' />
                    </div>
                    <div className='flex justify-around my-2'>
                        <Button type='submit'>ساخت حساب</Button>
                        <Link to='/' className='bg-slate-50 ring-1 ring-blue-600 hover:bg-blue-600 hover:text-slate-50 font-Nunito transition text-lg duration-200 rounded-lg font-semibold text-blue-600 px-4 py-0.5'>صفحه ورود</Link>
                    </div>
                </Form>
            </Formik>
        </div>
    )
}

export default SignUp
