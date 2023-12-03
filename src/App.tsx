import logo from "./logo.svg"
import { Modal } from "./Components/Modal"
import { Box } from "@mui/material"

function App() {
    return (
        <Box
            sx={{
                display: "flex",
                width: "100vw",
                height: "48vw",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Modal />
        </Box>
    )
}

export default App
