import React from "react";
import { FlatList } from "react-native";

import ItemServicos from "../../componentes/ItemServicos";

const servicos = [
  {
    id: 1,
    nome: "Banho",
    preco: 35.0,
    descricao: "Shampoo, perfume e acessório.",
  },
  {
    id: 2,
    nome: "Tosa com máquina",
    preco: 60.0,
    descricao: "Tosa o pelo bem curtinho.",
  },
  {
    id: 3,
    nome: "Tosa com tesoura",
    preco: 75.0,
    descricao: "Apara o pelo e é possível estilizar.",
  },
  {
    id: 4,
    nome: "Banho e tosa com máquina",
    preco: 80.0,
    descricao: "Banho padrão e tosa com máquina, deixando o pelo bem curtinho.",
  },
  {
    id: 5,
    nome: "Banho e tosa com tesoura",
    preco: 95.0,
    descricao:
      "Banho padrão e tosa com tesoura, podendo aparar e estilizar o pelo.",
  },

  {
    id: 6,
    nome: "Vacina V4",
    preco: 85.5,
    descricao: "Esta vacina protege os gatos contra Complexo da Gripe Felina.",
  },
  {
    id: 7,
    nome: "Vacina antirrábica",
    preco: 50.0,
    descricao:
      "Prevene que o seu gato pegue raiva. Deve ser aplicada anualmente.",
  },
];

export default function Servicos() {
  return (
    <>
      <FlatList
        data={servicos}
        removeClippedSubviews={false}
        renderItem={({ item }) => <ItemServicos {...item} />}
        keyExtractor={({ id }) => String(id)}
      />
    </>
  );
}
