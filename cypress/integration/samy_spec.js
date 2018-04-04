/**
 * This test file makes assertions against the rendered
 * app produced by __tests__/testapp.js
 */
describe('Samy Tests', function() {
    it('Basic ajax loads svg element', function() {
      cy.visit('http://localhost:8080')
      cy.get('#basic polygon').should('have.attr', 'id', 'Star')
    })

    it('Change attribute with SvgProxy', function() {
      cy.visit('http://localhost:8080')
      cy.get('#basic-update #Star').should('have.attr', 'fill', 'red')
      
    })

    it('Svg style prop gets applied', function() {
      cy.visit('http://localhost:8080')
      console.log(cy.get('#use-style-prop'))
      cy.get('#use-style-prop').should('have.prop','width')
    })

    it('null path generates empty svg', function() {
      cy.visit('http://localhost:8080')
      console.log(cy.get('#null-path'))
      cy.get('#null-path').should('be.empty')
    })

    it('Change element text (tspan)', function() {
      cy.visit('http://localhost:8080')
      console.log(cy.get('#null-path'))
      cy.get('#change-text tspan').should('contain','Hello SVG')
    })

    it('onElementSelectedTest works', function() {
      cy.visit('http://localhost:8080')
      cy.get('#onElementSelectedTest #Star').should('have.attr', 'fill', 'red')
    })

    it('changing prop svgXML updates svg contents', function() {
      cy.visit('http://localhost:8080')
      cy.get('button#btnChangeSVG').click()
      cy.get('#updatesvgxmlprop #Star').should('have.attr', 'fill', '#000')
      
    })

    it('SvgProxy converts $ORIGINAL to original attribute value', function() {
      cy.visit('http://localhost:8080')
      cy.get('#keepcurrentattributevalue g#Page-1').should('have.attr', 'transform','translate(0,0) translate(10,10)')
    })
    
  })