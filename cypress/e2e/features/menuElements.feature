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