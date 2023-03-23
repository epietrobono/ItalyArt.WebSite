import PropTypes from "prop-types";

function HeaderLinks({ data }) {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="mx-3 nav-link active" aria-current="page" href="/">{data.home}</a>
                        </li>
                        <li className="nav-item">
                            <a className="mx-3 nav-link" href="/monuments">{data.monuments}</a>
                        </li>
                        <li className="nav-item">
                            <a className="mx-3 nav-link" href="/blog">{data.blog}</a>
                        </li>
                        <li className="nav-item">
                            <a className="mx-3 nav-link" href="/map">{data.map}</a>
                        </li>
                        <li className="nav-item">
                            <a className="mx-3 nav-link" href="/about">{data.about}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

HeaderLinks.propTypes = {
    data: PropTypes.object,
};

export default HeaderLinks;