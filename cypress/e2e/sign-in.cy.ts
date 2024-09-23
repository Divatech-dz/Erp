

describe('AuthForm Submission Test', () => {
  beforeEach('passes', () => {
    cy.visit('/sign-in')
  })
  it('should fill out the form and submit successfully',()=>{
    cy.get('input[name="email"]').type('johndoe@example.com');

    cy.get('input[name="password"]').type('password123');

    cy.get('button[type="submit"]').click();

    
    cy.get('button[type="submit"]').should('be.disabled');
    cy.get('.animate-spin').should('be.visible');
    cy.url().should('include', '/');
  })
  it('should show validation errors for incorrect inputs', () => {
    
    cy.get('button[type="submit"]').click();
    cy.contains('Invalid email').should('be.visible');
    cy.contains('String must contain at least 8 character(s)').should('be.visible');
  });
 
})