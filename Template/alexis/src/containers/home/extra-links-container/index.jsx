import ExtraLink from "../../../components/extra-link";
import {React,useEffect, useState }  from "react";

const ExtraLinksContainer = () => {
    const [data, setData] = useState({});
    useEffect(() => {
        async function getAjaxApiData() {
            const postBody = {
                Pagina:"Home",
                Lingua:"IT"
            };
            const settings = {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(postBody)
            };
            const response = await fetch(`http://treppiweb-002-site1.htempurl.com/api/SubMenus`, settings);
            const responseJson = await response.json();
            setData(responseJson.results);
        }

        getAjaxApiData();
        }, []);
    return (
        <div className="row extra-links-background justify-content-around align-items-center py-5 container-home">
            {
            data.map((text, key) => {
                return (
                    <ExtraLink className="col" icon={text.Icon} title={text.Title} desc={text.Desc} id={text.Id} key={key}></ExtraLink>
                )
            })
            }
        </div>
    );
};

export default ExtraLinksContainer;