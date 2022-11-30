import PropTypes from "prop-types";
import Image from 'react-bootstrap/Image';
import { Link } from "react-router-dom";

function activateCategory(key){
    var categoryPhoto;
    for (let i = 0; i < 5; i++) {
        categoryPhoto = document.getElementById("category-photo-" + i);
        categoryPhoto.classList.replace(categoryPhoto.classList[categoryPhoto.classList.length -1], "zoom-" + (Math.abs(i-key)));
    }
}

function CategoriesGallery({ data }) {
    return(
        <div className="row justify-content-center categories py-4">
            {
                data.map((image, key) => {
                    return (
                        <div role="button" tabIndex={key} key={key}
                            id={"category-photo-" + key}
                            className={"col category zoom-" + Math.abs(key - 2)}
                            onMouseOver={() => { activateCategory(key) }}
                            onFocus={() => { console.log(key) }}
                        >
                            <Link to={process.env.PUBLIC_URL + image.url}>
                                <Image rounded className="shadow" src={process.env.PUBLIC_URL + image.path}></Image>
                                <h5 className="category-name text-center">{image.name}</h5>
                            </Link>
                        </div>
                    )
                })
            }
        </div>
    );
}

CategoriesGallery.propTypes = {
    data: PropTypes.array,
}

export default CategoriesGallery;