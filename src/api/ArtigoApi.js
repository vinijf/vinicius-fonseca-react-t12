import Axios from "axios";

class ArtigoApi {
    static baseUrl = "http://localhost:8888";
  
    static getAll() {
      return Axios.get(`${this.baseUrl}/Artigos`);
    }
  
    static getById(id) {
      return Axios.get(`${this.baseUrl}/Artigo/${id}`);
    }
  
    static add(Artigo) {
      return Axios.post(`${this.baseUrl}/Artigo`, Artigo);
    }
  }
  
  export default ArtigoApi;
  