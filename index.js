const puppeteer = require('puppeteer');
const downloadsFolder = require('downloads-folder');



function snapscreen(url) {

    let now = new Date();

    if (!url.includes('https') && !url.includes('http')) {
        url = 'https://' + url;
    }

    try {
        (async() => {
            const browser = await puppeteer.launch();
            const page = await browser.newPage();
            await page.setViewport({ width: 1920, height: 1080 });
            await page.goto(url);
            await page.screenshot({ path: downloadsFolder() + '/' + now + '-page.png', fullPage: true }).then(() => {
                console.log('Image generated. Please check your downloads folder');
            });
            await browser.close();
        })();
    } catch (e) {
        console.log("An Error has occured");
        console.log(e)
    }
}

module.exports = snapscreen;