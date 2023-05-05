import { Outlet } from "react-router-dom"
import Header from "../Client/header"

const LayoutClient = () => {
  return (
    <>
        <Header/>
        <Outlet/>
    </>
  )
}

export default LayoutClient