import Axious from "axios";

class ComentarioApi {
    static baseUrl = "http://localhost:8888";
  
    static getAll() {
      return Axios.get(`${this.baseUrl}/Comentarios`);
    }
   
    static add(Comentario) {
      return Axios.post(`${this.baseUrl}/Comentario`, Comentario);
    }
  
    static delete(id) {
      return Axios.delete(`${this.baseUrl}/Comentario`);
    }
  }
  
  export default ComentarioApi;
  