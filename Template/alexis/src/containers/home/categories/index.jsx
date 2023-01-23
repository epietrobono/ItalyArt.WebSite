import CategoriesGallery from "../../../components/categories-gallery";
import CategoriesData from "../../../data/categories.json";

const CategoriesContainer = () => {
    return (
    <div className="d-flex flex-column section-margin">
        <h2 className="text-center">{CategoriesData.it.title}</h2>
        <span className="text-center">{CategoriesData.it.desc}</span>
        <CategoriesGallery data={CategoriesData.it.categories}></CategoriesGallery>
    </div>
    );
};

export default CategoriesContainer;