

describe('Pizza order form', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3002');
    cy.get('#order-pizza').click(); 
  });
  

  it('should type text into the input field', () => {
    cy.get('#name-input').type('Yavuz Hırsız').should('have.value', 'Yavuz Hırsız');
  });

  it('should be able to select multiple ingredients', () => {
    cy.get('input[name="toppings"][value="pepperoni"]').check().should('be.checked');
    cy.get('input[name="toppings"][value="mushrooms"]').check().should('be.checked');
    cy.get('input[name="toppings"][value="olives"]').check().should('be.checked');
  });

  it('should submit the form and show the order response', () => {
    cy.get('#name-input').type('Yavuz Hırsız');
    cy.get('#size-small').check();
    cy.get('#dough-dropdown').select('İnce');
    cy.get('input[name="toppings"][value="pepperoni"]').check();
    cy.get('input[name="toppings"][value="mushrooms"]').check();
    cy.get('input[name="toppings"][value="olives"]').check();
    cy.get('#order-button').click();
    cy.location('pathname').should('eq', '/onay');
  });
});
