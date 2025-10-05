describe('Smoke', () => {
  it('navigates core pages', () => {
    cy.visit('/?auth=1')
    cy.contains('AlmaConnect')
    cy.contains('Feed')

    cy.visit('/jobs?auth=1')
    cy.contains('Jobs')

    cy.visit('/events?auth=1')
    cy.contains('Events')

    cy.visit('/groups?auth=1')
    cy.contains('Groups')

    cy.visit('/search?auth=1')
    cy.contains('Search Directory')

    cy.visit('/admin?auth=1')
    cy.contains('Admin Dashboard')
  })
})
