import PropTypes from "prop-types";
import Image from 'react-bootstrap/Image';
import { Link } from "react-router-dom";

function ArticlePreview ({data, horizontal=false}) {
    if (horizontal) {
        return (
            <div className="row justify-content-center" >
                <div className="col col-3">
                    <Image rounded className="shadow" alt={data.image.alt} src={process.env.PUBLIC_URL + data.image.path}></Image>
                </div>
                <div className="col col-5">
                <h6 className="title-blog-article">{data.title}</h6>
                        <strong className="strong-blog-article">{data.subtitle}</strong>
                        <p className="p-blog-article">{data.preview}</p>
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
        );
    } else {
        return (
            <div className="row" >
                <div className="col col-auto">
                    <div className="img-prew">
                        <Image rounded className="shadow" alt={data.image.alt} src={process.env.PUBLIC_URL + data.image.path}></Image>
                    </div>
                    <div className="row text-article-space">
                        <h6 className="title-blog-article">{data.title}</h6>
                        <strong className="strong-blog-article">{data.subtitle}</strong>
                        <p className="p-blog-article">{data.preview}</p>
                        <form action={data.url}>
                            <Link
                                to={process.env.PUBLIC_URL + data.url}
                                className="col space-botton-article col-auto btn btn-light border rounded-pill ms-2"
                            >
                                {data.buttonText}
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

ArticlePreview.propTypes = {
    data: PropTypes.object,
    horizontal: PropTypes.bool,
};

export default ArticlePreview;