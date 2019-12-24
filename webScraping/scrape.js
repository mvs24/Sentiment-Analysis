const request = require("request");
const cheerio = require("cheerio");

request("https://www.instagram.com/p/BPYgQdMgs6E/", (err, res, html) => {
  if (!err && res.statusCode == 200) {
    const $ = cheerio.load(html);

    const commentsContainer = $('.Mr508')
    const comments = commentsContainer.children('li a');
    // console.log(comments)
    comments.each((i, el) => {
      const item = $(el).text();
      console.log(item.children)
    })
  }     
});
 
