import { Form, Formik } from 'formik'
import * as yup from 'yup';
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import Container from '../components/Container';
import Input from '../components/Field';
import { Button } from '../components/Button';
import Header from '../components/Header';

const Login = () => {
    return (
        <Container>
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
                    <Header>فرم ورود</Header>
                    <div className='flex flex-col gap-3'>
                     <Input name='userName'  >نام کاربری</Input>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <Input name='password' type='password'>رمزعبور</Input>
                    </div>
                    <Link to='/SignUp' className='text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors duration-100' title='برای ساخت حساب کلیک کنید'>حساب کاربری ندارید؟</Link>
                    <div className='flex justify-around mt-6'>
                        <Button type="submit">ورود</Button>
                        <Button type='reset'>پاک کردن</Button>
                    </div>
                </Form>
            </Formik>
            <ToastContainer />
        </Container>
    )
}

export default Login



