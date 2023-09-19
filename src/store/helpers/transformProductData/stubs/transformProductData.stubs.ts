import { ProductProjection } from '@commercetools/platform-sdk';
import { IProductData, Mutable } from 'types';

export const productExampleTest: ProductProjection = {
  id: '0c91d266-6f0e-4203-9aaa-e5c2a00418be',
  version: 31,
  productType: {
    typeId: 'product-type',
    id: '48559d45-ad57-4bc1-8178-7d4d9428d83f',
  },
  name: {
    'en-US': 'Canon i-SENSYS LBP673Cdw',
  },
  description: {
    'en-US': 'Product description',
  },
  categories: [
    {
      typeId: 'category',
      id: '3d40c754-2938-4c30-adaf-19588bd9e414',
    },
  ],
  categoryOrderHints: {},
  slug: {
    'en-US': 'canon-i-sensys-lbp673cdw',
  },
  metaTitle: {
    'en-US': 'Canon i-SENSYS LBP673Cdw',
  },
  metaDescription: {
    'en-US': 'Meta description',
  },
  masterVariant: {
    id: 1,
    sku: '5456C007',
    prices: [
      {
        id: 'b2080413-0595-4333-8f5d-01a19b51f19e',
        value: {
          type: 'centPrecision',
          currencyCode: 'EUR',
          centAmount: 65000,
          fractionDigits: 2,
        },
        discounted: {
          value: {
            type: 'centPrecision',
            currencyCode: 'EUR',
            centAmount: 58500,
            fractionDigits: 2,
          },
          discount: {
            typeId: 'product-discount',
            id: 'db5b107d-c544-4771-9c53-800cb9c37270',
          },
        },
      },
    ],
    images: [
      {
        url: 'https://i1.adis.ws/i/canon/lbp673cdw-fra_gallery_01_9779c99ea0e64632afdfcc7eed91a659?$prod-gallery-1by1$',
        dimensions: {
          w: 552,
          h: 552,
        },
      },
      {
        url: 'https://i1.adis.ws/i/canon/lbp673cdw-frt_gallery_04_eb389b5bfa4f407db64c467bad7dffb5?$prod-gallery-1by1$',
        dimensions: {
          w: 552,
          h: 552,
        },
      },
    ],
    attributes: [
      {
        name: 'print_type',
        value: 'colour',
      },
      {
        name: 'type',
        value: 'printer',
      },
      {
        name: 'print_technology',
        value: 'laser',
      },
      {
        name: 'print_resolution',
        value: '1200 x 1200 dpi',
      },
      {
        name: 'print_speed',
        value: 33,
      },
      {
        name: 'vendor',
        value: 'Canon',
      },
    ],
    assets: [],
  },
  variants: [],
  searchKeywords: {},
  hasStagedChanges: false,
  published: true,
  taxCategory: {
    typeId: 'tax-category',
    id: '166931cc-c85e-43c8-8022-7a236ff3e94d',
  },
  priceMode: 'Embedded',
  createdAt: '2023-08-22T09:49:40.720Z',
  lastModifiedAt: '2023-08-23T18:04:46.052Z',
};

export const productExampleTestResult: IProductData = {
  id: '0c91d266-6f0e-4203-9aaa-e5c2a00418be',
  name: 'Canon i-SENSYS LBP673Cdw',
  categories: ['3d40c754-2938-4c30-adaf-19588bd9e414'],
  slug: 'canon-i-sensys-lbp673cdw',
  description: 'Product description',
  metaTitle: 'Canon i-SENSYS LBP673Cdw',
  metaDescription: 'Meta description',
  sku: '5456C007',
  price: {
    currencyCode: 'EUR',
    net: 650,
    discounted: 585,
  },
  attributes: {
    'Print Type': 'colour',
    Type: 'printer',
    'Print Technology': 'laser',
    'Print Resolution': '1200 x 1200 dpi',
    'Print Speed': 33,
    Vendor: 'Canon',
  },
  images: [
    'https://i1.adis.ws/i/canon/lbp673cdw-fra_gallery_01_9779c99ea0e64632afdfcc7eed91a659?$prod-gallery-1by1$',
    'https://i1.adis.ws/i/canon/lbp673cdw-frt_gallery_04_eb389b5bfa4f407db64c467bad7dffb5?$prod-gallery-1by1$',
  ],
};

const {
  id,
  version,
  createdAt,
  lastModifiedAt,
  productType,
  description,
  name,
  slug,
  categories,
  variants,
} = productExampleTest;

export const requiredProductDataTest: Mutable<ProductProjection> = {
  id,
  version,
  createdAt,
  lastModifiedAt,
  productType,
  name,
  slug,
  categories,
  masterVariant: {
    id: productExampleTest.masterVariant.id,
  },
  variants,
};

export const requiredProductDataTestResult: IProductData = {
  id: productExampleTestResult.id,
  name: productExampleTestResult.name,
  categories: productExampleTestResult.categories,
  slug: productExampleTestResult.slug,
};

export const partialProductDataTest: ProductProjection = {
  ...requiredProductDataTest,
  description,
  masterVariant: {
    id: productExampleTest.masterVariant.id,
    sku: '5456C007',
    attributes: [
      {
        name: 'print_type',
        value: 'colour',
      },
      {
        name: 'print_speed',
        value: 33,
      },
      {
        name: 'vendor',
        value: 'Canon',
      },
    ],
    assets: [],
  },
};

export const partialProductDataTestResult: IProductData = {
  ...requiredProductDataTestResult,
  description: productExampleTestResult.description,
  sku: '5456C007',
  attributes: {
    'Print Type': 'colour',
    'Print Speed': 33,
    Vendor: 'Canon',
  },
};
