import { test, expect } from '@playwright/test';

test('adiciona e exclui algumas tarefas', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  const input =  page.getByPlaceholder('Coloque sua task aqui')

  await input.click();
  await input.fill('ovo');
  await input.press('Enter');
  await input.fill('de');
  await input.press('Enter');
  await input.fill('codorna');
  await input.press('Enter');
  
  const deleteButtons = await page.getByTestId('excluir').all()

  for await (const button of deleteButtons) {
    await button.click();
  }
});