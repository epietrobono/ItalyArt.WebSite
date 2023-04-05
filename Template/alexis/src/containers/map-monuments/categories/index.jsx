import React from "react";
import PropTypes from "prop-types";
import CategoryIcon from "../../../components/category-icon";

function CategoriesContainer({categories, isLoading }) {    
    return (
        <div className="categories cat-manuments row justify-content-center">
            {!isLoading && 
                categories.map((val, key)=>{
                    return (
                        <div className="col col-1" key={key}>
                            <CategoryIcon data={val}></CategoryIcon>
                        </div>
                    )
                })
            }
        </div>
    );
}

CategoriesContainer.propTypes = {
    categories: PropTypes.array,
    isLoading: PropTypes.bool
};

export default CategoriesContainer;