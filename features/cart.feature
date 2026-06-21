Feature: Carrinho
  Como um usuário logado
  Quero adicionar produtos ao carrinho
  Para poder revisar minha compra

  Scenario: Adicionar produto ao carrinho
    Given que estou logado na aplicação
    When adiciono o produto Sauce Labs Backpack ao carrinho
    Then devo visualizar o produto no carrinho

  Scenario: Remover produto do carrinho
    Given que estou logado na aplicação
    And adiciono o produto Sauce Labs Backpack ao carrinho
    When removo o produto Sauce Labs Backpack do carrinho
    Then o carrinho deve ficar vazio
