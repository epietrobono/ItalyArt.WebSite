import axios from "axios";

const postBody = {
    Pagina:"Home",
    Lingua:"IT"
};

const Api = {
  GetSubmenus: async () => {
    const response = await axios.post("http://treppiweb-002-site1.htempurl.com/api/SubMenus", postBody);
    return response.data.results;
  }
}


export default Api;