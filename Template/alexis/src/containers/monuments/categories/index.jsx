import CategoryIcon from "../../../components/category-icon";
import CategoriesData from "../../../data/categories-icon.json";

function CategoriesContainer() {
    const data = CategoriesData.it.categories;
    return (
        <div className="categories cat-manuments row justify-content-center">
            {
                data.map((val, key)=>{
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

export default CategoriesContainer;