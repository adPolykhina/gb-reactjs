import { Routes, Route } from 'react-router'
import { NavBar } from './View'
import { HomePage, ProfilePage } from './Pages'

export function AppView() {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/*" element={<HomePage />} />
                <Route path="/profile" element={<ProfilePage />} />
            </Routes>
        </>
    )
}
