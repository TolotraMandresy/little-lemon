import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import Authentification from "../../layout/Authentification/Authentification"
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik"

export default function Login() {
    return (
        <Authentification>
            <div className="flex flex-col h-full border border-2 border-blue-900">
                <h1 className="w-full text-center text-4xl text-c-yellow">Sign In</h1>

                <Formik
                    initialValues={{ email: '', password: '' }}

                    validate={values => {
                        const error = {} as { [key: string]: string };

                        (Object.keys(values) as unknown as ('email' | 'password')[]).forEach((input) => {
                            if (!values[input])
                                error[input] = "It is required!"
                            else if (input == "email" && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email))
                                error.email = "Invalid email address"
                        })

                        return error
                    }}

                    onSubmit={(values: { email: string; password: string; }, formikHelpers: FormikHelpers<{ email: string; password: string; }>) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            formikHelpers.setSubmitting(false);
                        }, 400);
                    }}>

                    {({ isSubmitting }) => (
                        <Form className="flex flex-col">
                            <label htmlFor="Email" htmlFor="emailIpt">Email</label>
                            <Field type="email" name="emailIpt" id="emailIpt"/>
                            <ErrorMessage name="email" component="p"/>
                            <Field type="password" name="password" />
                            <ErrorMessage name="password" component="p"/>
                            <PrimaryButton label="Sign In" type="submit" disabled={isSubmitting}/>
                        </Form>
                    )}
                </Formik>

            </div>
        </Authentification>
    )
}