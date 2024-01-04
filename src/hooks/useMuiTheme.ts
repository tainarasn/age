import { createTheme } from "@mui/material"
import { colors } from "../styles/colors"

export const useMuiTheme = () => {
    const THEME = createTheme({
        typography: {
            fontFamily: ["space", "Teko"].join(","),
        },
    })

    return THEME
}
