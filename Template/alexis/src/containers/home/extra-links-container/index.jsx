import ExtraLink from "../../../components/extra-link";
import Api from "../../../services/Api";
import {React, useEffect, useState }  from "react";

const ExtraLinksContainer = () => {
    const extraLinks=Api.GetSubmenus();
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