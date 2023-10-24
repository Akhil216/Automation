describe('Add a contingent Staff', async()=>
{
it('first script- adding a contingent worker type', async()=>
    {
        const browURL= "https://login.kekastage.com"

        await browser.url(browURL);
        //await browser.maximizeWindow();
        console.log( await browser.getTitle());
        await browser.pause(2000)
        await expect(browser).toHaveTitleContaining("Keka")

        // await browser.pause(2000)
    //  await $("//input[@placeholder='Email or Mobile']").setValue("akhildhin@gmail.com") //-> this is to select using Xpath
    //  await (await $("input.form-control.border-danger")).waitForExist();
    //  await $("input.form-control.border-danger").setValue("akhildhin@gmail.com")
    //  await browser.pause(2000)



    })
})   