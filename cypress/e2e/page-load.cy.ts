/// <reference types="cypress" />
import hexToRgb from '../utils/hex-to-rgb'

describe('inital page load', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.intercept('https://api.github.com/users/octocat', {
      statusCode: 200,
      fixture: 'octocat.json',
    })
    cy.get('[data-testid="userSearchInput"]').as('userSearchInput')
    cy.get('[data-testid="userSearchButton"]').as('userSearchButton')
    cy.get('[data-testid="themeButton]').as('themeButton')
    cy.get('[data-testid="username"]').as('username')
    cy.get('[data-testid="userhandle"]').as('userhandle')
    cy.get('[data-testid="userjoined"]').as('userjoined')
    cy.get('[data-testid="repoCount"]').as('repoCount')
    cy.get('[data-testid="followersCount"]').as('followersCount')
    cy.get('[data-testid="followingCount"]').as('followingCount')
    cy.get('[data-testid="userbio"]').as('userbio')
    cy.get('[data-testid="userlocation"]').as('userlocation')
    cy.get('[data-testid="userblog"]').as('userblog')
    cy.get('[data-testid="useravatar"]').as('useravatar')
    cy.get('[data-testid="userTwitter"]').as('userTwitter')
    cy.get('[data-testid="userCompany"]').as('userCompany')
  })

  it('should load page with octocat information and user preferred theme', () => {
    // test the color scheme
    const { matches: prefersDark } = window.matchMedia(
      '(prefers-color-scheme: dark)'
    )
    if (prefersDark) {
      cy.get('body').should('have.css', 'background-color', hexToRgb('141D2F'))
      cy.get('@themeButton').should('contain.text', 'LIGHT')
    } else {
      cy.get('body').should('have.css', 'background-color', hexToRgb('F6F8FF'))
      cy.get('@themeButton').should('contain.text', 'DARK')
    }

    // test the octocat information
    cy.get('@userSearchInput')
      .should('have.attr', 'placeholder')
      .should('contain', 'Search GitHub username...')
    cy.get('@username').should('have.text', 'The Octocat')
    cy.get('@userhandle').should('have.text', '@octocat')
    cy.get('@userjoined').should('have.text', 'Joined 25 Jan 2011')
    cy.get('@repoCount').should('have.text', '8')
    cy.get('@followersCount').should('have.text', '9709')
    cy.get('@followingCount').should('have.text', '9')
    cy.get('@userbio').should('contain.text', 'This profile has no bio')
    cy.get('@userlocation').should('have.text', 'San Francisco')
    cy.get('@userblog').should('have.text', 'https://github.blog')
    cy.get('@useravatar').should('have.attr', 'src').should('include', '583231')
    cy.get('@userTwitter').should('have.text', 'Not Available')
    cy.get('@userCompany').should('have.text', '@github')
  })
})
