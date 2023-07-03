import React, { useState } from "react";
import { TextField, Button, Card, Grid, CardContent, Container} from "@mui/material";
import PhraseCard from "./components/Card/PhraseCard";

type Phrase = {
  id: number;
  text: string;
};

const colors = [
  "#A8E6CF",
  "#DCE774",
  "#FFD3B5",
  "#FFAAA6",
  "#FF8C94",
  "#D5E4A2",
  "#FF9B85",
  "#D4A5A5",
  "#D47585",
  "#645986",
  "#83677B",
  "#6EAF9B",
  "#F8B195",
  "#F67280",
  "#F8C595",
  "#C06C84",
  "#6C5B7B",
  "#355C7D",
  "#99B898",
  "#FECEAB",
];

function App() {
  const [phrases, setPhrases] = useState<Phrase[]>([]);
  const [input, setInput] = useState<string>("");
  const [inputIsValid, setInputIsValid] = useState<boolean>(true);
  const [filter, setFilter] = useState<string>("");

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
    if (event.target.value.trim().length === 0) {
      setInputIsValid(false);
    } else {
      setInputIsValid(true);
    }
  };

  const addPhrase = () => {
    if (input.trim().length > 0) {
      const newPhrase: Phrase = {
        id: Math.random(),
        text: input,
      };

      setPhrases((prevPhrases) => [...prevPhrases, newPhrase]);
      setInput("");
    } else {
      setInputIsValid(false);
    }
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  };

  const filteredPhrases = phrases.filter((phrase) =>
    phrase.text.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Container maxWidth="md">
      <div className="App">
        <TextField
          label="Agregue una frase"
          variant="outlined"
          onChange={handleInput}
          value={input}
          fullWidth
          margin="normal"
        />
        <Button
          variant="contained"
          color="primary"
          onClick={addPhrase}
          style={{ marginBottom: "20px" }}
        >
          Agregue su frase
        </Button>
        {!inputIsValid && (
          <p>La frase a agregar tiene que contener al menos un caracter</p>
        )}
        <TextField
          label="Busque una frase"
          variant="outlined"
          onChange={handleSearch}
          fullWidth
          margin="normal"
        />

        <Grid container spacing={3}>
          {filteredPhrases.map((phrase, index) => (
            <Grid item xs={12} sm={6} md={4} key={phrase.id} data-testid="phrase-card-grid-item">
              <PhraseCard
                text={phrase.text}
                color={colors[index % colors.length]}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    </Container>
  );
}

export default App;
