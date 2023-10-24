const { expect } = require('chai');

const chaiExpect= require('chai').expect

describe('rahuo shetty website', async()=>
{


xit('radio buttons test', async()=>
{

        await browser.url("https://rahulshettyacademy.com/loginpagePractise/");
        
        //browser.waitUntil(async()=> (await (await $("//input[@type='text']")).isDisplayed()), 4000, "element not displayed")
       await (await $("//input[@type='text']")).setValue("rahulshettyacademy");
       ////input[@type='password']
       await (await $("//input[@type='password']")).setValue("learning");
       

        // const admimRadioButton= await $("//span[text()='Admin']");
        // const userRadioButton= await $("//span[text()=' User']");

    //   console.log( "Are you selected:" + await admimRadioButton.isSelected());

    //    await userRadioButton.click();
    //    await browser.pause(2000);

    //    await (await $("#cancelBtn")).click();
    //    await browser.pause(2000);  

       //multiple elements with same class
    //    const multipleElements = await $$(".customradio");
    //    const userDropdown= multipleElements[1];
    //    await userDropdown.click();
    //    await browser.pause(1000);

    //    const alertPopup= await $(".modal-body");
    //    await alertPopup.waitForDisplayed();

    //     await (await $("#cancelBtn")).click();
    //     await browser.pause(2000);
    //await userDropdown.click();

        // console.log("Are you selected:" + await chainingLoc[0].$("input").isSelected());
       
        //chaining locators

    const chainingLoc = await $$(".customradio");
    const alertPopup= await $(".modal-body");

    const userRadio= chainingLoc[1];
    await userRadio.$("span").click();
    
    await alertPopup.waitForDisplayed();

    await browser.pause(1000);
    await (await $("#cancelBtn")).click();
    //await browser.pause(2000);
    
    console.log("Are you selected:" + await chainingLoc[0].$("input").isSelected());
       
       
    await userRadio.$("span").click();
    await alertPopup.waitForDisplayed();
    await $("#okayBtn").click();
    await  browser.pause(2000);
    await expect(alertPopup).not.toBeDisplayed();
    
       
       
    

        

    
})

xit('static dropdown', async()=>
{
    await browser.url("https://rahulshettyacademy.com/loginpagePractise/");
        
    //browser.waitUntil(async()=> (await (await $("//input[@type='text']")).isDisplayed()), 4000, "element not displayed")
   await (await $("//input[@type='text']")).setValue("rahulshettyacademy");
   ////input[@type='password']
   await (await $("//input[@type='password']")).setValue("learning");

   const staticDropdown= await $("select.form-control")
   await staticDropdown.selectByAttribute('value', 'consult');
   
   console.log( staticDropdown.getValue());
   chaiExpect(await staticDropdown.getValue()).to.equal("consult");


})

xit('dynamic dropdown', async()=>
{
    await browser.url("https://rahulshettyacademy.com/AutomationPractice/")
    
    const dynamicClick= await $("#autocomplete");
    await dynamicClick.click();
    await browser.pause(1000);
    await dynamicClick.setValue("aus");
    await browser.pause(1000);
    let items= await $$(".ui-menu-item");

    for(var i=0; i< await items.length; i++)
    {
        if(await items[i].getText()=="Australia")
       {
            await items[i].click();
            await browser.pause(2000);
            //console.log("text displayed is:" + await dynamicClick.getValue())

            chaiExpect(await dynamicClick.getValue()).to.equal("Australia")
       }
    }



})

xit('WebTables Validation', async()=>
{
    await browser.url("https://rahulshettyacademy.com/seleniumPractise/#/offers")
    await browser.pause(1000);
    //await $("//th[@role='columnheader'][1]").click();
    await browser.pause(2000)
   
    const itemsListLocator= await $$("td:nth-child(1)");
    const originalVeggie= await Promise.all(itemsListLocator.map(async itemsVeggie=>await itemsVeggie.getText()))
    console.log(await originalVeggie)
    temp = [...originalVeggie]
    //temp= await originalVeggie.slice()
    // console.log("temp:" +temp)
     const sortedVeggies= await (await originalVeggie).sort();
    console.log(await sortedVeggies)
    chaiExpect(originalVeggie).to.eql(sortedVeggies);


})
it('search bar or filter button automation', async()=>
{
    await browser.url("https://rahulshettyacademy.com/seleniumPractise/#/offers")
    const searchBox= await $("input[type='search']") 
    await searchBox.click();
    await browser.pause(1000);
    await searchBox.setValue("tomato");
    const tableData= await (await $("(//tr/td)[1]")).getText()
    await expect(t)

})

})