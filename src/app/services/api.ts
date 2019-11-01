export const getNews = async (category: string, country: string = 'tr') => {
  	const categoryParam = category ? `category=${category}&` : '';
  	const apiKey = 'bb363c3dde344f10b3f6924860f2667f'; // your api key

  	return fetch(`https://newsapi.org/v2/top-headlines?${categoryParam}country=${country}&apiKey=${apiKey}`)
		.then((response) => response.json())
		.catch((error) => alert(error));
}
