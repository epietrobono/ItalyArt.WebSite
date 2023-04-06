import PropTypes from "prop-types";
import React, { useContext } from "react";
import { Helmet } from "react-helmet";

const SEO = ({ title, description, keywords }) => {

    const selectedLanguage  =  localStorage.getItem("selectedLanguage")
    return (
        <Helmet>
            <html lang={selectedLanguage} />
            <meta charSet="utf-8" />
            <title>{title}</title>
            <meta name="robots" content="noindex, follow" />
            {description && <meta name="description" content={description} />}
            {keywords && <meta name="keywords" content={keywords} />}
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1, shrink-to-fit=no"
            />
        </Helmet>
    );
};

SEO.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    keywords: PropTypes.string,
};

export default SEO;
