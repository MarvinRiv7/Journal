import { Box, Toolbar } from "@mui/material"
import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components";


const drawerWidth = 240;

export const JournalLayout = ({children}) => {
  return (

    <Box sx={{display: 'flex'}} className="animate__animated animate__rotateIn ">

        <Navbar drawerWidth={drawerWidth}/>

        <Sidebar drawerWidth={drawerWidth} />


        <Box component='main' sx={{flexGrow: 1, p:3}}>

            <Toolbar/>
            {children}

        </Box>



    </Box>

  )
}
