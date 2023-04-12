import axios from "axios";

const baseUrl = "http://treppiweb-002-site1.htempurl.com/";
// const baseUrl = "http://localhost:4439/";
const instance = axios.create();

instance.interceptors.request.use((config) => {
    const selectedLanguage = localStorage.getItem("selectedLanguage");
    if (config.data) {
        config.data.Lingua = selectedLanguage;
    } else {
        config.data = { Lingua: selectedLanguage };
    }
    return config;
});
// const postBody = {
//     Pagina:"",
//     Lingua: selectedLanguage ? selectedLanguage: "IT"
// };

const Api = {
    CheckPath: async (url) => {
        const postBody = { Url: url };
        const response = await instance.post(
            baseUrl + "api/CheckPath",
            postBody
        );
        return response.data.results;
    },
    AddNewsletter: async (email) => {
        const postBody = { Email: email };
        const response = await instance.post(
            baseUrl + "api/AddNewsletter",
            postBody
        );
        return response.data.results;
    },
    GetSubmenus: async () => {
        const response = await instance.post(baseUrl + "api/SubMenus");
        return response.data.results;
    },
    GetTestiArticoli: async () => {
        const response = await instance.post(baseUrl + "api/TestiArticoli");
        return response.data.results;
    },
    GetCarouselModel3D: async () => {
        const response = await instance.post(baseUrl + "api/CarouselModel3D");
        return response.data.results;
    },
    GetCarouselModel360: async () => {
        const response = await instance.post(baseUrl + "api/CarouselTour360");
        return response.data.results;
    },
    GetCategorieHome: async () => {
        const response = await instance.post(baseUrl + "api/CategorieHome");
        return response.data.results;
    },
    GetCategorieIcons: async () => {
        const response = await instance.post(baseUrl + "api/CategorieIcons");
        return response.data.results;
    },
    GetMonuments3DHome: async () => {
        const response = await instance.post(baseUrl + "api/Monuments3DHome");
        return response.data.results;
    },
    GetBanner: async () => {
        const response = await instance.post(baseUrl + "api/Banner");
        return response.data.results;
    },
    GetNewsletter: async () => {
        const response = await instance.post(baseUrl + "api/Newsletter");
        return response.data.results;
    },
    GetMonuments360Home: async () => {
        const response = await instance.post(baseUrl + "api/Monuments360Home");
        return response.data.results;
    },
    GetMonuments: async (category, research, currentPage) => {
        const postBody = {
            Category: category,
            Search: research,
            Page: currentPage,
        };
        const response = await instance.post(
            baseUrl + "api/Monuments",
            postBody
        );
        return response.data.results;
    },
    GetMapMonuments: async (category, search, NELat, NELon, SWLat, SWLon) => {
        const postBody = {
            Category: category,
            Search: search,
            NELat: NELat,
            NELon: NELon,
            SWLat: SWLat,
            SWLon: SWLon,
        };
        const response = await instance.post(
            baseUrl + "api/MapMonuments",
            postBody
        );
        return response.data.results;
    },
    GetHeader: async () => {
        const response = await instance.post(baseUrl + "api/Header");
        return response.data.results;
    },
    GetFooter: async () => {
        const response = await instance.post(baseUrl + "api/Footer");
        return response.data.results;
    },
    GetMonumentPageText: async () => {
        const response = await instance.post(baseUrl + "api/MonumentPageText");
        return response.data.results;
    },
    GetBlogArticoliHome: async () => {
        const response = await instance.post(baseUrl + "api/BlogArticoliHome");
        return response.data.results;
    },
    GetMonument: async (id, keyword) => {
        const postBody = { Id: id, Keyword: keyword };
        const response = await instance.post(
            baseUrl + "api/Monument",
            postBody
        );
        return response.data.results;
    },
    GetArticolo: async (id, keyword) => {
        const postBody = { Id: id, Keyword: keyword };
        const response = await instance.post(
            baseUrl + "api/Articolo",
            postBody
        );
        return response.data.results;
    },
    GetMapTextHome: async () => {
        const response = await instance.post(baseUrl + "api/MapHomeText");
        return response.data.results;
    },
};

export default Api;
