import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductPage } from '../pages/ProductPage';
import { Constants } from '../utils/Constants';     

let productPage: ProductPage;

