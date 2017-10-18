var site = location.search.substring(1).split('=')[1];
$.get('https://www.reddit.com/r/halloween.json')
.then(function (success) {
    var info = success[0];
    var grabPosts = contentInfo(success);

    grabPosts.forEach(function (redditPosts) {

        var redditContent = document.createElement('div');
        document.body.appendChild(redditContent);
        var titles = document.createElement('h3');
            titles.innerText = redditPosts.title;
            redditContent.appendChild(titles);
        var attributes = document.createElement('a');
            attributes.setAttribute('href', 'single.html?url=' + redditPosts.permalink);
            attributes.appendChild(titles);
            redditContent.appendChild(attributes);
        var pics = document.createElement('img');
            pics.setAttribute('src',redditPosts.url);
            redditContent.appendChild(pics);
    });
});

function contentInfo(content) {
    var children = content.data.children;
   
return children.map(function(child) {
    var redditPosts = {};
    redditPosts.thumbnail = child.data.thumbnail;
    redditPosts.title = child.data.title;
    redditPosts.url = child.data.url;
    redditPosts.permalink = child.data.permalink;

    return redditPosts;

        
    });
}
