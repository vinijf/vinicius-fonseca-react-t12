import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import ComentarioApi from "../api/ComentarioApi";
import { toast } from "react-toastify";

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

export default function ComentarioCreate({ history, id }) {

  const classes = useStyles();

  const [errors, setErrors] = useState({});

  const [comentario, setcomentario] = useState({
    id: Math.floor(Math.random() * (1000000000000 - 0)) + 0,
    id_artigo: id,
    autor_comentario: "",
    texto_comentario: "",
  });

  function submitForm(event) {
    event.preventDefault();

    ComentarioApi.add(comentario)
      .then((response) => {
        window.location.reload(false);
        toast.success("comentario criado com sucesso!");
      })

      .catch((error) => {
        toast.error(`Erro: ${error}`);
      });
  }

  function changeHandler(event) {
    setErrors({});

    setcomentario({ ...comentario, [event.target.name]: event.target.value });
  }

  return (
    <>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Comente!
          </Typography>
          <form className={classes.form} onSubmit={submitForm}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="autor_comentario"
                  label="Autor"
                  type="text"
                  id="autor_comentario"
                  autoComplete="autor_comentario"
                  onChange={changeHandler}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  rowsMax={12}
                  multiline
                  variant="outlined"
                  required
                  name="texto_comentario"
                  label="Texto"
                  type="text"
                  id="texto_comentario"
                  autoComplete="texto_comentario"s
                  onChange={changeHandler}
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
              Comentar
            </Button>
          </form>
        </div>
      </Container>
    </>
  );
}
