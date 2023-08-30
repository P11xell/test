import { test, expect } from '@playwright/test';

test('adiciona 3 tarefas', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByPlaceholder('Coloque sua task aqui').click();
  await page.getByPlaceholder('Coloque sua task aqui').fill('q gay');
  await page.getByPlaceholder('Coloque sua task aqui').press('Enter');
  await page.getByPlaceholder('Coloque sua task aqui').click();
  await page.getByPlaceholder('Coloque sua task aqui').fill('odeio pobre');
  await page.getByPlaceholder('Coloque sua task aqui').press('Enter');
  await page.getByPlaceholder('Coloque sua task aqui').click();
  await page.getByPlaceholder('Coloque sua task aqui').fill('na africa tem africanos');
  await page.getByPlaceholder('Coloque sua task aqui').press('Enter');
});