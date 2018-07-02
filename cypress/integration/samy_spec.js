/**
 * This test file makes assertions against the rendered
 * app produced by __tests__/testapp.js
 */
describe('SVGMT Tests', ()=> {
    it('Basic ajax loads svg element',()=>  {
      cy.visit('http://localhost:8080')
      cy.get('#basic polygon').should('have.attr', 'id', 'Star')
    })

    it('Change attribute with SvgProxy', ()=>  {
      cy.visit('http://localhost:8080')
      cy.get('#basic-update #Star').should('have.attr', 'fill', 'red')
      
    })

    it('Svg style prop gets applied', ()=>  {
      cy.visit('http://localhost:8080')
      cy.get('#use-style-prop').should('have.prop','width')
    })

    it('null path generates empty svg', ()=>  {
      cy.visit('http://localhost:8080')
      cy.get('#null-path').should('be.empty')
    })

    it('Change element text (tspan)', function() {
      cy.visit('http://localhost:8080')
      cy.get('#change-text tspan').should('contain','Hello SVG')
    })

    it('onElementSelectedTest works', ()=>  {
      cy.visit('http://localhost:8080')
      cy.get('#onElementSelectedTest #Star').should('have.attr', 'fill', 'red')
    })

    it('changing prop svgXML updates svg contents', ()=>  {
      cy.visit('http://localhost:8080')
      cy.get('button#btnChangeSVG').click()
      cy.get('#updatesvgxmlprop #Star').should('have.attr', 'fill', '#000')
      
    })

    it('SvgProxy converts $ORIGINAL to original attribute value', ()=>  {
      cy.visit('http://localhost:8080')
      cy.get('#keepcurrentattributevalue g#Page-1').should('have.attr', 'transform','translate(0,0) translate(10,10)')
    })

    it('SvgProxy onElementSelected callback is executed when path is changed', () => {
      cy.visit('http://localhost:8080')
      cy.get('button#btnChangePath').click()
      cy.get('#testchangepath1 #Star').should('have.attr', 'fill', 'rgb(0,255,0)')
  
    })

    it('SvgProxy can update namespaced attributes using prefix_namespace syntax', () => {
      cy.visit('http://localhost:8080')
      cy.get('#changeimagelink #testImage').should('have.attr', 'xlink:href', 'image.png')
  
    })
    
    it('Update SvgProxy selector', () => {
      cy.visit('http://localhost:8080')
      cy.get('button#btnChangeSelector').click()
      cy.get('#changeproxyselector #Star2').should('have.attr', 'fill', 'red');
    })
    
  })
