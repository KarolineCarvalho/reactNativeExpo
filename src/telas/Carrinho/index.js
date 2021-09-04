import React from "react";
import { FlatList } from "react-native";

import Item from "../../componentes/ItemCarrinho";
import StatusCarrinho from "../../componentes/StatusCarrinho";

const servicos = [
  {
    id: 1,
    nome: "Banho",
    preco: 35.0,
    descricao: "Shampoo, perfume e acessório.",
    quantidade: 2,
  },
  {
    id: 2,
    nome: "Tosa com tesoura",
    preco: 75.0,
    descricao: "Apara o pelo e é possível estilizar.",
    quantidade: 2,
  },
  {
    id: 3,
    nome: "Vacina V4",
    preco: 85.5,
    descricao: "Esta vacina protege os gatos contra Complexo da Gripe Felina.",
    quantidade: 1,
  },
  {
    id: 4,
    nome: "Vacina antirrábica",
    preco: 50.0,
    descricao:
      "Prevene que o seu gato pegue raiva. Deve ser aplicada anualmente.",
    quantidade: 1,
  },
];

export default function Carrinho() {
  const total = servicos.reduce(
    (soma, { preco, quantidade }) => soma + preco * quantidade,
    0
  );

  return (
    <>
      <StatusCarrinho total={total} />
      <FlatList
        data={servicos}
        removeClippedSubviews={false}
        renderItem={({ item }) => <Item {...item} />}
        keyExtractor={({ id }) => String(id)}
      />
    </>
  );
}
