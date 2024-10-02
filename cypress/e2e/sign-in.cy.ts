import { Timer } from '../util/Timer';

describe('AuthForm Submission Test', () => {
  before(() => {
    const timer = new Timer('Sign-in test');
    cy.viewport(1920, 1080);
    cy.visit('/sign-in');
    timer.log('Starting Sign-in Tests');
  });

  it('should show validation errors for incorrect inputs', () => {
    const timer = new Timer('Sign-in test');
    cy.viewport(1920, 1080);
    cy.visit('/sign-in');
    timer.log('Starting Sign-in Tests');
    cy.get('button[type="submit"]').click();
    cy.contains('String must contain at least 3 character(s)').should(
      'be.visible',
    );
    cy.contains('String must contain at least 8 character(s)').should(
      'be.visible',
    );
  });

  it('should show password', () => {
    const timer = new Timer('Sign-in test');
    cy.viewport(1920, 1080);
    cy.visit('/sign-in');
    timer.log('Starting Sign-in Tests');
    cy.get('input[name="password"]').should('have.attr', 'type', 'password');
    cy.get('button[title="Unlock"]').click();
    cy.get('input[name="password"]').should('have.attr', 'type', 'text');
  });

  it('should fill out the form and submit successfully', () => {
    const timer = new Timer('Sign-in test');
    cy.viewport(1920, 1080);
    cy.visit('/sign-in');
    timer.log('Starting Sign-in Tests');
    cy.get('input[name="username"]').type('AhlemDBK');

    cy.get('input[name="password"]').type('password123');

    cy.get('button[type="submit"]').click();
    cy.get('button[type="submit"]').should('be.disabled');
    cy.get('.animate-spin').should('be.visible');
    cy.url().should('include', '/');
  });
});
