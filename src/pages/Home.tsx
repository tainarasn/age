import { Box, SxProps } from "@mui/material"
import React from "react"
import { Footer } from "../components/Footer"
import { Modal } from "../components/Modal"
import { Logo } from "../components/Logo"

interface HomeProps {}

export const Home: React.FC<HomeProps> = ({}) => {
    const box_style: SxProps = {
        borderRadius: "0.3vw",
        bgcolor: "#2b2b2c",
        width: "max-content",
        position: "relative",
        bottom: "15vw",
        left: "5vw",
    }
    return (
        <Box
            sx={{
                height: "100%",
                width: "100%",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
            }}
        >
            <Box
                sx={{
                    height: "95%",
                    width: "100%",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "2vw",
                    p: "3vw",
                }}
            >
                <Box sx={{ ...box_style, p: "1vw 1vw " }}>
                    <Logo />
                </Box>
                <Box sx={{ width: "70%", alignItems: "center" }}>
                    <Modal />
                </Box>
            </Box>
            <Footer />
        </Box>
    )
}
