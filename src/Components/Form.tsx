import React, { useState } from "react"
import "./style.scss"
import { Box, IconButton, TextField, SxProps, Tooltip } from "@mui/material"
import { Formik, Form as Formu } from "formik"
import submit from "../Images/icon-arrow.svg"
import { Info } from "./Info"
import { input_style } from "../styles/input_style"

interface FormProps {}
interface FormValues {
    day: number
    month: number
    year: number
}
export const Form: React.FC<FormProps> = ({}) => {
    const initialValues: FormValues = {
        day: 0,
        month: 0,
        year: 0,
    }

    const validateDay = (value: string) => {
        const dayValue = parseInt(value, 10)
        if (isNaN(dayValue) || dayValue < 1 || dayValue > 31) {
            return "Dia inválido"
        }
        return undefined
    }
    const validateMonth = (value: string) => {
        const dayValue = parseInt(value, 10)
        if (isNaN(dayValue) || dayValue < 1 || dayValue > 12) {
            return "Mês inválido"
        }
        return undefined
    }
    const validateYear = (value: string) => {
        const dayValue = parseInt(value, 10)
        if (isNaN(dayValue) || dayValue < 1 || dayValue > 2023) {
            return "Ano inválido"
        }
        return undefined
    }
    const [oldYears, setOldYears] = useState(0)
    const [oldMonths, setOldMonths] = useState(0)
    const [oldDays, setOldDays] = useState(0)

    const handleSubmit = (values: FormValues) => {
        const currentDate = new Date()
        const currentYear = currentDate.getFullYear()
        const currentMonth = currentDate.getMonth() + 1 // Adicionamos 1 ao mês atual porque o objeto Date indexa os meses de 0 a 11
        const currentDay = currentDate.getDate()

        let years = currentYear - Number(values.year)
        let months = currentMonth - Number(values.month)
        let days = currentDay - Number(values.day)

        // Se o mês atual for menor que o mês fornecido pelo usuário, subtraímos 1 dos anos
        if (months < 0) {
            years--
            months += 12 // Adicionamos 12 meses para obter o mês correto
        }

        // Se o dia atual for menor que o dia fornecido pelo usuário e o mês atual também for menor,
        // ajustamos os meses novamente e subtraímos 1 dos anos
        if (days < 0 && months === 0) {
            years--
            months = 11
            days += new Date(currentYear, currentMonth, 0).getDate() // Obtemos o último dia do mês anterior
        } else if (days < 0) {
            months--
            days += new Date(currentYear, currentMonth - 1, 0).getDate() // Obtemos o último dia do mês anterior
        }

        setOldYears(years)
        setOldMonths(months)
        setOldDays(days)
    }

    return (
        <Box sx={{ flexDirection: "column" }}>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                {({ values, handleChange, errors }) => (
                    <Formu onChange={handleChange}>
                        <div className="input-container">
                            <Box sx={{ gap: 0, flexDirection: "column" }}>
                                <p style={{ fontFamily: "space", color: "#fff" }}>Dia</p>
                                <TextField
                                    name="day"
                                    sx={{ ...input_style, width: "max-content" }}
                                    value={values.day}
                                    onChange={handleChange}
                                    error={!!errors.day}
                                    helperText={errors.day}
                                    inputProps={{
                                        type: "number",
                                        min: 1,
                                        max: 31,
                                    }}
                                    onBlur={(e) => {
                                        const value = e.target.value
                                        if (validateDay(value)) {
                                            // Se o valor do dia for inválido, redefinimos o campo para vazio
                                            handleChange({ target: { name: "day", value: "" } })
                                        }
                                    }}
                                />
                            </Box>
                            <Box sx={{ flexDirection: "column" }}>
                                <p style={{ fontFamily: "space", color: "#fff" }}>Mês</p>
                                <TextField
                                    sx={{ ...input_style, width: "max-content" }}
                                    name="month"
                                    value={values.month}
                                    onChange={handleChange}
                                    error={!!errors.month}
                                    helperText={errors.month}
                                    inputProps={{
                                        type: "number",
                                        min: 1,
                                        max: 12,
                                    }}
                                    onBlur={(e) => {
                                        const value = e.target.value
                                        if (validateMonth(value)) {
                                            // Se o valor do dia for inválido, redefinimos o campo para vazio
                                            handleChange({ target: { name: "month", value: "" } })
                                        }
                                    }}
                                />
                            </Box>
                            <Box sx={{ flexDirection: "column" }}>
                                <p style={{ fontFamily: "space", color: "#fff" }}>Ano</p>
                                <TextField
                                    name="year"
                                    value={values.year}
                                    onChange={handleChange}
                                    error={!!errors.year}
                                    helperText={errors.year}
                                    sx={{ ...input_style, width: "max-content" }}
                                    inputProps={{
                                        type: "number",
                                        min: 1870,
                                        max: 2023,
                                    }}
                                    onBlur={(e) => {
                                        const value = e.target.value
                                        if (validateYear(value)) {
                                            // Se o valor do dia for inválido, redefinimos o campo para vazio
                                            handleChange({ target: { name: "year", value: "" } })
                                        }
                                    }}
                                />
                            </Box>
                        </div>
                        <Tooltip title="Calcular" sx={{ fontFamily: "space" }}>
                            <IconButton
                                className="icon"
                                sx={{
                                    position: "relative",
                                    left: "30vw",
                                    bottom: "1vw",
                                    width: "5vw",
                                    height: "5vw",
                                    borderRadius: "50%",
                                    background: "-webkit-linear-gradient(left, #470361, #d04905)",
                                }}
                                type="submit"
                            >
                                <img src={submit} alt="" />
                            </IconButton>
                        </Tooltip>
                    </Formu>
                )}
            </Formik>
            <hr
                style={{
                    height: "1px",
                    width: "65%",
                    border: "none",
                    background: "-webkit-linear-gradient(left, #470361, #d04905)",
                    position: "relative",
                    right: "4vw",
                    bottom: "4vw",
                }}
            />
            <Info day={oldDays} year={oldYears} month={oldMonths} />
        </Box>
    )
}
