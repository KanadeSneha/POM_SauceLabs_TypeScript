import { test } from '@playwright/test';
import { allure } from 'allure-playwright';

test('dummy test', async () => {
  allure.description('This is a dummy test to verify CI reporting');
});
