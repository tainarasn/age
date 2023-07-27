import React from "react"
import "./style.scss"
import { TextField, IconButton, Box, Paper } from "@mui/material"
import submit from "../Images/icon-arrow.svg"
import { Info } from "./Info"
import { Form } from "./Form"

interface ModalProps {}

export const Modal: React.FC<ModalProps> = ({}) => {
    return (
        
        <Paper elevation={0} sx={{position:"", width: "100%", height: "34VW",display:"flex", flexDirection: "column", padding: "2vw", borderRadius:"0 0 10vw" }}>
            <Form />
            
        </Paper>
    )
}
