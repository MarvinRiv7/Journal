import { Routes, Route, Navigate } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { JournalRoutes } from "../journal/routes/JournalRoutes"
import { CheckingAuth } from "../ui/components/CheckingAuth"
import { useCheckAuth } from "../hooks/useCheckAuth"


export const AppRouter = () => {

  const {status} = useCheckAuth()
  
  if(status === 'checking') {
    return <CheckingAuth/>
  }

  return (
    
    <Routes>

      {
        (status === 'aunthenticated')
        ?   <Route path="/*" element={<JournalRoutes/>}/>
        : <Route path="/auth/*" element={<AuthRoutes/>}/>
      }

      <Route path="/*" element={<Navigate to='/auth/login'/>} />

    {/* Login y Registro */}
    {/* // <Route path="/auth/*" element={<AuthRoutes/>}/> */}

    {/* Journal App*/}
    {/* <Route path="/*" element={<JournalRoutes/>}/> */}
    </Routes>

  )
}
