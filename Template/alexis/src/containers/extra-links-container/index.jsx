import ExtraLink from "../../components/extra-link";
import ExtraLinksData from "../../data/extra-links.json";

const ExtraLinksContainer = () => {
    return (
        <div className="row extra-links-background justify-content-around align-items-center py-5">
            {
            ExtraLinksData.it.map((data, key) => {
                return (
                    <ExtraLink className="col" icon={data.icon} title={data.title} desc={data.desc} key={key}></ExtraLink>
                )
            })
            }
        </div>
    );
};

export default ExtraLinksContainer;