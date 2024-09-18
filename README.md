# Cognyshoes 

## Tecnologias Utilizadas

- **React Native com Expo**
- **Redux** com **Redux Toolkit** (mobile)
- **Firebase Firestore**
- **Styled-components** (mobile & web)
- **React Router**
- **ReactJS**

## Funcionalidades Desenvolvidas

1. **Listagem de produtos**:
   - Os dados são consumidos do Firebase Firestore, onde foram cadastrados 10+ produtos com descrição, preço e imagem.
   
2. **Carrinho de compras**:
   - O usuário pode adicionar produtos ao carrinho a partir da listagem.
   - O mesmo produto não pode ser adicionado mais de uma vez.
   - A quantidade de itens no carrinho pode ser ajustada.
   
3. **Finalização de pedido**:
   - Após finalizar o pedido, o usuário recebe um alerta de confirmação.
   - Os produtos do carrinho são removidos, liberando-o para novas compras.

## Desafio Implementado

   - Foi implementado uma coleção adicional no Firestore que registra os pedidos do usuário.
   - Foi criada uma coleção adicional no Firestore para **salvar os pedidos comprados separadamente**, utilizando UUIDs para identificar cada pedido de forma única.
   - Essa abordagem permite manter um registro detalhado de cada compra, o que facilita a gestão de pedidos e o histórico de compras dos usuários.

## Instalação e Execução

1. **Instale as dependências**:
   - Para a versão **web**, rode:

     ```bash
     npm install
     ```

   - Para a versão **mobile**, use:

     ```bash
     yarn install
     ```

2. **Configure suas credenciais do Firebase**:
   - Crie um arquivo `.env` na raiz do projeto e adicione suas credenciais do Firebase.

3. **Para rodar o projeto**:
   - Na versão **web**, execute:

     ```bash
     npm start
     ```

   - Na versão **mobile**:

     ```bash
     npx expo start
     ```
