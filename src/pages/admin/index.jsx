import SideBar from './side-bar'
import { Outlet } from 'react-router-dom'

const Admin = () => {
    return (
        <>
            <SideBar />
            <Outlet />
        </>
    )
}

export default Admin