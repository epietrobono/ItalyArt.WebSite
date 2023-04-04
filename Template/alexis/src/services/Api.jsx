import axios from "axios";

// const baseUrl="http://treppiweb-002-site1.htempurl.com/";
const baseUrl="http://localhost:4439/";
const postBody = {
    Pagina:"",
    Lingua:"IT"
};

const Api = {
  GetSubmenus: async () => {
    const response = await axios.post(baseUrl+"api/SubMenus", postBody);
    return response.data.results;
  },
  GetTestiArticoli: async () => {
    const response = await axios.post(baseUrl+"api/TestiArticoli", postBody);
    return response.data.results;
  },
  GetCarouselModel3D: async () => {
    const response = await axios.post(baseUrl+"api/CarouselModel3D", postBody);
    return response.data.results;
  },
  GetCarouselModel360: async () => {
    const response = await axios.post(baseUrl+"api/CarouselTour360", postBody);
    return response.data.results;
  },
  GetCategorieHome: async () => {
    const response = await axios.post(baseUrl+"api/CategorieHome", postBody);
    return response.data.results;
  },
  GetCategorieIcons: async () => {
    const response = await axios.post(baseUrl+"api/CategorieIcons", postBody);
    return response.data.results;
  },
  GetMonuments3DHome: async () => {
    const response = await axios.post(baseUrl+"api/Monuments3DHome", postBody);
    return response.data.results;
  },
  GetBanner: async () => {
    const response = await axios.post(baseUrl+"api/Banner", postBody);
    return response.data.results;
  },
  GetNewsletter: async () => {
    const response = await axios.post(baseUrl+"api/Newsletter", postBody);
    return response.data.results;
  },
  GetMonuments360Home: async () => {
    const response = await axios.post(baseUrl+"api/Monuments360Home", postBody);
    return response.data.results;
  },
  GetMonuments: async (category,research) => {
    postBody.Category=category;
    postBody.Search=research;
    const response = await axios.post(baseUrl+"api/Monuments", postBody);
    return response.data.results;
  },
  GetMapMonuments: async (category,search,NELat,NELon,SWLat,SWLon) => {
    postBody.Category=category;
    postBody.Search=search;
    postBody.NELat=NELat;
    postBody.NELon=NELon;
    postBody.SWLat=SWLat;
    postBody.SWLon=SWLon;
    const response = await axios.post(baseUrl+"api/MapMonuments", postBody);
    return response.data.results;
  },
  GetHeader: async () => {
    const response = await axios.post(baseUrl+"api/Header", postBody);
    return response.data.results;
  },
  GetFooter: async () => {
    const response = await axios.post(baseUrl+"api/Footer", postBody);
    return response.data.results;
  },
  GetMonumentPageText: async () => {
    const response = await axios.post(baseUrl+"api/MonumentPageText", postBody);
    return response.data.results;
  },
  GetBlogArticoliHome: async () => {
    const response = await axios.post(baseUrl+"api/BlogArticoliHome", postBody);
    return response.data.results;
  },
  GetMonument: async (id, keyword) => {
    postBody.Id=id;
    postBody.Keyword=keyword;
    const response = await axios.post(baseUrl+"api/Monument", postBody);
    return response.data.results;
  },
  GetArticolo: async (id, keyword) => {
    postBody.Id=id;
    postBody.Keyword=keyword;
    const response = await axios.post(baseUrl+"api/Articolo", postBody);
    return response.data.results;
  }
}


export default Api;