import React, { useEffect, useState } from "react";
import ExtraLink from "../../../components/extra-link";
import Api from "../../../services/Api";

const ExtraLinksContainer = () => {
    const [extraLinks, setExtraLinks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const data = await Api.GetSubmenus()
            setExtraLinks(data);
            setIsLoading(false);
        }
        fetchData();
    }, []);

    return (
        <div className="row extra-links-background justify-content-around align-items-center py-5 container-home">
            { !isLoading && 
            extraLinks?.map((text, key) => {
                return (
                    <ExtraLink className="col" icon={text.Icon} title={text.Title} desc={text.Desc} id={text.Id} key={key}></ExtraLink>
                )
            })
            }
        </div>
    );
};

export default ExtraLinksContainer;