
describe('authentication - publication wizard', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.eyesOpen();
    })

    afterEach(() => {
        cy.eyesClose();
    })

    it('login to PW', () => {
        cy.login('manager','manager','Publication Wizard');
    })
})