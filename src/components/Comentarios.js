import React, { useState, useEffect } from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Container from "@material-ui/core/Container";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import ComentarioApi from "../api/ComentarioApi";

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Comentarios() {

  const classes = useStyles();

  const [comentarios, setComentarios] = useState(undefined);

  useEffect(() => {
    var promise = ComentarioApi.getAll();
    promise
      .then((response) => {
        setComentarios(response.data);
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
      {comentarios && (
        <Container fixed>
          <React.Fragment>
            <h2>Comentários</h2>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Autor</TableCell>
                  <TableCell>Comentario</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {comentarios.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>{row.autor_comentario}</TableCell>
                    <TableCell>{row.texto_comentario}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </React.Fragment>
        </Container>
      )}
    </>
  );
}
