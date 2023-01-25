import PropTypes from "prop-types";
import Image from 'react-bootstrap/Image';
import { Link } from "react-router-dom";
import { ScrollMenu } from 'react-horizontal-scrolling-menu';


function CategoriesGallery({ data }) {
    var i=1;
    return(
            <ScrollMenu>
                {
                    data.map((image, key) => {
                        return(
                        <div key={key}>
                            <Link to={process.env.PUBLIC_URL + image.url}>
                                <Image rounded className="d-block w-100 shadow" src={process.env.PUBLIC_URL + image.path}></Image>
                                <h5 className="category-name text-center">{image.name}</h5>
                            </Link>
                        </div>
                        )
                    })
                }
            </ScrollMenu> 
    );
}

CategoriesGallery.propTypes = {
    data: PropTypes.array,
}

export default CategoriesGallery;