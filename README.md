# Projetor Contador com estado "Global".

Este projeto surge com estudo de como resolver o problema de passagem de estado de um componente para outro,Uma das formas de se fazer a passagem é a seguinte:
 ## De pai para o filho,
  o pais passa  Atributos -> e o filho recebe Props;
 ##  De Filho para pai, 
 o pai passa callbacks como Atributos -> e o Filho recebe e excuta as callbacks.

   Nessa situação o Estado e funções que alteram o estado ficam na classe pai que pode repassa para o filho.
   Essa forma de construção, resolve o problema, mas torna o código muito acoplado.

   O ideal seria conseguir isolar o estado e torná-lo vísivel tanto para o pai como para o filho.

   React possui uma Api chamada ContextApi, que permite criar estados que poderão ser acessados por vários componentes, e com uso de hooks a manipulação dessa Api se tornou muito simples.

Estrutura:
  <pre>src/
      components/
                ButtonsOfCounter.js (Arquivo que possui o componente que  manipula o estado)
                Viewfinder.js (Arquivo que possui o componente que exibe o estado)
      contexts/
              ContextCounter.js (Arquivo que possui o estado global)
  </pre>

Obs: Código com comentários explicando mais sobre a implementação.
