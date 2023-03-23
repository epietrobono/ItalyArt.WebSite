import PropTypes from "prop-types";
import Image from 'react-bootstrap/Image';
import { Link } from "react-router-dom";

function MonumentPreview ({data, preview=true, titleLocation=false}) {
    return (
        <div className="row-mod" >
            <div className="col col-auto card-mon-blog">
                <div className="row-mod ">
                    <Image rounded className="m-bott-card img-blog-mon" alt={data.image.alt} src={process.env.PUBLIC_URL + data.image.path}></Image>
                </div>
                <div className="row-mod blog-mon">
                    {
                        titleLocation ? <h4 className="monument-card-title  margin-title-article ">{data.title + " - " + data.location}</h4 > : <h4 className="monument-card-title margin-title-article">{data.title}</h4>
                    }
                    <strong>{data.subtitle}</strong>
                    {
                        preview ? <p className="mob-p">{data.preview}</p> : ""
                    }
                    
                    {
                        titleLocation ? "" : <p className="col col-auto mob-p">{data.location}</p>
                    }
                    <form className="btn-right" action={data.url}>
                        <Link
                            to={process.env.PUBLIC_URL + data.url}
                            className="col  botton-card col-auto btn btn-light border rounded-pill ms-2"
                        >
                            {data.buttonText}
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
}

MonumentPreview.propTypes = {
    data: PropTypes.object,
    preview: PropTypes.bool,
    titleLocation: PropTypes.bool,
};

export default MonumentPreview;