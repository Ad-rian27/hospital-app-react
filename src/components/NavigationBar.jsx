import React from 'react'

const NavigationBar = () => {
    return (
        <div>

            <nav
                className="navbar navbar-expand-lg shadow"
                style={{
                    background: "linear-gradient(90deg, #4A00E0, #8E2DE2)",
                    padding: "12px 20px"
                }}
            >
                <div className="container-fluid">
                    <Link
                        className="navbar-brand fw-bold"
                        to="/"
                        style={{
                            color: "white",
                            fontSize: "28px",
                            letterSpacing: "1px"
                        }}
                    >
                        📚 Hospital App
                    </Link>

                    <button
                        className="navbar-toggler bg-light"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div
                        className="collapse navbar-collapse justify-content-end"
                        id="navbarNavAltMarkup"
                    >
                        <div className="navbar-nav">

                            <Link
                                className="nav-link mx-2"
                                to="/"
                                style={{
                                    color: "white",
                                    fontWeight: "500",
                                    borderRadius: "8px",
                                    padding: "8px 15px",
                                    transition: "0.3s"
                                }}
                            >
                                ➕ Add Patient
                            </Link>

                            <Link
                                className="nav-link mx-2"
                                to="/search"
                                style={{
                                    color: "white",
                                    fontWeight: "500",
                                    borderRadius: "8px",
                                    padding: "8px 15px"
                                }}
                            >
                                🔍 Search
                            </Link>

                            <Link
                                className="nav-link mx-2"
                                to="/delete"
                                style={{
                                    color: "white",
                                    fontWeight: "500",
                                    borderRadius: "8px",
                                    padding: "8px 15px"
                                }}
                            >
                                🗑 Discharge
                            </Link>

                            <Link
                                className="nav-link mx-2"
                                to="/view"
                                style={{
                                    color: "white",
                                    fontWeight: "500",
                                    borderRadius: "8px",
                                    padding: "8px 15px"
                                }}
                            >
                                📖 View
                            </Link>

                        </div>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default NavigationBar