import { Outlet, Link } from 'react-router-dom';

export default function Layout() {
    return (
        <>
            <header>
                <Link to='/' style={{ textDecoration: 'none' }}>
                    <h1>Movies App</h1>
                </Link>
            </header>

            <Outlet />
        </>
    )
}