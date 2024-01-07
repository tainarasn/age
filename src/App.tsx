import "./App.css"
import { Snackbar } from "@mui/material"
import { Routes } from "./Routes"
import { Providers } from "./Providers"
function App() {
    return (
        <Providers>
            <Routes />
            <Snackbar />
        </Providers>
    )
}

export default App
