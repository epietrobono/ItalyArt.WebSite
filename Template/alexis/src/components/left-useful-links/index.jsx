import { Link } from "react-router-dom";

function LeftUsefulLinks() {
    return (
        <ul>
            <div style={{height: "170px"}}></div>
            <h3>Link Utili</h3>
            <li>
                <Link
                    to={
                        process.env.PUBLIC_URL + "/"
                    }
                >
                    Home
                </Link>
            </li>
            <li>
                <Link
                    to={
                        process.env.PUBLIC_URL + "/monuments"
                    }
                >
                    Monumenti
                </Link>
            </li>
            <li>
                <Link
                    to={
                        process.env.PUBLIC_URL + "/blog"
                    }
                >
                    Blog
                </Link>
            </li>
            <li>
                <Link
                    to={
                        process.env.PUBLIC_URL + "/privacy"
                    }
                >
                    Privacy
                </Link>
            </li>
        </ul>
    );
}

export default LeftUsefulLinks;