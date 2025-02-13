import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const purpleTheme = createTheme({
    palette: {
        primary: {
            main: '#038C3E'
        },
        secondary: {
            main: '#000000'
        },
        error: {
            main: red.A400
        }
    }
})