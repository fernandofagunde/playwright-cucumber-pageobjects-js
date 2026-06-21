Feature: Checkout
  Como um usuário logado
  Quero finalizar uma compra
  Para concluir meu pedido

  Scenario: Finalizar compra com sucesso
    Given que estou logado na aplicação
    And adiciono o produto Sauce Labs Backpack ao carrinho
    When finalizo a compra com os dados "Fernando", "Fagundes" e "55010000"
    Then devo visualizar a confirmação da compra
