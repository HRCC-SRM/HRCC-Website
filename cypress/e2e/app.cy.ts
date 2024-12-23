describe('My Application', () => {
    it('should load the homepage', () => {
        cy.visit('/');
        cy.contains('Welcome to My Application');
    });
    
    it('should navigate to the about page', () => {
        cy.visit('/');
        cy.get('a[href="/about"]').click();
        cy.contains('About Us');
    });
});