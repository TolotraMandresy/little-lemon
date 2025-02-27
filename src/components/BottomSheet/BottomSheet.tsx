import { Formik, Form, Field } from "formik";
import { Sheet } from "react-modal-sheet";
import './BottomSheet.css'

import PrimaryButton from "../PrimaryButton/PrimaryButton";
import { ISheetIsOpenContext, useSheetOpenContext } from "../../provider/SheetOpenProvider/SheetOpenProvider";

export default function BottomSheet() {
    const { isSheetOpen, closeSheet } = useSheetOpenContext() as ISheetIsOpenContext;    

    return (

        <Sheet
            isOpen={isSheetOpen}
            onClose={closeSheet}
            className="flex w-full md:ml-auto md:mr-8 md:max-w-[600px]"
            detent="content-height"
            rootId="main-container"
        >
            <Sheet.Container>
                <Sheet.Header></Sheet.Header>

                <Sheet.Content className="px-6 pb-6">
                    <p className="font-bold text-xl text-center pb-6 relative">
                        Reserve a table
                    </p>

                    <Formik
                        initialValues={{
                            seating: "indoor",
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
                                    | "specialReq"
                                )[]
                            ).forEach((input) => {
                                if (input == "specialReq") return

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
                        {({ isSubmitting, values, errors, touched, setFieldValue }) => (
                            <Form className="grid w-full grid-cols-[120px_minmax(auto,_1fr)] gap-6 align-middle">
                                <label className="font-semibold text-lg">Seating:</label>
                                <div className="flex items-center gap-10">
                                    <label className="flex items-center space-x-2">
                                        <Field type="radio" name="seating" value="indoor" id="indoor" checked={values.seating == "indoor"} onChange={() => setFieldValue("seating", "indoor")} />
                                        <span>Indoor</span>
                                    </label>
                                    <label className="flex items-center space-x-2">
                                        <Field type="radio" name="seating" value="outdoor" id="outdoor" checked={values.seating == "outdoor"} onChange={() => setFieldValue("seating", "outdoor")} />
                                        <span>Outdoor</span>
                                    </label>
                                </div>

                                <label className="font-semibold text-lg" htmlFor="date">Date:</label>
                                <div className="flex flex-col gap-1">
                                    <Field
                                        type="date"
                                        name="date"
                                        id="date"
                                        placeholder="For the reservation confirmation/reminder"
                                        className={`outline-none rounded-md py-2 px-3 placeholder:text-gray-400 border border-gray-300 ${touched.date && errors.date
                                            ? "border-red-500"
                                            : "border-gray-300 "
                                            }`}
                                    />
                                    <p className="text-red-500 text-sm">
                                        {(touched.date && errors.date) || "\u00A0"}
                                    </p>
                                </div>

                                <label className="font-semibold text-lg" htmlFor="time">Time:</label>
                                <div className="flex flex-col gap-1">
                                    <Field
                                        type="time"
                                        name="time"
                                        id="time"
                                        placeholder="For the reservation confirmation/reminder"
                                        className={`outline-none rounded-md py-2 px-3 placeholder:text-gray-400 border border-gray-300 ${touched.time && errors.time
                                            ? "border-red-500"
                                            : "border-gray-300 "
                                            }`}
                                    />
                                    <p className="text-red-500 text-sm">
                                        {(touched.time && errors.time) || "\u00A0"}
                                    </p>
                                </div>

                                <label className="font-semibold text-lg py-1" htmlFor="guests">Guests:</label>
                                <div className="flex flex-col gap-1">
                                    <Field
                                        type="number"
                                        name="guests"
                                        id="guests"
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

                                <label className="font-semibold text-lg py-1" htmlFor="email">Email:</label>
                                <div className="flex flex-col gap-1">
                                    <Field
                                        type="email"
                                        name="email"
                                        id="email"
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

                                <div className="flex flex-col col-span-2 gap-1">
                                    <label className="font-semibold text-lg py-1" htmlFor="specialReq">
                                        Special request:
                                    </label>
                                    <Field
                                        as="textarea"
                                        name="specialReq"
                                        id="specialReq"
                                        placeholder="Your request"
                                        className={`outline-none rounded-md py-2 px-3 placeholder:text-gray-400 border border-gray-300 w-full h-24 resize-none`}
                                    />
                                </div>

                                <PrimaryButton
                                    label="Reserve a table"
                                    type="submit"
                                    className="col-span-2 mt-8 md:sticky bottom-0 bg-yellow-400 text-black rounded-full"
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
    );
}