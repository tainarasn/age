import React from "react"
import "./style.scss"
import { TextField, IconButton, Box, Paper } from "@mui/material"
import submit from "../Images/icon-arrow.svg"
import { Info } from "./Info"
import { Form } from "./Form"

interface ModalProps {}

export const Modal: React.FC<ModalProps> = ({}) => {
    return (
        <Box
            sx={{
                position: "",
                width: "40%",
                height: "34VW",
                display: "flex",
                flexDirection: "column",
                padding: "2vw",
                borderRadius: "0 0 10vw",
                bgcolor: "#fff",
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            }}
        >
            <Form />
        </Box>
    )
}
