Feature: Login
  Como um usuário da aplicação
  Quero realizar login
  Para acessar a área de produtos

  Scenario: Login com sucesso
    Given que estou na página de login
    When faço login com usuário "standard_user" e senha "secret_sauce"
    Then devo visualizar a página de produtos

  Scenario: Login inválido
    Given que estou na página de login
    When faço login com usuário "invalid_user" e senha "invalid_password"
    Then devo visualizar a mensagem de erro de login
