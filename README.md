# Teste Prático - SEIDOR
Este teste consiste na criação de um sistema que lista e calcula o IRRF dos funcionários cadastrados.

## Instalação
Para instalar o projeto basta cloná-lo em uma pasta `git clone git@github.com:jpbahiaz/seidor-test.git` e rodar o comando `npm install` para instalar as dependências. Tenha certeza de que você possui o [npm e o Node.js](https://www.npmjs.com/get-npm) instalados em sua máquina!

## Scripts
- `npm start`: Inicie o projeto em modo de desenvolvimento
- `npm test`: Execute todos os testes
- `npm run test:watch`: Execute todos os testes e mantenha o jest escutando mudanças nos arquivos
- `npm run test:verbose`: Execute todos os testes e veja a descrição de cada teste

## Considerações
### webpack
Resolvi utilizar o [Webpack](https://webpack.js.org/) para realizar o bundle do projeto. Levando em consideração que o projeto é um sistema que poderá ser extendido com outros módulos, considerei a melhor escolha o webpack. Caso a aplicação fosse somente um parte de outro sistema teria optado pelo [Rollup](https://rollupjs.org/) para bundles dedicados para libs.

### Redux
Para a modelagem do Redux decidi utilizar a estratégia de [normalização de estado](https://redux.js.org/recipes/structuring-reducers/normalizing-state-shape). Esta estratégia facilita muito o manuseio de dados para atualização [inserção e destruição de entidades](https://redux.js.org/recipes/structuring-reducers/updating-normalized-data).

Em relação à nomeação das actions e das action types eu levei em conta [este](https://redux.js.org/style-guide/style-guide#model-actions-as-events-not-setters) artigo da documentação do redux que recomenda o tratamento das actions como eventos.

### Validações e máscaras
Criei máscaras para a exposição dos dados. Entretando para o caso específico do cpf decidi utilizar a lib [gerador-validador-cpf](https://github.com/tiagoporto/gerador-validador-cpf) que auxiliou na verificação se os cpfs inserido nos inputs eram válidos ou não.