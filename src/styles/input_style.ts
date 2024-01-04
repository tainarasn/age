import { SxProps } from "@mui/material"

export const input_style: SxProps = {
    "& .MuiInputBase-root": {
        color: "#fff",
        fontFamily: "space",
    },
    "& .MuiOutlinedInput-input": {
        fontSize: "16px",
        height: "0.8vw",
    },
    "& .MuiInputLabel-root": {
        fontSize: "2vw", // Modifica o tamanho da fonte do rótulo (label)
        color: "#470361", // Altera a cor do rótulo (label)
    },
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
        borderColor: "#fff",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "#fff",
    },
    "& .MuiInputLabel-root.Mui-focused ": {
        color: "#fff", // Cor do label quando o TextField está em foco (digitando)
        borderColor: "#fff",
    },
    "& .MuiInputLabel-root ": {
        color: "#fff",
        fontSize: "3.2vw",
    },
    "& .MuiOutlinedInput-root": {
        "&.Mui-focused fieldset": {
            borderColor: "#fff",
        },
        fieldset: {
            borderColor: "#fff",
        },
    },
}
