import React from "react"
import "./style.scss"
import { TextField, IconButton, Box } from "@mui/material"
import { Formik, Form } from "formik"
import submit from "../Images/icon-arrow.svg"

interface ModalProps {}

interface FormValues {
    day: string
    month: string
    year: string
}

export const Modal: React.FC<ModalProps> = ({}) => {
    const initialValues: FormValues = {
        day: "",
        month: "",
        year: "",
    }

    const handleSubmit = (values: FormValues) => {
        console.log(values)
    }

    return (
        <div className="Modal-Component">
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                {({ values, handleChange }) => (
                    <Form onChange={handleChange}>
                        <div className="input-container">
                            <Box sx={{ gap: 0 }}>
                                <p>Dia</p>
                                <TextField name="day" placeholder="Dia" />
                            </Box>
                            <Box>
                                <p>Mês</p>
                                <TextField name="month" placeholder="Mês" />
                            </Box>
                            <Box>
                                <p>Ano</p>
                                <TextField name="year" placeholder="Ano" />
                            </Box>
                        </div>
                        <IconButton
                            className="icon"
                            sx={{ position:"relative", left:"34vw",bottom:"1vw", width: "5vw", height: "5vw", borderRadius: "50%", backgroundColor: "hsl(259, 100%, 65%)" }}
                            type="submit"
                        >
                            <img src={submit} alt="" />
                        </IconButton>
                    </Form>
                )}
            </Formik>
            <hr
                style={{
                    height: "1px",
                    width: "73.5%",
                    border: "none",
                    backgroundColor: "hsl(0, 0%, 86%)",
                    position: "relative",
                    right: "2.5vw",
                    bottom: "4vw",
                }}
            />
        </div>
    )
}
