import React from "react"
import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "@mui/material"
import { useMuiTheme } from "./hooks/useMuiTheme"

interface ProvidersProps {
    children: React.ReactNode
}

export const Providers: React.FC<ProvidersProps> = ({ children }) => {
    const mui_theme = useMuiTheme()

    return (
        <BrowserRouter>
            <ThemeProvider theme={mui_theme}>{children}</ThemeProvider>
        </BrowserRouter>
    )
}
