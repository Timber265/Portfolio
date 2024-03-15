import HeaderNot from '../components/HeaderNot'
import { Outlet } from 'react-router-dom'
export default function RootNot() {
    return (
        <>
            <HeaderNot />
            <Outlet />
        </>
    )
}