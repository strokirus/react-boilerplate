/**
 * Insert and force certain rules to cep (postal code in Brazil)
 *
 * @param value Value inserted by user
 * @return {String} formatted by rules of cep (postal code in Brazil)
 */
export const formatDate = (value) => {
  if (value && value.toString().length > 1) {
    return `${value}`;
  }

  return `0${value}`;
};

/**
 * Convert by dictionary currency values to coin symbols
 *
 * @param currency Value inserted by user
 * @return {String} formatted by coin symbols
 */
export const formatCurrency = (currency) => {
  const coinDictionary = {
    EUR: '€',
    USD: '$',
    BRL: 'R$',
    INR: '₹',
    AUD: 'A$',
    CAD: 'C$',
    SGD: '$',
    GBP: '£',
  };

  return coinDictionary[currency] || '';
};

/**
 * Insert and force certain rules to cep (postal code in Brazil)
 *
 * @param value Value inserted by user
 * @return {String} formatted by rules of cep (postal code in Brazil)
 */
export const dateFormat = (value) => {
  const date = new Date(value);

  return `${formatDate(date.getDate())}/${formatDate(date.getMonth() + 1)}/${date.getFullYear()}`;
};

/**
 * Format cash values to brazilian currency values
 *
 * @param {Number} value Value (mainly price of one thing)
 * @return {String} Price with currency coin and formatted for better visualizartion
 */
export const formatCash = (value, currency = 'GBR') => {
  const p = value.toFixed(2).split('.');
  return `${formatCurrency(currency)}${p[0].split('').reverse().reduce((acc, num, i) => (
    num === '-' ? acc : num + (i && !(i % 3) ? ',' : '') + acc
  ), '')},${p[1]}`;
};

/**
 * Export all functions utils (mainaly used in all project)
 */
export default {
  dateFormat,
  formatCash,
};
