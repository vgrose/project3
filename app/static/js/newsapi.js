
// For particular topic:

const searchinput= "laser";
const date ='2019-07-22';
var url = 'https://newsapi.org/v2/everything?' +
    'q=' + { searchinput } + '&' +
    'from=' + { date } + '&' + // date format :: 2019-07-22
    'sortBy=popularity&' +
    'apiKey=b2ce97241188410e9ecc5d06f604130f'; // + {apiKey};
console.log(url);
const newsurl = url;

var req = new Request(url);

fetch(req).then(function (response) {
    console.log(response.json());
})



// // Top and breaking news:
// var url = 'https://newsapi.org/v2/top-headlines?' +
// 'country=us&' +
// 'apiKey=b2ce97241188410e9ecc5d06f604130f';
// var req = new Request(url);
// fetch(req)
// .then(function(response) {
// console.log(response.json());
// })


// // From particular news Source:


// var url = 'https://newsapi.org/v2/top-headlines?' +
//           'sources=bbc-news&' +
//           'apiKey=b2ce97241188410e9ecc5d06f604130f';
// var req = new Request(url);
// fetch(req)
//     .then(function(response) {
//         console.log(response.json());
//     })


