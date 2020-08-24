import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import ArtigoApi from "../api/ArtigoApi";
import { toast } from "react-toastify";
import Head from "./Head";
import Footer from "./Footer";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

export default function Artigos() {
  const classes = useStyles();

  // useState => cria novo state
  const [artigos, setArtigos] = useState(undefined);

  useEffect(() => {
    var promise = ArtigoApi.getAll();
    promise
      .then((response) => {
        setArtigos(response.data);
      })
      .catch((error) => {
        toast.error("Erro: " + error);
      });

    return () => {
      // componentDidUnmount()
    };
  }, []);

  return (
    <>
      {artigos && (
        <>
          <React.Fragment>
            <CssBaseline />
            <Head />
            <main>
              <Container className={classes.cardGrid} maxWidth="md">
                {/* End hero unit */}
                <Grid container spacing={4}>
                  {artigos.map((card) => (
                    <Grid item key={card} xs={12} sm={6} md={4}>
                      <Card className={classes.card}>
                        <CardMedia
                          className={classes.cardMedia}
                          image="https://source.unsplash.com/random"
                          title="Image title"
                        />
                        <CardContent className={classes.cardContent}>
                          <Typography gutterBottom variant="h5" component="h2">
                            {card.titulo_artigo}
                          </Typography>
                          <Typography gutterBottom variant="h6" component="h2">
                            {card.autor_artigo}
                          </Typography>
                          <Typography numberOfLines={1}>
                            {card.texto_artigo.length < 35
                              ? `${card.texto_artigo}`
                              : `${card.texto_artigo.substring(0, 32)}...`}
                          </Typography>
                        </CardContent>
                        <CardActions>
                          <Button size="small" color="primary">
                            View
                          </Button>
                        </CardActions>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Container>
            </main>
            {/* Footer */}
            <Footer />
            {/* End footer */}
          </React.Fragment>
        </>
      )}
    </>
  );
}
