// Importe os comandos personalizados se necessário
import './commands'

// Configurações globais do Cypress
import '@badeball/cypress-cucumber-preprocessor'

// Ignora TODOS os erros não capturados originados de scripts de terceiros
Cypress.on('uncaught:exception', (err) => {
  // Lista de domínios de terceiros para ignorar
  const thirdPartyDomains = [
    'ad.plus',
    'google-analytics',
    'facebook.net',
    // Adicione outros que encontrar
  ];

  // Verifica se o erro veio de um script de terceiros
  const isThirdPartyError = thirdPartyDomains.some(domain => 
    err.stack.includes(domain) || err.message.includes(domain)
  );

  // Não falha o teste se for erro de terceiro
  if (isThirdPartyError) {
    console.log('Ignorando erro de terceiro:', err.message);
    return false;
  }

  // Mantém o comportamento padrão para outros erros
  return true;
});