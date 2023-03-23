import ExtraLink from "../../../components/extra-link";
import Api from "../../../services/Api";
import React, { useState, useEffect } from "react";

const ExtraLinksContainer = () => {
    const [extraLinks, setExtraLinks] = useState([]);
    const [isMounted5, setIsMounted5] = useState(false);

    useEffect(() => {
        console.log("entro in useEffects");
        setIsMounted5(true);
        Api.GetSubmenus().then((data) => {
        
        console.log("esegue then");
        setExtraLinks(data);
      });
    }, []);

    if (!isMounted5) {
        return null; // non renderizzare il componente fino a quando non è montato
      }
    console.log(extraLinks);
    return (
        <div className="row extra-links-background justify-content-around align-items-center py-5 container-home">
            {
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