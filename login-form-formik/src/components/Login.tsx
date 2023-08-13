import { Form, Formik, Field, ErrorMessage } from 'formik'
import { toast, ToastContainer } from 'react-toastify'
import * as yup from 'yup';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    return (
        <>
            <Formik
                initialValues={{
                    userName: "",
                    password: ""
                }}
                validationSchema={
                    yup.object({
                        userName: yup.string().required("این فیلد الزامی است").min(5, "نام کاربری حداقل 5 حرف میباشد"),
                        password: yup.string().required("این فیلد الزامی است").min(8, "نام کاربری حداقل 8 حرف میباشد")
                    })
                }
                onSubmit={(values) => {
                    toast.success(`${values.userName} عزیز با موفقیت وارد شدید `, { theme: "colored", autoClose: 3000, position: "top-right", rtl: true })
                }
                }>
                <Form>
                    <label htmlFor="userName">نام کاربری</label>
                    <Field name="userName" />
                    <ErrorMessage name="userName" component="p" />
                    <label htmlFor="userName">رمزعبور</label>
                    <Field type="password" name="password" />
                    <ErrorMessage name="password" component="p" />
                    <button type='submit'>ورود</button>
                    <button type='reset'>پاک کردن</button>
                </Form>
            </Formik>
            <ToastContainer />

        </>
    )
}

export default Login
