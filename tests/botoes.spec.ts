import { test, expect } from '@playwright/test'

test('addi', async ({ page, request }) => {
    const task = 'fodastico'
    const input = '//*[@id="react-aria-:R4qqkq:"]'

    await page.goto('http://localhost:3000/')

    await page.waitForTimeout(500)
    await page.type(input, task)
    await page.press(input, 'Enter')
    await page.waitForTimeout(1000)
    await page.click('text= Concluir')
    await page.click('text= Completed')
    await page.waitForTimeout(1000)
})