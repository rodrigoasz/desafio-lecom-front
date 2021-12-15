import {
  TextField,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button
} from "@material-ui/core";
import React, { useState } from "react";

function FormularioPesquisa({aoEnviar}) {
  const [nome, setNome] = useState("");
  const [tipo, setTipo] = useState("usuario");
  const handleChange = (event) => {
    setTipo(event.target.value);
  };
  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      aoEnviar({nome,tipo});
      
    }}>

      <TextField
        value={nome}
        onChange={(event) => {
          setNome(event.target.value);
        }}
        id="pesquisa"
        label="Pesquisa"
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <FormLabel component="legend">Tipo de Pequisa</FormLabel>
      <RadioGroup
        row
        aria-label="pesquisa"
        name="row-radio-buttons-group"
        value={tipo}
        onChange={handleChange}
      >
        <FormControlLabel
          value="usuario"
          control={<Radio color="default" />}
          label="Usuário"
        />
        <FormControlLabel
          value="linguagem"
          control={<Radio color="default" />}
          label="Linguagem"
        />
        <FormControlLabel
          value="organizacao"
          control={<Radio color="default" />}
          label="Organização"
        />
      </RadioGroup>
      <Button type="submit" variant="contained" color="primary">
        Pesquisar
      </Button>
      
    </form>
  );
}
export default FormularioPesquisa;
