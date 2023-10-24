require('chai')

describe('rahuo shetty website', async()=>
{


it('radio buttons test', async()=>
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


})