import { test, expect } from '@playwright/test'

test('testa se concluiu', async ({ page, request }) => {
    const task = 'fodastico'
    const input = '//*[@id="react-aria-:R4qqkq:"]'

    await page.goto('http://localhost:3000/')

    await page.type(input, task)
    await page.press(input, 'Enter')
    await page.click('text= Concluir')
    await page.click('text= Completed')
})