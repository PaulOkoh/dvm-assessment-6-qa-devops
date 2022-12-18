
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:4000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('Clicking the Draw button displays div with id ="choices"', async () => {
      await driver.findElement(By.id("draw")).click()
      await driver.sleep(3000)

     const choicesDiv = await driver.findElement(By.id("choices"))
     const choicesDivDisplayed = await choicesDiv.isDisplayed()
     expect(choicesDivDisplayed).toBe(true)
     await driver.sleep(3000)
})

test('Clicking "Add to Duo" button displays the div with id="player-duo"', async () => {
    await driver.findElement(By.id("draw")).click()
    await driver.sleep(3000)

    await driver.findElement(By.className('bot-btn')).click()
    await driver.sleep(3000)
    const playerDuoId = await driver.findElement(By.id('player-duo'))
    const playerDuoIdDisplayed = await playerDuoId.isDisplayed()
    expect(playerDuoIdDisplayed).toBe(true)
    await driver.sleep(3000)



})

//await driver.findElement(By.xpath('//input[@placeholder="Add Movie"]')).sendKeys(`${movie}`)

  //await driver.findElement(By.xpath('//button')).click()
//find movie span