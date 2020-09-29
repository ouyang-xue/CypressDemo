describe('Login', () => {
  before(() => {
    cy.visit('/login')
  })

  it('Check username & password', () => {
    cy.get('[data-input-username]').type('admin')
    cy.get('[data-input-password]').type('123456')
    cy.get('[data-btn-login]').click()
    cy.url().contains('/test')
  })
})
