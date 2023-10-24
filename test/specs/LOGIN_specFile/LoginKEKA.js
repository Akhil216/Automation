describe('Worker type test suite', async()=>
{
it('first script- adding a worker type', async()=>
{
    const browURL= "https://login.kekastage.com"
    await browser.url(browURL);
     
    const inputElement = await $("//input[@placeholder='Email or Mobile']");
    await inputElement.waitForClickable();
    await inputElement.click();
    await inputElement.setValue("akhildhin@gmail.com");

    //selecting continue button after entering email
    (await $("button[type='submit']")).click()
    
    //selecting KEKA password as the authentication mode
    await (await $("button=Keka Password")).click();
    
    //e
    const passwordElement= (await $("//input[@name='Password']"))
    //await passwordElement.waitForClickable();
    await passwordElement.setValue("qwerty12");


    const captchaElement= (await $("//input[@type='text']"))
    await captchaElement.waitForClickable();
    await captchaElement.setValue("c");
    await browser.pause(1000);

    
    
    
    await (await $("button=Login")).click();
    browser.pause(1000)

    await (await $("(//button[@type='submit'])[1]")).click();
    


    // await (await $("input.form-control.border-danger")).waitForClickable();
    // await $("input.form-control.border-danger").setValue("akhildhin@gmail.com");

    //Adding a contingent staff
    //(//a[@class='nav-link']) [6]

    //closing the billing page
    const closeBtn= await $("(//button[@type='button'])[4]");
    await closeBtn.waitForClickable({ timeout: 10000 });
    await closeBtn.click();
    
    

    // //selecting Org dashboard
    const clickOrg= await $("//span[text()='Org']")
    await clickOrg.waitForClickable({timeout: 3000});
    await clickOrg.click();
    browser.pause(5000);

    (await $("(//div[@class='alert alert-success ng-star-inserted'])[1]")).click();


    const employeeTab= await $("//a[text()='Employees']");
    await employeeTab.waitForClickable({timeout : 6000});
    await employeeTab.click();
    await browser.pause(2000);

    
    const summaryTab= await $("//a[text()='Contingent Staff']");
    await summaryTab.waitForClickable({timeout : 4000});
    await summaryTab.click();
    await browser.pause(1000);

    //
    //going to worker types tab
    const workerTypes= await $("//li[@routerlink='worker-types']");
    await workerTypes.waitForClickable({timeout : 4000});
    await workerTypes.click();
    await browser.pause(1000);


    const addWorker = await $(".btn-primary")
    addWorker.getText();
    await expect(addWorker).toHaveTextContaining("Type")
    await await addWorker.click();
    await browser.pause(1000);

    const workerTitle = await $("//input[@placeholder='Enter worker type title']")
    await workerTitle.setValue("added through automation4");
    await browser.pause(1000);
    const addButton =  $(".btn.btn-primary.ng-star-inserted");
    await (await addButton).click();

    await browser.waitUntil(async()=>await $("//div[text()='Worker type added successfully.']").waitForDisplayed(), 
    {
        timeout: 3000,
        timeoutMsg: 'worker type is not getting added'
    })
   
    // const a = await $("//div[text()='Worker type added successfully.']").waitForDisplayed();
    // console.log(a)
});






xit('deleting a worker type', async()=>
{

})





xit('validating if same worker type is added or not', async()=>
{

})


});