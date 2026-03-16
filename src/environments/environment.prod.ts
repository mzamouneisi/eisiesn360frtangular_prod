
// const url = url_prod
const url_dev = 'https://esn360-backend-dev.whiteforest-96ad5fb7.francecentral.azurecontainerapps.io'
const url_main = url_dev 
const url_prod = 'https://esn360-backend-prod.whiteforest-96ad5fb7.francecentral.azurecontainerapps.io'
const url = url_prod

const urlFront_dev = 'https://mzamouneisi.github.io/eisiesn360frtangular'
const urlFront_main = urlFront_dev
const urlFront_prod = 'https://mzamouneisi.github.io/eisiesn360frtangular_prod'
const urlFront = urlFront_prod

const app = '/esn360/'

export const environment = {
  production: true,
  apiUrl: url + app + 'api',
  divUrl: url + app + 'div',
  extractUrl: url + ':8300',
  urlFront: urlFront,
};
