import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import ArtigoApi from "../api/ArtigoApi";
import { toast } from "react-toastify";

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
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function CreateOrUpdate({ history, match }) {
  
  const classes = useStyles();

  const [isEdit, setIsEdit] = useState(false);
  const [errors, setErrors] = useState({});

  const [artigo, setArtigo] = useState({
    titulo_artigo: "",
    autor_artigo: "",
    curtida_artigo: 0,
    texto_artigo: "",
  });

  useEffect(() => {
    if (match) {
      setIsEdit(true);
      let idArtigo = +match.params.id;
      ArtigoApi.getById(idArtigo).then((response) => {
        setArtigo(response.data);
      });
    }
  }, []);

  function submitForm(event) {
    event.preventDefault();
    if (!isEdit) {
      ArtigoApi.add(artigo)
        .then((response) => {
          history.push("/artigos");
          toast.success("Artigo criado com sucesso!");
        })

        .catch((error) => {
          toast.error(`Erro: ${error}`);
        });
    } else {
      ArtigoApi.edit(artigo)
        .then((response) => {
          history.push("/artigos");
          toast.success("Artigo editado com sucesso!");
        })

        .catch((error) => {
          toast.error(`Erro: ${error}`);
        });
    }
  }

  function changeHandler(event) {
    setErrors({});
    switch (event.target.name) {
      case "nome":
        if (event.target.value.length === 0)
          setErrors({ nome: "Nome é obrigatório" });
        break;
      default:
    }

    setArtigo({ ...artigo, [event.target.name]: event.target.value });
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Crie ou edite um artigo...
        </Typography>
        <form className={classes.form} onSubmit={submitForm}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="titulo_artigo"
                label="Título"
                type="text"
                id="titulo_artigo"
                autoComplete="titulo_artigo"
                value={artigo.titulo_artigo}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="autor_artigo"
                label="Autor"
                type="text"
                id="autor_artigo"
                autoComplete="autor_artigo"
                value={artigo.autor_artigo}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                rowsMax={12}
                multiline
                variant="outlined"
                required
                name="texto_artigo"
                label="Texto"
                type="text"
                id="texto_artigo"
                autoComplete="texto_artigo"
                value={artigo.texto_artigo}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Salvar
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link color="secondary" href="/artigos" variant="body2">
                Voltar
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
