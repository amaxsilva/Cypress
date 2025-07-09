import { Given, When, Then, DataTable } from '@badeball/cypress-cucumber-preprocessor';
import HomePage from '../pages/homePage';
import MenuElementsPage from '../pages/menuElementsPage'

When(`clico no menu Elements`, () => {
    HomePage.acessarMenuElements();
});

When(`clico na opção text box`, () => {
    MenuElementsPage.clicarTextBox();
});

Then(`sistema deve permitir o input de nome completo, email, endereço e confirmação de endereço`, () => {
    cy.gerarUserData().then((usuario) => {
        MenuElementsPage.preencherFormulario(usuario);
        MenuElementsPage.submeterFormulario();
        // Agora passamos o usuário diretamente para a validação
        MenuElementsPage.validarDadosExibidos(usuario);
    });
});

//CheckBox
When(`cliclo na opção Check box`, () => {
    MenuElementsPage.clicarCheckBox();
});

Then(`sistema deve permitir marcar o check box Home`, () => {
    MenuElementsPage.clicarCheckBoxHome();
});

Then(`desmarcar o check box Home`, () => {
    MenuElementsPage.desmarcarCheckBoxHome();
});

Then(`expandir e marcar dois check box`, () => {
    MenuElementsPage.expandirCheckBox();
    MenuElementsPage.clicarCheckBoxDesktop();
    MenuElementsPage.clicarCheckBoxDownload();
});

//RadioBox
When(`cliclo na opção Radio Button`, () => {
    MenuElementsPage.clicarRadioButton
});

Then(`sistema deve permitir marcar o Radio Button yes`, () => {
    MenuElementsPage.clicarRadioYes
});

Then(`marcar o Radio Button Impressive`, () => {
    MenuElementsPage.clicaRadioImpressive
});

//Web Tables
When(`cliclo na opção Web tabela`, () => {
    MenuElementsPage.clicarWebTables();
});

Then(`sistema deve permitir criar um novo item na tabela`, () => {
    // Aqui usamos o comando personalizado para gerar os dados do usuário e armazená-los com um alias
    // O then garante que os dados sejam gerados antes de prosseguir
    cy.gerarDadosUsuario('dadosUsuario').then((dadosUsuario) => {
        MenuElementsPage.clicarAddButton();
        // Usamos o alias 'dadosUsuario' para preencher o formulário
        MenuElementsPage.preencherFormularioWebTable(dadosUsuario);
        MenuElementsPage.submeterFormularioWebTable();
    });
});

Then(`pesquisar o item criado`, () => {
    // Aqui usamos o alias 'dadosUsuario' que foi definido no comando anterior
    cy.get('@dadosUsuario').then((dadosUsuario) => {
        MenuElementsPage.pesquisarItemWebTable(dadosUsuario.nome);
    }); 
});

Then(`editar o item criado`, () => {
    // Aqui usamos o alias 'dadosUsuario' que foi definido no comando anterior
    cy.get('@dadosUsuario').then((dadosUsuario) => {
        MenuElementsPage.editarItemWebTable();
        MenuElementsPage.submeterFormularioWebTable();
        const dadosAposEdicao = {
            ...dadosUsuario, // Copia todas as propriedades do objeto original
            nome: "Ariel"            // Sobrescreve apenas o 'nome' para "Ariel"
        };
        //Aqui passamos o return antes do wrap para garantir que o alias seja atualizado corretamente
        return cy.wrap(dadosAposEdicao).as('dadosUsuario'); 
    }) 
    //Usamos apenas o .then sem o  @dadosUsuario, pois já estamos dentro do contexto do alias acima
    .then((dadosAtualizadosUsuario) => {
        MenuElementsPage.pesquisarItemWebTable(dadosAtualizadosUsuario.nome);
    });     
});

Then(`excluir o item criado`, () => {
    cy.get('@dadosUsuario').then((dadosAtualizadosUsuario) => {
        MenuElementsPage.pesquisarItemWebTable(dadosAtualizadosUsuario.nome);
        MenuElementsPage.excluirItemWebTable();
    });
});