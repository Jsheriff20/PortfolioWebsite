import { Card, Grid, TextField } from "@mui/material";
import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import LightButton from "../../Components/Buttons/LightButton";

const contactStyle = {
    height: "100vh",
    width: "100vw",
    maxWidth: "1200px",
    margin: "auto",
};

const contactFormStyle = {
    margin: "auto",
    width: "100%",
    backgroundColor: "white",
};

export default function Contact() {
    return (
        <Grid container maxWidth="md" sx={contactStyle}>
            <Grid item xs={12} md={3}></Grid>
            <Grid item xs={12} md={6}>
                <Card sx={contactFormStyle}>
                    <Formik
                        initialValues={{ name: "", email: "", content: "" }}
                        validationSchema={Yup.object().shape({
                            name: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
                            email: Yup.string().email("Invalid email").required("Required"),
                            content: Yup.string().min(10, "Too Short!").max(1000, "Too Long!").required("Required"),
                        })}
                        onSubmit={(values, { setSubmitting }) => {
                            console.log(values);

                            //display a toast of a sucessful submission
                            setSubmitting(false);
                        }}
                    >
                        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                            <form onSubmit={handleSubmit}>
                                <Grid
                                    container
                                    direction="column"
                                    alignContent="center"
                                    justify="center"
                                    align="center"
                                >
                                    <Grid item xs={12}>
                                        <TextField
                                            name="name"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.name}
                                        />
                                    </Grid>

                                    <Grid item xs={12}>
                                        <TextField
                                            type="email"
                                            name="email"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.email}
                                        />
                                    </Grid>

                                    <Grid item xs={12}>
                                        <TextField
                                            name="content"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.content}
                                            multiline
                                            maxRows={100}
                                            rows={4}
                                            inputProps={{ maxLength: 1000 }}
                                        />
                                    </Grid>

                                    <Grid item xs={12}>
                                        <LightButton
                                            type="submit"
                                            isSubmitting={true}
                                            disabled={true}
                                            sx={{ width: "100px" }}
                                        >
                                            Submit
                                        </LightButton>
                                    </Grid>
                                </Grid>
                            </form>
                        )}
                    </Formik>
                </Card>
            </Grid>
            <Grid item xs={12} md={3}></Grid>
        </Grid>
    );
}
