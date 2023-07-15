/// <reference types="cypress" />
import hexToRgb from '../utils/hex-to-rgb';

describe('inital page load', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
    cy.intercept('https://api.github.com/users/octocat', {
      statusCode: 200,
      fixture: 'octocat.json',
    });
    cy.get('[data-testid="userSearchInput"]').as('userSearchInput');
    cy.get('[data-testid="userSearchButton"]').as('userSearchButton');
    cy.get('[data-testid="themeButton"]').as('themeButton');
    cy.get('[data-testid="username"]').as('username');
    cy.get('[data-testid="userhandle"]').as('userhandle');
    cy.get('[data-testid="userJoined"]').as('userJoined');
    cy.get('[data-testid="repoCount"]').as('repoCount');
    cy.get('[data-testid="followersCount"]').as('followersCount');
    cy.get('[data-testid="followingCount"]').as('followingCount');
    cy.get('[data-testid="userBio"]').as('userBio');
    cy.get('[data-testid="userLocation"]').as('userLocation');
    cy.get('[data-testid="userBlog"]').as('userBlog');
    cy.get('[data-testid="userAvatar"]').as('userAvatar');
    cy.get('[data-testid="userTwitter"]').as('userTwitter');
    cy.get('[data-testid="userCompany"]').as('userCompany');
  });

  it('should load page with octocat information and user preferred theme', () => {
    // test the color scheme
    // const { matches: prefersDark } = window.matchMedia(
    //   '(prefers-color-scheme: dark)'
    // );
    // if (prefersDark) {
    //   cy.get('body').should('have.css', 'background-color', hexToRgb('141D2F'));
    //   cy.get('@themeButton').should('contain.text', 'LIGHT');
    // } else {
    //   cy.get('body').should('have.css', 'background-color', hexToRgb('F6F8FF'));
    //   cy.get('@themeButton').should('contain.text', 'DARK');
    // }

    // test the octocat information
    cy.get('@userSearchInput')
      .find('input')
      .should('have.attr', 'placeholder')
      .should('contain', 'Search GitHub username...');
    cy.get('@username').should('have.text', 'The Octocat');
    cy.get('@userhandle').should('have.text', '@octocat');
    cy.get('@userJoined').should('have.text', 'Joined 25 Jan 2011');
    cy.get('@repoCount').should('have.text', '8');
    cy.get('@followersCount').should('have.text', '9709');
    cy.get('@followingCount').should('have.text', '9');
    cy.get('@userBio').should('contain.text', 'This profile has no bio');
    cy.get('@userLocation').should('have.text', 'San Francisco');
    cy.get('@userBlog').should('have.text', 'https://github.blog');
    cy.get('@userAvatar')
      .should('have.attr', 'src')
      .should('include', '583231');
    cy.get('@userTwitter').should('have.text', 'Not Available');
    cy.get('@userCompany').should('have.text', '@github');
  });
});
