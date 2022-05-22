import { Box, Card, Grid, TextField, Typography } from "@mui/material"
import React from "react"
import { Formik } from "formik"
import * as Yup from "yup"
import LightButton from "../../Components/Buttons/LightButton"
import theme from "../../Components/Themes"
import * as Style from "./Style"

export default function Contact() {
    return <></>
    //TODO:
    // return (
    //     <Grid sx={Style.contactStyle} id="ContactMe">
    //         <Grid item sm={0} md={2} />
    //         <Grid item sm={12} md={8}>
    //             <Card sx={Style.contactFormStyle} raised>
    //                 <Box sx={Style.header}>
    //                     <Typography sx={Style.subTitleStyle}>Send me a message</Typography>
    //                 </Box>

    //                 <Formik
    //                     initialValues={{ name: "", email: "", content: "" }}
    //                     validationSchema={Yup.object().shape({
    //                         name: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
    //                         email: Yup.string().email("Invalid email").required("Required"),
    //                         content: Yup.string().min(10, "Too Short!").max(1000, "Too Long!").required("Required"),
    //                     })}
    //                     onSubmit={(values, { setSubmitting }) => {
    //                         //display a toast of a successful submission
    //                         setSubmitting(false)
    //                     }}
    //                 >
    //                     {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
    //                         <form onSubmit={handleSubmit}>
    //                             <Grid container sx={Style.formGrid}>
    //                                 <Grid item xs={12} sx={Style.gridElement}>
    //                                     <Typography>Name</Typography>
    //                                     <TextField
    //                                         name="name"
    //                                         id="name"
    //                                         onChange={handleChange}
    //                                         onBlur={handleBlur}
    //                                         value={values.name}
    //                                         sx={{
    //                                             border: `1px solid ${"#222224"}`,
    //                                             borderRadius: "4px",
    //                                             backgroundColor: theme.palette.primary.main,
    //                                         }}
    //                                     />
    //                                 </Grid>

    //                                 <Grid item xs={12} sx={Style.gridElement}>
    //                                     <Typography>Email</Typography>

    //                                     <TextField
    //                                         name="email"
    //                                         id="email"
    //                                         align="center"
    //                                         type="email"
    //                                         onChange={handleChange}
    //                                         onBlur={handleBlur}
    //                                         value={values.email}
    //                                         sx={{
    //                                             border: `1px solid ${"#222224"}`,
    //                                             borderRadius: "4px",
    //                                             backgroundColor: theme.palette.primary.main,
    //                                         }}
    //                                     />
    //                                 </Grid>

    //                                 <Grid item xs={12} sx={Style.gridElement}>
    //                                     <Typography>Message</Typography>

    //                                     <TextField
    //                                         name="message"
    //                                         id="message"
    //                                         onChange={handleChange}
    //                                         onBlur={handleBlur}
    //                                         value={values.content}
    //                                         multiline
    //                                         maxRows={100}
    //                                         rows={4}
    //                                         inputProps={{ maxLength: 1000, color: theme.palette.primary.contrastText }}
    //                                         sx={Style.messageField}
    //                                     />
    //                                 </Grid>

    //                                 <Grid item xs={12} sx={Style.submitGrid}>
    //                                     <LightButton
    //                                         type="submit"
    //                                         size="large"
    //                                         isSubmitting={isSubmitting}
    //                                         disabled={isSubmitting}
    //                                     >
    //                                         Submit
    //                                     </LightButton>
    //                                 </Grid>
    //                             </Grid>
    //                         </form>
    //                     )}
    //                 </Formik>
    //             </Card>
    //         </Grid>
    //         <Grid item sm={0} md={2} />
    //     </Grid>
    // )
}
