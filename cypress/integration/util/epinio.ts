export class Epinio {
   epinioIcon() {
     return cy.get('.option .icon.group-icon.icon-epinio');
  } 

   checkEpinioNav() {
      return cy.get('.list-unstyled > li').should(($lis) => {
        expect($lis).to.have.length(3);
        expect($lis.eq(0)).to.contain('Applications');
        expect($lis.eq(1)).to.contain('Services');
        expect($lis.eq(2)).to.contain('Namespaces');
    })
  }

    accessEpinioMenu(cluster: string) {
      cy.contains('Epinio').click();
      cy.contains('Epinio instances', {timeout: 5000}).should('be.visible') && cy.contains('Available').should('be.visible');
      cy.contains(cluster).click();
      return
    }
}
