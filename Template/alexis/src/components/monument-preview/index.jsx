import PropTypes from "prop-types";
import Image from 'react-bootstrap/Image';
import { Link } from "react-router-dom";

function MonumentPreview ({data, preview=true, titleLocation=false}) {
    return (
        <div className="row-mod" >
            <div className="col col-auto card-mon-blog">
                <div className="row-mod ">
                    <Image rounded className="m-bott-card img-blog-mon" alt={data.Image.Alt} src={process.env.PUBLIC_URL + data.Image.Path}></Image>
                </div>
                <div className="row-mod blog-mon">
                    {
                        titleLocation ? <h4 className="monument-card-title  margin-title-article ">{data.Title + " - " + data.Location}</h4 > : <h4 className="monument-card-title margin-title-article">{data.Title}</h4>
                    }
                    <strong>{data.Subtitle}</strong>
                    {
                        preview ? <p className="mob-p">{data.Preview}</p> : ""
                    }
                    
                    {
                        titleLocation ? "" : <p className="col col-auto mob-p">{data.Location}</p>
                    }
                    <form className="btn-right" action={data.Url}>
                        <Link
                            to={process.env.PUBLIC_URL + data.Url}
                            className="col  botton-card col-auto btn btn-light border rounded-pill ms-2"
                        >
                            {data.ButtonText}
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