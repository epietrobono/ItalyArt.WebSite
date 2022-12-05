import WhoData from "../../../data/who.json";
import { Link } from "react-router-dom";

const WhoContainer = ()=>{
    const data = WhoData.it;
    return (
        <div className="who">
            <div className="row justify-content-center text-center">
                <div className="col col-5">
                    <h1 className="title">{data.title}</h1>
                    <p>{data.desc}</p>
                    <form action={data.url}>
                        <Link
                            to={process.env.PUBLIC_URL + data.url}
                            className="col col-auto btn btn-light border rounded-pill ms-2"
                        >
                            {data.buttonText}
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );

};

export default WhoContainer;