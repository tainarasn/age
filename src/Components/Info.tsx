import React from 'react'
import {Box} from "@mui/material"


interface InfoProps {
    day: number
    month: number
    year: number
}

export const Info:React.FC<InfoProps> = ({day, month,year }) => {
    const style = {
        fontWeight:"700", width:"100%", margin:0,
    }
    return (
        <Box sx={{display:"flex",fontSize:"5vw", alignItems:"center",padding:" 0 3vw",position:"relative",bottom:"3vw", flexDirection:"column", justifyContent:"flex-start", width:"100%"}}>
            <p style={style}><i><span style={{color:"hsl(259, 100%, 65%)"}}>{ year }</span> years</i></p>
            <p style={style}><i><span  style={{color:"hsl(259, 100%, 65%)"}}>{month }</span> months</i></p>
            <p style={style}><i><span style={{color:"hsl(259, 100%, 65%)"}}>{ day }</span> days</i></p>

        </Box>
    )
}