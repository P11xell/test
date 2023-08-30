import { test, expect } from '@playwright/test';

test('testa concluir e "desconcluir" tarefas multiplas', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  const input =  page.getByPlaceholder('Coloque sua task aqui')

  await input.click();
  await input.fill('caca');
  await input.press('Enter');
  await input.fill('aka');
  await input.press('Enter');
  await input.fill('pero');
  await input.press('Enter');
  await page.getByRole('button', { name: 'Concluir' }).first().click();
  await page.getByRole('button', { name: 'Concluir' }).first().click();
  await page.getByRole('button', { name: 'Desfazer' }).first().click();
  await page.getByRole('button', { name: 'Completed' }).click();

  const lista = page.getByRole('list')

  await expect(lista).toContainText('aka')
});