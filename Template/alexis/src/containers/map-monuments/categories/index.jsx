import PropTypes from "prop-types";
import React from "react";
import CategoryIcon from "../../../components/category-icon";

function CategoriesContainer({ categories, isLoading }) {
    return (
        <div className="icon-list-category">
            <div className="list categories cat-manuments row">
                {!isLoading &&
                    categories.map((val, key) => {
                        return (
                            <div className="element-list-category" key={key}>
                                <CategoryIcon data={val}></CategoryIcon>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
}

CategoriesContainer.propTypes = {
    categories: PropTypes.array,
    isLoading: PropTypes.bool,
};

export default CategoriesContainer;
