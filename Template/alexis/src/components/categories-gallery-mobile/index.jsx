import PropTypes from "prop-types";
import Image from 'react-bootstrap/Image';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import { Link } from "react-router-dom";


function CategoriesGallery({ data }) {
    var i=1;
    return(
        <div className="category-gallery-mobile">
            <ScrollMenu>
                {
                    data.map((image, key) => {
                        return(
                        <div key={key}>
                            <Link to={process.env.PUBLIC_URL + image.Url}>
                                <Image rounded className="d-block w-100 shadow img-category-mobile" src={process.env.PUBLIC_URL + image.Path}></Image>
                                <div className="overlay-category w-100"></div>
                                <h5 className="category-name text-center">{image.Name}</h5>
                            </Link>
                        </div>
                        )
                    })
                }
            </ScrollMenu> 
        </div>
    );
}

CategoriesGallery.propTypes = {
    data: PropTypes.array,
}

export default CategoriesGallery;