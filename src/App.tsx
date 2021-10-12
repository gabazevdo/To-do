import React, { useState } from "react";
import { Container, Area, Header } from "./App.styles";
import { Item } from "./types/item";

import ListItem from "./components/ListItem";
import AddArea from "./components/AddArea";

const App = () => {
  const [list, setList] = useState<Item[]>([
    { id: 1, name: "Estudo React com professor Bonieky", done: false },
    { id: 2, name: "Adquirir novos conhecimentos através dessa semana", done: false },
  ]);

  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false,
    });
    setList(newList);
  };

  return (
    <Container>
      <Area>
        <Header>Lista de Tarefas </Header>
        <AddArea onEnter={handleAddTask} />
        {list.map((item, index) => (
          <div>
            <ListItem key={index} item={item} />
          </div>
        ))}
      </Area>
    </Container>
  );
};

export default App;
