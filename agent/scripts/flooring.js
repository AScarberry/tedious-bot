const { floorScript } = require('../constants');
const path = require('path');
const fs = require('fs');
module.exports.floorOrder = async (page, data) => {
    try {
        console.log("Checking Floor and Decor order status...");
        await page.goto(floorScript.siteUrl);
        await page.type(floorScript.orderFormPhoneNum, data.phoneNum);
        await page.type(floorScript.orderFormOrderNum, data.orderNum);
        await page.click(floorScript.orderSubmitBtn);
        await page.waitForSelector(floorScript.orderBanner);
        let statusElement = await page.$(floorScript.orderStatusElm);
        let value = await page.evaluate(el => el.textContent, statusElement);
        const bannerElement = await page.$(floorScript.orderBanner);
        await bannerElement.screenshot({ path: 'screenshots/orderStatus.png' });
        let buff = fs.readFileSync('screenshots/orderStatus.png');
        let base64data = buff.toString('base64');
        return { value, image: base64data } || 'Something went wrong!';
    } catch (error) {
        return error;
    }
}; 