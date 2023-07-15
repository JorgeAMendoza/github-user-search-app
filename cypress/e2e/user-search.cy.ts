/// <reference types="cypress" />

describe('user search', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
    cy.intercept('https://api.github.com/users/jorgeamendoza', {
      statusCode: 200,
      fixture: 'jorge.json',
    });
    cy.intercept('https://api.github.com/users/thisuserdoesnotexist', {
      statusCode: 404,
      fixture: 'not-found.json',
    });
    cy.get('[data-testid="userSearchInput"]').as('userSearchInput');
    cy.get('[data-testid="userSearchButton"]').as('userSearchButton');
    cy.get('[data-testid="themeButton"]').as('themeButton');
    cy.get('[data-testid="username"]').as('username');
    cy.get('[data-testid="userhandle"]').as('userhandle');
    cy.get('[data-testid="userJoined"]').as('userjoined');
    cy.get('[data-testid="repoCount"]').as('repoCount');
    cy.get('[data-testid="followersCount"]').as('followersCount');
    cy.get('[data-testid="followingCount"]').as('followingCount');
    cy.get('[data-testid="userBio"]').as('userbio');
    cy.get('[data-testid="userLocation"]').as('userlocation');
    cy.get('[data-testid="userBlog"]').as('userblog');
    cy.get('[data-testid="userAvatar"]').as('useravatar');
    cy.get('[data-testid="userTwitter"]').as('userTwitter');
    cy.get('[data-testid="userCompany"]').as('userCompany');
  });

  it('should load github information for user "jorgeamendoza"', () => {
    cy.get('@userSearchInput').type('jorgeamendoza');
    cy.get('@userSearchButton').click();

    cy.get('@username').should('have.text', 'Jorge A. Mendoza II');
    cy.get('@userhandle').should('have.text', '@JorgeAMendoza');
    cy.get('@userjoined').should('have.text', 'Joined 16 Apr 2015');
    cy.get('@userbio').should(
      'contain.text',
      'A Front-End Software Engineer from Dallas, TX who focuses on creating accessible and performant user experiences on the web. '
    );
    cy.get('@repoCount').should('have.text', '26');
    cy.get('@followersCount').should('have.text', '2');
    cy.get('@followingCount').should('have.text', '4');

    cy.get('@userlocation').should('have.text', 'Dallas, TX');
    cy.get('@userblog').should('have.text', 'https://jorgemendozadev.com');
    cy.get('@useravatar')
      .should('have.attr', 'src')
      .should('include', '11983206');
    cy.get('@userTwitter').should('have.text', 'JorgeMIIDev');
    cy.get('@userCompany').should(
      'have.text',
      'Dallas Independent School District'
    );
  });

  it('should display a not found message for user "thisuserdoesnotexist"', () => {
    cy.get('@userSearchInput').type('thisuserdoesnotexist');
    cy.get('@userSearchButton').click();

    cy.get('[data-testid="errorMessage"]').should('contain.text', 'Not Found');
    cy.get('@username').should('have.text', 'The Octocat');
  });
});
