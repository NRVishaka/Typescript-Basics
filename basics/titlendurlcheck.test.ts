// //task 2 title nd url check
// open link
// check if the url is correct
// click the button and navigate to the page

//points to remember :test() Each test block gets a fresh new browser context and blank page. So unless you call page.goto(...) inside each test, the page doesn't "remember" what happened in other tests.

import{test,expect} from '@playwright/test';


test('open link',async({page}) => {
    await page.goto("https://playwright.dev/");
})

test('button click action and check URL',async({page}) => {
    await page.goto("https://playwright.dev/");
    await page.getByText('Get Started').click();
    await expect(page).toHaveURL("https://playwright.dev/docs/intro")
})

// test('check if the URL is right',async({page})=>{  
//     await expect(page).toHaveURL("https://playwright.dev/docs/intro");
// }) this cant work independently..


