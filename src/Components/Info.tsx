import React from "react"
import { Box } from "@mui/material"

interface InfoProps {
    day: number
    month: number
    year: number
}

export const Info: React.FC<InfoProps> = ({ day, month, year }) => {
    const style = {
        fontWeight: "700",
        width: "100%",
        margin: 0,
    }
    const span = {
        background: "-webkit-linear-gradient(left, #470361, #d04905)",
        WebkitBackgroundClip: "text",
        backgroundPosition: "0% 100%",
        color: "transparent",
    }
    return (
        <Box
            sx={{
                display: "flex",
                fontSize: "5vw",
                alignItems: "center",
                padding: " 0 3vw",
                position: "relative",
                bottom: "3vw",
                flexDirection: "column",
                justifyContent: "flex-start",
                width: "100%",
            }}
        >
            <p style={style}>
                <i>
                    <span style={{ ...span }}>{year}</span> years
                </i>
            </p>
            <p style={style}>
                <i>
                    <span style={{ ...span }}>{month}</span> months
                </i>
            </p>
            <p style={style}>
                <i>
                    <span style={{ ...span }}>{day}</span> days
                </i>
            </p>
        </Box>
    )
}
