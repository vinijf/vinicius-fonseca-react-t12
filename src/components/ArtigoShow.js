import React, { useEffect, useState } from "react";
import { Prompt } from "react-router-dom";
import ArtigoApi from "../api/ArtigoApi";

function ArtigoShow({ artigo, titulo, match }) {
  const [artigoShow, setArtigoShow] = useState(artigo);
  const [tituloDetalhe, setTituloDetalhe] = useState(titulo);

  // 2) executa depois de mount
  useEffect(() => {
    // origem: codigo da rota
    if (match) {
      setTituloDetalhe("Produto Detalhe Por Rota");
      let idArtigo = +match.params.id;
      ArtigoApi.getByCodigo(idArtigo).then((response) => {
        setArtigoShow(response.data);
      });
    } else {
      // origem: prop artigo
      setArtigoShow(artigo);
      setTituloDetalhe(titulo);
    }
  }, [artigo, match]);

  // 1) render
  return (
    <>
      <h1>Produto Detalhe</h1>
      {artigoShow && (
        <div className="card">
          <div className="card-header">{tituloDetalhe}</div>
          <div className="card-body">
            <h5 className="card-title">{artigoShow.titulo_artigo}</h5>
            <h5 className="card-title">{artigoShow.autor_artigo}</h5>
            <p className="card-text">{artigoShow.texto_artigo}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default ArtigoShow;
