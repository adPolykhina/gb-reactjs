import { Routes, Route } from 'react-router'
import { NavBar } from './View'
import { Home, Profile } from './Pages'

export function AppView() {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/*" element={<Home />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </>
    )
}
