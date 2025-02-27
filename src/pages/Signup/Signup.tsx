import { useNavigate } from 'react-router-dom';
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import Authentification from "../../layout/Authentification/Authentification";
import { Field, Form, Formik } from "formik";

export default function Signup({ onSignup }: { onSignup: () => void }) {
    const navigate = useNavigate();

    return (
        <Authentification>
            <div className="flex flex-col h-full w-full justify-evenly gap-8 py-4">
                <h1 className="w-full text-center font-semibold text-7xl text-c-yellow self-start">Sign Up</h1>

                <div className="flex flex-col">
                    <Formik
                        initialValues={{ fullname: '', email: '', password: '', confirm: '' }}
                        // validateOnChange={true}
                        validate={values => {
                            const error = {} as { [key: string]: string };

                            (Object.keys(values) as unknown as ('fullname' | 'email' | 'password' | 'confirm')[]).forEach((input) => {
                                values[input] = values[input].toString().trim();

                                if (!values[input])
                                    error[input] = "It is required!";
                                else
                                    switch (input) {
                                        case 'fullname':
                                            if (!/^(?!\s)(?!.*?\s{2})[a-zA-ZÀ-ÿ\s'-]+(?<!\s)$/i.test(values.fullname)) {
                                                error.fullname = "Invalid name";
                                            }
                                            break;

                                        case 'email':
                                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email))
                                                error.email = "Invalid email address";
                                            break;

                                        case 'password':
                                        case 'confirm':
                                            if (values.password && values.confirm && values.password !== values.confirm) {
                                                error.password = "Password and password confirmation do not match";
                                                error.confirm = "Password and password confirmation do not match";
                                            }
                                            break;

                                        default:
                                            break;
                                    }
                            });

                            return error;
                        }}
                        onSubmit={(_, formikHelpers) => {
                            setTimeout(() => {
                                formikHelpers.setSubmitting(false);
                                onSignup();
                            }, 400);
                        }}
                    >
                        {({ isSubmitting, errors, touched }) => (
                            <Form className="flex flex-col gap-2">
                                <div className="flex flex-col gap-1">
                                    <label htmlFor="fullname" className="font-semibold text-lg">Fullname:</label>
                                    <Field
                                        type="text"
                                        name="fullname"
                                        id="fullname"
                                        placeholder="Enter your fullname..."
                                        className={`outline-2 rounded-sm py-2 px-3 placeholder:text-c-grey ${(errors.fullname && touched.fullname) ? "outline-red-500" : " focus:outline-c-yellow outline-c-grey"}`} />
                                    <p className="text-red-500 text-sm">{(touched.fullname && errors.fullname) || "\u00A0"}</p>
                                </div>

                                <div className="flex flex-col gap-1">
                                    <label htmlFor="email" className="font-semibold text-lg">Email:</label>
                                    <Field
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="Enter your email..."
                                        className={`outline-2 rounded-sm py-2 px-3 placeholder:text-c-grey ${(errors.email && touched.email) ? "outline-red-500" : " focus:outline-c-yellow outline-c-grey"}`} />
                                    <p className="text-red-500 text-sm">{(touched.email && errors.email) || "\u00A0"}</p>
                                </div>

                                <div className="flex flex-col gap-1">
                                    <label htmlFor="password" className="font-semibold text-lg">Password:</label>
                                    <Field
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="Enter your password..."
                                        className={`outline-2 rounded-sm py-2 px-3 placeholder:text-c-grey ${(errors.password && touched.password) ? "outline-red-500" : " focus:outline-c-yellow outline-c-grey"}`} />
                                    <p className="text-red-500 text-sm">{(touched.password && errors.password) || "\u00A0"}</p>
                                </div>

                                <div className="flex flex-col gap-1">
                                    <label htmlFor="confirm" className="font-semibold text-lg">Confirm Password:</label>
                                    <Field
                                        type="password"
                                        name="confirm"
                                        id="confirm"
                                        placeholder="Confirm your password..."
                                        className={`outline-2 rounded-sm py-2 px-3 placeholder:text-c-grey ${(errors.confirm && touched.confirm) ? "outline-red-500" : " focus:outline-c-yellow outline-c-grey"}`} />
                                    <p className="text-red-500 text-sm">{(touched.confirm && errors.confirm) || "\u00A0"}</p>
                                </div>

                                <PrimaryButton label="Sign Up" type="submit" className="mt-8 md:sticky bottom-0" disabled={isSubmitting || errors.fullname || errors.email || errors.password || errors.confirm} />
                            </Form>
                        )}
                    </Formik>
                </div>

                <p className="w-full text-center">
                    Already have an account? &nbsp;
                    <a href="#" className="text-c-yellow font-semibold markazi text-md" onClick={() => navigate('/')}>Sign in</a>
                </p>
            </div>
        </Authentification>
    );
}