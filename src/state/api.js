const BASE_URL = 'https://api.bestbuy.com/v1/products';

const API_TOKEN = 'AbLMCxfXGS8vlNiAFQbYHUcM';

export const fetchListData = async () => {
  let url = new URL(`${BASE_URL}`);
  const params = {
    format: 'json',
    apiKey: API_TOKEN,
  };
  Object.keys(params).forEach((key) =>
    url.searchParams.append(key, params[key]),
  );
  url = url.href.replace('/?', '?');
  const response = await fetch(url, {
    method: 'GET',
    timeout: 30 * 1000,
  });
  const result = await response.json();
  return result.products;
};
