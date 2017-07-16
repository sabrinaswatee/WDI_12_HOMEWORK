Infinite Giphy

When the user enters a search term, return 10 images from Giphy, and arrange them vertically on the page.

When the user scrolls near to the bottom of the page, load an additional 10 images. And keep going!

https://github.com/Giphy/GiphyAPI

let query = {
  text: null,
  offset: 0,
  request() {
    return `${BASE_URL}${ENDPOINT}?q=${this.text}&limit=${LIMIT}&rating=${RATING}&offset=${this.offset}&api_key=${PUBLIC_KEY}`;
  },
  fetch(callback) {
    $.getJSON(this.request())
      .success(data => {
        let results = data.data;

        if (results.length) {
          let url = results[0].images.downsized.url;
          console.log(results);
          callback(url);
        } else {
          callback('');
        }
      })
      .fail(error => {
        console.log(error);
      });
  }
}

https://api.giphy.com/v1/gifs/search?api_key=3b3542e9b7654951aa379eecd9b72f63&q=&q=jaws&limit=25&offset=0&rating=G&lang=en
