import PropTypes from "prop-types";
import Image from 'react-bootstrap/Image';

function ArticleContent ({data}) {
    return (
        <div className="row-mod justify-content-center" >
            <Image rounded className="shadow" alt={data?.Image?.Alt} src={process.env.PUBLIC_URL + data?.Image?.Path}></Image>
            <h6 className="title-blog-article-detail">{data.Title}</h6>
            <strong className="strong-blog-article-detail">{data.Subtitle}</strong>
            <p className="p-blog-article">{data.Content}</p>
        </div>
    );
}

ArticleContent.propTypes = {
    data: PropTypes.object,
};

export default ArticleContent;