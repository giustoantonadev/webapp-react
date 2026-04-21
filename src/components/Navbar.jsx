export default function Navbar() {
    return (
        <nav
            className="navbar navbar-expand-lg"
            style={{
                backgroundColor: "#0d0d0d",
                borderBottom: "1px solid #222",
                padding: "12px 20px"
            }}
        >
            <div className="container-fluid">

                {/* Logo */}
                <a
                    className="navbar-brand"
                    href="/"
                    style={{
                        color: "white",
                        fontWeight: "bold",
                        fontSize: "1.4rem",
                        letterSpacing: "1px"
                    }}
                >
                    🎬 MyMovies
                </a>

                {/* Menu */}
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ms-auto">

                        <li className="nav-item">
                            <a
                                className="nav-link"
                                href="/"
                                style={{ color: "#ccc" }}
                            >
                                Home
                            </a>
                        </li>

                        <li className="nav-item">
                            <a
                                className="nav-link"
                                href="/movies"
                                style={{ color: "#ccc" }}
                            >
                                Film
                            </a>
                        </li>

                    </ul>
                </div>

            </div>
        </nav>
    );
}
