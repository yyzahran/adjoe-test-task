const { Builder, By, until } = require('selenium-webdriver');
const { versionTwoUrl } = require('../constants/luckyMiner');
const { assert } = require('../utils/helper')

describe('Test lucky miner', function() {
    let driver;

    before(async function() {
        driver = await new Builder().forBrowser('chrome').build();
    });

    after(async function() {
        await driver.quit();
    });

    it('should navigate to the home page and click start button', async function() {
        try {
            await driver.get(versionTwoUrl);

            let canvas = await driver.findElement(By.id('skeletonAd'));
            await driver.wait(until.elementIsVisible(canvas), 5000);

            let rect = await canvas.getRect();

            let xOffset = Math.floor(rect.width / 2);
            let yOffset = Math.floor(rect.height / 2);

            const actions = driver.actions({ async: true });
            await actions.move({ origin: canvas, x: xOffset, y: yOffset }).click().perform();

            let clickedPosition = await driver.executeScript(`
                return {
                    x: arguments[0].offsetLeft + arguments[1].x,
                    y: arguments[0].offsetTop + arguments[1].y
                };
            `, canvas, { x: xOffset, y: yOffset });
            assert(Math.abs(clickedPosition.x - xOffset) <= 5, 'X position mismatch');
            assert(Math.abs(clickedPosition.y - yOffset) <= 5, 'Y position mismatch');

            await new Promise(resolve => setTimeout(resolve, 5000));
        } catch (error) {
            console.error('Error:', error);
        }
    });
});