import PropTypes from "prop-types";
import React, { useEffect } from "react";

function HeaderLinks({ data }) {

    useEffect (() => {
        console.log('menu'+data)
    },[])

    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="mx-3 nav-link active" aria-current="page" href="/">{data.Home}</a>
                        </li>
                        <li className="nav-item">
                            <a className="mx-3 nav-link" href="/monuments">{data.Monuments}</a>
                        </li>
                        <li className="nav-item">
                            <a className="mx-3 nav-link" href="/blog">{data.Blog}</a>
                        </li>
                         <li className="nav-item">
                            <a className="mx-3 nav-link" href="/map">{data.Map}</a>
                        </li> 
                        <li className="nav-item">
                            <a className="mx-3 nav-link" href="/about">{data.About}</a>
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