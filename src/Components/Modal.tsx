import React from "react"
import { Box } from "@mui/material"
import { Form } from "./Form"

interface ModalProps {}

export const Modal: React.FC<ModalProps> = ({}) => {
    return (
        <Box
            sx={{
                position: "",
                width: "65%",
                height: "fit-content",
                display: "flex",
                flexDirection: "column",
                padding: "2vw",
                borderRadius: "0 0 10vw",
                bgcolor: "#2b2b2b",
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            }}
        >
            <Form />
        </Box>
    )
}
