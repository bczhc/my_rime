import { test } from '@playwright/test'
import { baseURL, input, expectValue, selectIME, changeVariant } from './util'

const ime = '上海吴语·新派'

test('Simplified', async ({ page }) => {
  await page.goto(baseURL)

  await selectIME(page, ime)
  await input(page, 'chin', 'rau ')
  await expectValue(page, '清华')
})

test('Traditional', async ({ page }) => {
  await page.goto(baseURL)

  await selectIME(page, ime)
  await changeVariant(page, '繁')
  await input(page, 'chin', 'rau ')
  await expectValue(page, '清華')
})