// //Naming Convention used of this file name  is Pascal Case 
// //Pascal Case: Starts with a uppercase letter and capitalizes the first letter of each subsequent
// //------------Import File to visit Website----------
import './VisitWebsite.cy'


//----Test scenario-----------
describe('Automate Contact Us Form Page', () => {

    //------First Testcase---------- 
     //Writing Testcase for user enter Invalid data   
    it('Filling the Contact Us Form with Invalid Data',()=>{

//       //Getting Contact element and Click it
      cy.get('body > footer > div > div > div:nth-child(1) > ul > li:nth-child(2) > a').click()
     //Import data from the Fixture Folder   
     cy.fixture('Data.json').then((Data) => {
    
    
      //In this testcase For initalizing the variable used Camel Case naming convention
      //Camel Case: Starts with a lowercase letter and capitalizes the first letter of each subsequent word 
      //invalidData is a Camel Case  
      const invalidData = Data.InvalidData[0]; 
     
     //Getting the "Name" field by "ID" selector
     cy.get(':nth-child(2) > :nth-child(1) > .form-control').type(invalidData.Name).wait(2000)


//      //Getting the "Email" field by "ID" selector  
//        cy.get('#input_comp-kf5uosmq').type(invalidData.Email).wait(2000)

//      //Getting the "Phone" field by "ID" selector  
//        cy.get('#input_comp-kf5uosmw').type(invalidData.Phone).wait(2000)

//      //Getting the "Company Name" field by "ID" selector  
//        cy.get('#input_comp-kf5uosn2').type(invalidData.CompanyName).wait(2000)
     
//      //Getting the "Message" field by "ID" selector  
//        cy.get('#textarea_comp-kf5uosn7').type(invalidData.Message).wait(2000)

//      //Getting and Clicking on "Send" button  
//        cy.get('.l7_2fn').click().wait(3000) 
//       })
        
//     });


         })
           
       });

})