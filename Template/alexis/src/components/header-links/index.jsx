function HeaderLinks() {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="mx-3 nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="mx-3 nav-link" href="/monuments">Monumenti</a>
                        </li>
                        <li className="nav-item">
                            <a className="mx-3 nav-link" href="/blog">Blog</a>
                        </li>
                        <li className="nav-item">
                            <a className="mx-3 nav-link" href="/about">Chi Siamo</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default HeaderLinks;