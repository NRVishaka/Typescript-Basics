import {test,expect} from '@playwright/test';
// task1:
// Goes to GeeksForGeeks
// Searches for “Playwright”
// Checks if the word “Playwright” is in the heading or description
//outcome:in the webpage,there are multipe h and p with the word so we have to mention tparticular position or number of the word  in the order tht has appeared..
test('link is opened',async ({ page })=>  {
    await page.goto('https://www.geeksforgeeks.org/how-to-scrape-the-web-with-playwright-in-python/?');
    await expect(page.locator('h1').first()).toHaveText(/Playwright/i);

    //await expect(page.locator('h1')).toHaveText(/Playwright/i); this line is isue as there are lots of heading with the word
    //await expect(page.locator('p')).toContainText(/Playwright/i);
    //await expect(page.locator('p')).toContainText(/Playwright/i); lots of para so again has to be spcified..this is for later
    //await page.bringToFront(); //method activates the page and brings it to the front of the browser window
    //await page.close(); // close a page
 }  ) 

