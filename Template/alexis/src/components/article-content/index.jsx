import PropTypes from "prop-types";
import Image from 'react-bootstrap/Image';

function ArticleContent ({data}) {
    return (
        <div className="row-mod justify-content-center" >
            <Image rounded className="shadow" alt={data.image.alt} src={process.env.PUBLIC_URL + data.image.path}></Image>
            <h6 className="title-blog-article-detail">{data.title}</h6>
            <strong className="strong-blog-article-detail">{data.subtitle}</strong>
            <p className="p-blog-article">{data.content}</p>
        </div>
    );
}

ArticleContent.propTypes = {
    data: PropTypes.object,
};

export default ArticleContent;