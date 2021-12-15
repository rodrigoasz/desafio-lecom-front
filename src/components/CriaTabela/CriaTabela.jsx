import React from "react";

import { Table } from "@material-ui/core";
import { TableBody } from "@material-ui/core";
import { TableCell } from "@material-ui/core";
import { TableContainer } from "@material-ui/core";
import { TableHead } from "@material-ui/core";
import { TableRow } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import { Link } from "@material-ui/core";

export default function CriaTable({ repositories, error }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 640 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell align="right">Descrição</TableCell>
            <TableCell align="right">Estrelas</TableCell>
            <TableCell align="right">Linguagem</TableCell>
            <TableCell align="right">Link</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {error ? (
            <TableRow>
              <TableCell>{error}</TableCell>
            </TableRow>
          ) : (
            repositories.map((repo) => (
              <TableRow
                key={repo.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    
              >
                <TableCell component="th" scope="row">
                  {repo.name}
                </TableCell>
                <TableCell align="right">{repo.description}</TableCell>
                <TableCell align="right">{repo.stargazers_count}</TableCell>
                <TableCell align="right">{repo.language}</TableCell>
                <TableCell align="right">
                  <Link href={repo.html_url} target="_blank">Link</Link>

                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
