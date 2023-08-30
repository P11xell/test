import { test, expect } from '@playwright/test';

test('testar a edição de multiplos componentes da lista', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  const input =  page.getByPlaceholder('Coloque sua task aqui')


  await input.click();
  await input.fill('kaka');
  await input.press('Enter');
  await input.fill('cavalo');
  await input.press('Enter');
  await input.fill('ovo');
  await input.press('Enter');
  await page.getByRole('button', { name: 'Editar' }).nth(1).click();
  const inputEdit = page.getByTestId('inputEdit')
  await inputEdit.click();
  await inputEdit.press('Control+a');
  await inputEdit.fill('ez ta');
  await page.click('text= Concluir Edição');

  const lista = page.getByRole('list')

  await expect(lista).toContainText('ez ta')
  await page.getByRole('button', { name: 'Editar' }).nth(2).click();
  await inputEdit.click();
  await inputEdit.press('Control+a');
  await inputEdit.fill('lala');
  await inputEdit.press('Enter');
  await page.getByRole('button', { name: 'Concluir Edição' }).click();

  await expect(lista).toContainText('lala')
});