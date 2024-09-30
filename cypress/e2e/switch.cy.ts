import { Timer } from '../util/Timer';

describe('Switch test', () => {
  it('should switch card successfully', () => {
    const timer = new Timer('Switch test');
    cy.viewport(1920, 1080);
    cy.visit('/sign-in').then(() => {
      timer.log('Visiting the website');
    });
    cy.get('input[name="username"]').type('AhlemDBK');
    cy.get('input[name="password"]').type('password123');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/');
    cy.wait(2000);
    cy.get('#switch-card');
    cy.get('.bg-erp-purple-gradient').should('be.visible');
    cy.get('#switch-card').click();
    cy.get('.bg-erp-green-gradient').should('be.visible');
  });
});
