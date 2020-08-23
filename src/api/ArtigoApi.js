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
  
    static edit(Artigo) {
      return Axios.put(`${this.baseUrl}/Artigo`, Artigo);
    }
  
    static delete(id) {
      return Axios.delete(`${this.baseUrl}/Artigo`);
    }
  }
  
  export default ArtigoApi;
  