import AuthButton from "../../components/AuthButton/AuthButton";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import Authentification from "../../layout/Authentification/Authentification"
import { Field, Form, Formik, FormikHelpers } from "formik"

export default function Login() {
    return (
        <Authentification>
            <div className="flex flex-col h-full justify-evenly gap-8 py-4">
                <h1 className="w-full text-center text-4xl text-c-yellow self-start">Sign In</h1>

                <div className="flex flex-col">
                    <Formik
                        initialValues={{ email: '', password: '' }}

                        validateOnBlur={true}
                        validateOnChange={false}

                        validate={values => {
                            const error = {} as { [key: string]: string };

                            (Object.keys(values) as unknown as ('email' | 'password')[]).forEach((input) => {
                                if (!values[input])
                                    error[input] = "It is required!"
                                else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email))
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

                        {({ isSubmitting, errors, touched,  }) => (
                            <Form className="flex flex-col gap-2">
                                <div className="flex flex-col gap-1">
                                    <label htmlFor="email" className="font-semibold text-lg">Email:</label>
                                    <Field
                                        type="email"
                                        name="email"
                                        id="emailIpt"
                                        placeholder="Enter your email..."
                                        className={`outline-2 rounded-sm py-2 px-3 placeholder:text-c-grey ${(touched.email && errors.email) ? "outline-red-500" : "outline-c-grey"} focus:outline-c-yellow`} />
                                    <p className="text-red-500 text-sm">{(touched.email && errors.email) || "\u00A0"}</p>
                                </div>

                                <div className="flex flex-col gap-1">
                                    <label htmlFor="password" className="font-semibold text-lg">Password:</label>
                                    <Field
                                        type="password"
                                        name="password"
                                        placeholder="Enter your password..."
                                        className={`outline-2 rounded-sm py-2 px-3 placeholder:text-c-grey ${(touched.password && errors.password) ? "outline-red-500" : "outline-c-grey"} focus:outline-c-yellow`} />
                                    <p className="text-red-500 text-sm">{(touched.password && errors.password) || "\u00A0"}</p>
                                    <a href="#" className="w-full text-right underline">Forgot your password?</a>
                                </div>

                                <PrimaryButton onclick="alert('ok')" label="Sign In" type="submit" className="mt-8" disabled={isSubmitting || (touched.email && errors.email) && ((touched.password && errors.password))} />
                            </Form>
                        )}
                    </Formik>

                    <div className="flex flex-row my-8 justify-center items-center text-c-grey">
                        <span className="line"></span>
                        <span className="px-2">or</span>
                        <span className="line"></span>
                    </div>

                    <div className="flex flex-col gap-4">
                        <p className="text-center">Sign in with</p>

                        <div className="flex flex-row justify-center items-center gap-8">
                            <AuthButton>
                                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 10.325C18 13.7833 16.1583 18 10.6083 18C6.43717 18.0276 3.0321 14.671 3 10.5C3.0321 6.3288 6.43717 2.97221 10.6083 2.99993C12.3339 3.00633 14.0071 3.5934 15.3583 4.66659C15.4517 4.74287 15.5091 4.8546 15.5167 4.97493C15.5172 5.09667 15.4692 5.2136 15.3833 5.29993C14.8408 5.79593 14.3235 6.3188 13.8333 6.86659C13.6908 7.02351 13.4518 7.04523 13.2833 6.91659C12.5134 6.34683 11.574 6.05324 10.6167 6.08326C8.1544 6.08326 6.15833 8.07933 6.15833 10.5416C6.15833 13.0039 8.1544 15 10.6167 15C13.1167 15 14.175 13.9333 14.725 12.0416H10.9167C10.6866 12.0416 10.5 11.855 10.5 11.625V9.41663C10.5 9.18646 10.6866 8.99996 10.9167 8.99996H17.5833C17.7752 8.99871 17.937 9.14254 17.9583 9.33329C17.9893 9.66288 18.0032 9.99388 18 10.325Z" fill="#495E57" />
                                </svg>
                            </AuthButton>
                            <AuthButton>
                                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.95521 5.97067C10.0495 6.05385 10.1754 6.09192 10.3 6.07497C11.1343 5.92114 11.8805 5.46028 12.3917 4.78331C12.8887 4.15607 13.1797 3.39061 13.225 2.59164C13.2288 2.45924 13.1705 2.33267 13.0676 2.24934C12.9647 2.166 12.8288 2.13542 12.7 2.16664C11.896 2.37661 11.1768 2.83081 10.6417 3.46664C10.1333 4.08087 9.84054 4.84496 9.80837 5.64164C9.80721 5.76742 9.86079 5.8875 9.95521 5.97067ZM16.0855 8.18791C15.5925 8.65055 14.8167 9.3785 14.8167 10.925C14.8051 12.3057 15.5634 13.5782 16.7834 14.225C16.9343 14.2932 17.0319 14.4427 17.0334 14.6083C17.0334 14.6667 15.2834 18.8333 13.1834 18.8333C12.7236 18.8333 12.4172 18.6884 12.0816 18.5297C11.675 18.3375 11.2255 18.125 10.4084 18.125C9.60304 18.125 9.15237 18.3314 8.7376 18.5214C8.38416 18.6833 8.05683 18.8333 7.55838 18.8333C5.62505 18.8333 3.00005 14.7833 3.00005 11.125C2.96683 10.0917 3.22376 9.06975 3.74172 8.17497C4.47222 6.93692 5.77306 6.14578 7.20838 6.06664C7.88477 6.06664 8.43847 6.26572 8.96221 6.45403C9.43221 6.62301 9.87804 6.78331 10.3667 6.78331C10.8333 6.78331 11.2098 6.63721 11.6228 6.47694C12.1246 6.28225 12.6803 6.06664 13.5167 6.06664C15.0417 6.06664 16.4834 7.16664 16.4834 7.65831C16.4834 7.81453 16.3151 7.97244 16.0855 8.18791Z" fill="#495E57" />
                                </svg>
                            </AuthButton>
                        </div>
                    </div>
                </div>

                <p className="w-full text-center">
                    Don't have an account? &nbsp;
                    <a href="#" className="text-c-yellow font-semibold">Sign up</a>
                </p>

            </div>
        </Authentification>
    )
}