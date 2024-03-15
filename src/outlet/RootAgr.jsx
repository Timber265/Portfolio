import HeaderAgr from '../components/HeaderAgr'
import { Outlet } from 'react-router-dom'
export default function RootAgr() {
    return (
        <>
            <HeaderAgr />
            <Outlet />
        </>
    )
}