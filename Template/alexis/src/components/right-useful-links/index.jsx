import { Link } from "react-router-dom";
import SocialLogo from "../social-logo";

function RightUsefulLinks() {
    return (
        <ul>
            <div style={{height: "170px"}}></div>
            <h3>Link Utili</h3>
            <li>
                <Link
                    to={
                        process.env.PUBLIC_URL + "/about"
                    }
                >
                    Chi Siamo
                </Link>
            </li>
            <li>
                <Link
                    to={
                        process.env.PUBLIC_URL + "/info"
                    }
                >
                    ItalyArt.info
                </Link>
            </li>
            <li>
                <div className="row align-items-start justify-content-between">
                    <SocialLogo className="col" social="instagram"></SocialLogo>
                    <SocialLogo className="col" social="facebook"></SocialLogo>
                </div>
            </li>
        </ul>
    );
}

export default RightUsefulLinks;