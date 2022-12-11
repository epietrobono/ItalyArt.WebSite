import PropTypes from "prop-types";
import Image from 'react-bootstrap/Image';

function ArticleContent ({data}) {
    return (
        <div className="row justify-content-center" >
            <Image rounded className="shadow" alt={data.image.alt} src={process.env.PUBLIC_URL + data.image.path}></Image>
            <h6>{data.title}</h6>
            <strong>{data.subtitle}</strong>
            <p>{data.content}</p>
        </div>
    );
}

ArticleContent.propTypes = {
    data: PropTypes.object,
};

export default ArticleContent;