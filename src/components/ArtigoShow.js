import React, { useEffect, useState, component } from "react";
import { Prompt } from "react-router-dom";
import ArtigoApi from "../api/ArtigoApi";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import Comentarios from "./Comentarios";
import Head from "./Head";
import Footer from "./Footer";
import Votos from "./Votos";

export default function ArtigoShow({ artigo, titulo, match }) {
  const [artigoShow, setArtigoShow] = useState(artigo);

  // 2) executa depois de mount
  useEffect(() => {
    // origem: codigo da rota
    if (match) {
      let idArtigo = +match.params.id;
      ArtigoApi.getById(idArtigo).then((response) => {
        setArtigoShow(response.data);
      });
    } else {
      // origem: prop artigo
      setArtigoShow(artigo);
    }
  }, [artigo, match]);

  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh",
    },
    main: {
      marginTop: theme.spacing(8),
      marginBottom: theme.spacing(2),
    },
  }));

  const classes = useStyles();

  return (
    <>
      <Head />
      {artigoShow && (
        <div className={classes.root}>
          <CssBaseline />
          <Container component="main" className={classes.main} maxWidth="sm">
            <Votos votos={artigoShow.curtida_artigo} />
            <Typography variant="h2" component="h1" gutterBottom>
              {artigoShow.titulo_artigo}
            </Typography>
            <Typography variant="body1">{artigoShow.autor_artigo}</Typography>
            <Typography variant="h5" component="h2" gutterBottom>
              {artigoShow.texto_artigo}
            </Typography>
          </Container>
          <Comentarios />
          <Footer />
        </div>
      )}
    </>
  );
}
