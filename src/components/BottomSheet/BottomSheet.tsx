import { Formik, Form, Field } from "formik";
import { useState } from "react";
import { Sheet } from "react-modal-sheet";
import './BottomSheet.css'

import PrimaryButton from "../PrimaryButton/PrimaryButton";

export default function BottomSheet() {
    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <button onClick={() => setOpen(true)}>Open sheet</button>

            <Sheet
                isOpen={isOpen}
                onClose={() => setOpen(false)}
                className="ml-auto"
                detent="content-height"
            >
                <Sheet.Container>
                    <Sheet.Header></Sheet.Header>

                    <Sheet.Content className="px-6 pb-6"> {/* Increased padding */}
                        <p className="font-bold text-xl text-center pb-6 relative"> {/* Increased padding */}
                            Reserve a table
                        </p>

                        <Formik
                            initialValues={{
                                seating: "",
                                date: "",
                                time: "",
                                guests: "",
                                email: "",
                                specialReq: "",
                            }}
                            validateOnChange={true}
                            validate={(values) => {
                                const error = {} as { [key: string]: string };

                                (
                                    Object.keys(values) as unknown as (
                                        | "seating"
                                        | "date"
                                        | "time"
                                        | "guests"
                                        | "email"
                                    )[]
                                ).forEach((input) => {
                                    if (!values[input]) error[input] = "It is required!";
                                    else if (
                                        input === "email" &&
                                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                                            values.email
                                        )
                                    )
                                        error.email = "Invalid email address";
                                });

                                return error;
                            }}
                            onSubmit={(
                                values: {
                                    seating: string;
                                    date: string;
                                    time: string;
                                    guests: string;
                                    email: string;
                                    specialReq: string;
                                },
                                formikHelpers
                            ) => {
                                setTimeout(() => {
                                    alert(JSON.stringify(values, null, 2));
                                    formikHelpers.setSubmitting(false);
                                }, 400);
                            }}
                        >
                            {({ isSubmitting, errors, touched }) => (
                                <Form className="grid w-full grid-cols-[120px_minmax(auto,_1fr)] gap-6 align-middle">
                                    <label className="font-semibold text-lg">Seating:</label>
                                    <div className="flex items-center gap-10">
                                        <label className="flex items-center space-x-2">
                                            <Field type="radio" name="seating" value="indoor" />
                                            <span>Indoor</span>
                                        </label>
                                        <label className="flex items-center space-x-2">
                                            <Field type="radio" name="seating" value="outdoor" />
                                            <span>Outdoor</span>
                                        </label>
                                        {/* <p className="text-red-500 text-sm">
                                            {(touched.guests && errors.guests) || "\u00A0"}
                                        </p> */}
                                    </div>

                                    {/* Datetime */}
                                    <label className="font-semibold text-lg py-1">
                                        Date & time:
                                    </label>
                                    <div className="flex flex-col gap-1">
                                        <div className="flex gap-2 w-full">
                                            <Field
                                                type="date" // Change to text for placeholder
                                                name="dateTime"
                                                placeholder="Date"
                                                className={`outline-none rounded-md py-2 px-3 w-[55%] placeholder:text-gray-400 border border-gray-300 ${touched.date && errors.date
                                                    ? "border-red-500"
                                                    : "border-gray-300 "
                                                    }`}
                                            />
                                            <span className="text-gray-400 align-middle h-max m-auto">-</span>
                                            <Field
                                                type="text"
                                                placeholder="--:--"
                                                name="dateTime"
                                                className={`outline-none rounded-md py-2 px-3 w-[45%] placeholder:text-gray-400 border border-gray-300 ${touched.time && errors.time
                                                    ? "border-red-500"
                                                    : "border-gray-300 "
                                                    }`}
                                            />
                                        </div>
                                        <p className="text-red-500 text-sm">
                                            {(touched.date && errors.date && touched.time && errors.time) || "\u00A0"}
                                        </p>
                                    </div>

                                    {/* Guests */}
                                    <label className="font-semibold text-lg py-1">Guests:</label>
                                    <div className="flex flex-col gap-1">
                                        <Field
                                            type="number"
                                            name="guests"
                                            placeholder="How many seats for the reservation"
                                            className={`outline-none rounded-md py-2 px-3 placeholder:text-gray-400 border border-gray-300 ${touched.guests && errors.guests
                                                ? "border-red-500"
                                                : "border-gray-300 "
                                                }`}
                                        />
                                        <p className="text-red-500 text-sm">
                                            {(touched.guests && errors.guests) || "\u00A0"}
                                        </p>
                                    </div>

                                    {/* Email */}
                                    <label className="font-semibold text-lg">Email:</label>
                                    <div className="flex flex-col gap-1">
                                        <Field
                                            type="email"
                                            name="email"
                                            placeholder="For the reservation confirmation/reminder"
                                            className={`outline-none rounded-md py-2 px-3 placeholder:text-gray-400 border border-gray-300 ${touched.email && errors.email
                                                ? "border-red-500"
                                                : "border-gray-300 "
                                                }`}
                                        />
                                        <p className="text-red-500 text-sm">
                                            {(touched.email && errors.email) || "\u00A0"}
                                        </p>
                                    </div>

                                    {/* Special Request */}
                                    <div className="flex flex-col col-span-2 gap-1">
                                        <label className="font-semibold text-lg">
                                            Special request:
                                        </label>
                                        <Field
                                            as="textarea"
                                            name="specialReq"
                                            placeholder="Your request"
                                            className={`outline-none rounded-md py-2 px-3 placeholder:text-gray-400 border border-gray-300 w-full h-24 resize-none ${touched.specialReq && errors.specialReq
                                                ? "border-red-500"
                                                : "border-gray-300 "
                                                }`}
                                        />
                                        <p className="text-red-500 text-sm">
                                            {(touched.specialReq && errors.specialReq) || "\u00A0"}
                                        </p>
                                    </div>

                                    <PrimaryButton
                                        label="Reserve a table"
                                        type="submit"
                                        className="col-span-2 mt-8 md:sticky bottom-0 col-span-1 bg-yellow-400 text-black rounded-full" // Updated button styles
                                        disabled={
                                            isSubmitting ||
                                            Object.keys(touched).length === 0 ||
                                            Object.keys(errors).length > 0
                                        }
                                    />
                                </Form>
                            )}
                        </Formik>
                    </Sheet.Content>
                </Sheet.Container>
                <Sheet.Backdrop />
            </Sheet>
        </>
    );
}