Feature: Test user login

    Background: Define URL
      Given url "http://localhost:4007/auth/"

    Scenario: Login an user
      Given path "signin"
      And  request {"email": "saymonfelipe@hotmail.com","password": "sayfel"}
      When method Post
      Then status 200