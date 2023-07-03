import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  test('agrega una nueva frase al hacer clic en el botón "Agregue su frase"', () => {
    const { getByLabelText, getByText } = render(<App />);

    const input = getByLabelText("Agregue una frase");
    const addButton = getByText("Agregue su frase");

    // Simular la entrada del usuario
    fireEvent.change(input, { target: { value: "Nueva frase de prueba" } });

    // Simular hacer clic en el botón "Agregue su frase"
    fireEvent.click(addButton);

    // Verificar si la frase agregada está presente en la interfaz
    expect(getByText("Nueva frase de prueba")).toBeInTheDocument();
  });

  test("no agregar frase vacía al hacer clic en el botón 'Agregue su frase'", async () => {
    const { getByLabelText, getByText, queryByText } = render(<App />);

    const input = getByLabelText("Agregue una frase");
    const addButton = getByText("Agregue su frase");

    fireEvent.change(input, { target: { value: "" } });
    fireEvent.click(addButton);

    expect(getByText("La frase a agregar tiene que contener al menos un caracter")).toBeInTheDocument();

    const phraseCardGridItems = await screen.queryAllByTestId('phrase-card-grid-item');
    expect(phraseCardGridItems).toHaveLength(0);
  });


  test("filtra las frases al ingresar texto en el campo de búsqueda", () => {
    const { getByLabelText, getByText, queryByText } = render(<App />);
    const addInput = getByLabelText('Agregue una frase');
    const addButton = getByText('Agregue su frase');
    const searchInput = getByLabelText('Busque una frase');

    fireEvent.change(addInput, { target: { value: 'Hello, World!' } });
    fireEvent.click(addButton);
    fireEvent.change(addInput, { target: { value: 'Another phrase' } });
    fireEvent.click(addButton);

    fireEvent.change(searchInput, { target: { value: 'Hello, World!' } });

    expect(getByText('Hello, World!')).toBeInTheDocument();
    expect(queryByText('Another phrase')).toBeNull();
  });
});