#!/usr/bin/env bash

echo "
export const magentoOptions = {
    url: '$BASE_URL',
    authentication: {
      integration: {
        access_token: '$ACCESS_TOKEN'
      }
    }
};
" > ./src/config/magento.js