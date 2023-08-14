import { Form, Formik } from 'formik'
import * as yup from 'yup'
import { Button } from '../components/Button'
import Input from '../components/Field';
import Container from '../components/Container';
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom'
import Header from '../components/Header';
const SignUp = () => {
    const navigate = useNavigate()
    const validationSchema = yup.object({
        userName: yup.string().required("* این فیلد الزامی است").min(5, "* نام کاربری باید حداقل 5 حرف باشد"),
        email: yup.string().email('*فرمت ایمیل را به درستی وارد کنید').required("* این فیلد الزامی است"),
        password: yup.string().min(8,).required("* این فیلد الزامی است"),
        confirmPassword: yup.string().required("* این فیلد الزامی است").oneOf([yup.ref('password')], "* رمزعبور مطاقبت ندارد"),
        acceptTerms: yup.boolean().isTrue('* قوانین امنیتی را بپذیرید')
    })
    const initialValue = {
        userName: "",
        email: '',
        password: '',
        confirmPassword: '',
        acceptTerms: false
    }
    return (
        <Container>
            <ToastContainer />
            <Formik
                initialValues={initialValue}
                onSubmit={(values) => {
                    setTimeout(() => {
                        navigate('/', { replace: true })
                    }, 3000)
                    toast.success(`${values.userName} عزیز حساب شما با موفقیت ساخته شد `, { theme: "colored", autoClose: 3000, position: "top-right", rtl: true })

                }}
                validationSchema={validationSchema}
            >
                <Form className='flex flex-col gap-2 w-96 px-4'>
                    <Header>ثبت نام</Header>
                    <Input name='userName'  >نام کاربری</Input>
                    <Input name='email' type='email'  >ایمیل</Input>
                    <Input name='password' type='password'>رمزعبور</Input>
                    <Input name='confirmPassword' type='password'>تکرار رمزعبور</Input>
                    <div className='flex gap-2 my-1'>
                        <Input type='checkbox' name='acceptTerms' classname='text-[12px]'>تمام قوانین مربوطه را میپذیرم</Input>
                    </div>
                    <div className='flex justify-around my-2'>
                        <Button type='submit'>ساخت حساب</Button>
                        <Link to='/' className='bg-slate-50 ring-1 ring-blue-600 hover:bg-blue-600 hover:text-slate-50 font-Nunito transition text-lg duration-200 rounded-lg font-semibold text-blue-600 px-4 py-0.5'>صفحه ورود</Link>
                    </div>
                </Form>
            </Formik>
        </Container>)
}

export default SignUp
