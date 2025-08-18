Feature: Menu Elements

    @textBox
    Scenario: Validar text box
        Given que acesso a demoqa
        When clico no menu Elements
        And clico na opção text box
        Then sistema deve permitir o input de nome completo, email, endereço e confirmação de endereço

    @checkBox
    Scenario: Validar Check box
        Given que acesso a demoqa
        When clico no menu Elements
        And cliclo na opção Check box
        Then sistema deve permitir marcar o check box Home
        And desmarcar o check box Home
        And expandir e marcar dois check box
    
    @radioButton
    Scenario: Validar Radio Button
        Given que acesso a demoqa
        When clico no menu Elements
        And cliclo na opção Radio Button
        Then sistema deve permitir marcar o Radio Button yes
        And marcar o Radio Button Impressive
    
    @webTable
    Scenario: Validar criação de tabela
        Given que acesso a demoqa
        When clico no menu Elements
        And cliclo na opção Web tabela
        Then sistema deve permitir criar um novo item na tabela
        And pesquisar o item criado
        And editar o item criado
        And excluir o item criado

    @buttons
    Scenario: Validar click nos botões
        Given que acesso a demoqa
        When clico no menu Elements
        And cliclo na opção Buttons
        Then sistema deve permitir clicar no botão Double Click Me
        And clicar no botão Right Click Me
        And clicar no botão Click Me

    @links
    Scenario Outline: Validar links em nova aba
        Given que acesso a demoqa
        When clico no menu Elements
        And cliclo na opção Links
        Then sistema deve permitir clicar no "<link>" e validar a "<url>"
        Examples:
            | link  | url                |
            | Home  | https://demoqa.com |
            | Home  | https://demoqa.com |

    @linksAPI
    Scenario Outline: Validar links de simulação de API
        Given que acesso a demoqa
        When clico no menu Elements
        And cliclo na opção Links
        Then sistema deve permitir clicar no "<linkAPI>" e validar a mensagem "<mensagem>"
        Examples:
            | linkAPI     | mensagem                                                           |
            | Created     | Link has responded with staus 201 and status text Created          |
            | No Content  | Link has responded with staus 204 and status text No Content       |
            | Moved       | Link has responded with staus 301 and status text Moved Permanently|
            | Bad Request | Link has responded with staus 400 and status text Bad Request      |
            | Unauthorized| Link has responded with staus 401 and status text Unauthorized     |
            | Forbidden   | Link has responded with staus 403 and status text Forbidden        |
            | Not Found   | Link has responded with staus 404 and status text Not Found        |

    @uploadDownload
    Scenario: Validar upload e download de arquivos
        Given que acesso a demoqa
        When clico no menu Elements
        And cliclo na opção Upload e Download
        Then sistema deve permitir fazer o upload de um arquivo
        And validar o download de um arquivo