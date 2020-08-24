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
import Curtias from "./Curtidas";
import Comentar from "./ComentarioCreate";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

export default function ArtigoShow({ artigo, match }) {
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
      flexGrow: 1,
    },
    main: {
      marginTop: theme.spacing(8),
      marginBottom: theme.spacing(2),
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
  }));

  const classes = useStyles();

  return (
    <>
      <Head />
      {artigoShow && (
        <div className={classes.root}>
          <CssBaseline />
          <Container component="main" className={classes.main} fixed>
            <Grid container spacing={2}>
              <Grid item xs={2}>
                <Paper className={classes.paper}>
                  <Curtias curtidas={artigoShow.curtida_artigo} />
                </Paper>
              </Grid>
              <Grid item xs>
                <Paper className={classes.paper}>
                  {" "}
                  <Typography variant="h2" component="h1" gutterBottom>
                    {artigoShow.titulo_artigo}
                  </Typography>
                  <Typography variant="body1">
                    {artigoShow.autor_artigo}
                  </Typography>
                  <Typography variant="h5" component="h2" gutterBottom>
                    {artigoShow.texto_artigo}
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </Container>
          <Container component="comentarios" className={classes.main} fixed>
            <Grid container spacing={2}>
              <Grid item xs={3}>
                <Paper className={classes.paper}>
                  <Comentar id={artigoShow.id} />
                </Paper>
              </Grid>
              <Grid item xs>
                <Paper className={classes.paper}>
                  <Comentarios id={artigoShow.id} />
                </Paper>
              </Grid>
            </Grid>
          </Container>
          <Footer />
        </div>
      )}
    </>
  );
}
