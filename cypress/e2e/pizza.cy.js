describe('Pizza order form', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3001');
      cy.get('#order-pizza').click(); 
    });
  
  
    it('should type text into the input field', () => {
      cy.get('#name-input').type('Yavuz Hırsız').should('have.value', 'Yavuz Hırsız');
    });
  
    it('should be able to select multiple ingredients', () => {
      cy.get('#Sucuk').check().should('be.checked');
      cy.get('#Pepperoni').check().should('be.checked');
      cy.get('#Mantar').check().should('be.checked');
    });
  
    it('should submit the form and show the order response', () => {
      cy.get('#name-input').type('Yavuz Hırsız');
      cy.get('#size').select('M');
      cy.get('#hamur').select('İnce');
      cy.get('#Sucuk').check();
      cy.get('#Pepperoni').check();
      cy.get('#Mantar').check();
      cy.get('#quantity').clear().type('2');
      cy.get('#order-button').click();
      cy.location('pathname').should('eq', '/onay');
    });
  });
  