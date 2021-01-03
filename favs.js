const favouritesList = document.getElementById('personalFavourites');
let favourites = [
    {
        "login": "demirtuncer",
        "id": 13125736,
        "node_id": "MDEyOk9yZ2FuaXphdGlvbjEzMTI1NzM2",
        "avatar_url": "https://avatars2.githubusercontent.com/u/13125736?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/demirtuncer",
        "html_url": "https://github.com/demirtuncer",
        "followers_url": "https://api.github.com/users/demirtuncer/followers",
        "following_url": "https://api.github.com/users/demirtuncer/following{/other_user}",
        "gists_url": "https://api.github.com/users/demirtuncer/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/demirtuncer/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/demirtuncer/subscriptions",
        "organizations_url": "https://api.github.com/users/demirtuncer/orgs",
        "repos_url": "https://api.github.com/users/demirtuncer/repos",
        "events_url": "https://api.github.com/users/demirtuncer/events{/privacy}",
        "received_events_url": "https://api.github.com/users/demirtuncer/received_events",
        "type": "Organization",
        "site_admin": false,
        "score": 1.0
      },
      {
        "login": "gitydesign",
        "id": 13125494,
        "node_id": "MDEyOk9yZ2FuaXphdGlvbjEzMTI1NDk0",
        "avatar_url": "https://avatars1.githubusercontent.com/u/13125494?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/gitydesign",
        "html_url": "https://github.com/gitydesign",
        "followers_url": "https://api.github.com/users/gitydesign/followers",
        "following_url": "https://api.github.com/users/gitydesign/following{/other_user}",
        "gists_url": "https://api.github.com/users/gitydesign/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/gitydesign/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/gitydesign/subscriptions",
        "organizations_url": "https://api.github.com/users/gitydesign/orgs",
        "repos_url": "https://api.github.com/users/gitydesign/repos",
        "events_url": "https://api.github.com/users/gitydesign/events{/privacy}",
        "received_events_url": "https://api.github.com/users/gitydesign/received_events",
        "type": "Organization",
        "site_admin": false,
        "score": 1.0
      }
]

// window.localStorage.setItem('gn-favourites', JSON.stringify(favourites))
ls_favs = JSON.parse(window.localStorage.getItem('gn-favourites'))

function getCurrentFavourites() {
    return JSON.parse(window.localStorage.getItem('gn-favourites'))
}

function deleteEntry(id) {
    // alert('deleting entry with id ' + id)
    // , remove entry with favs.login == id, save resulting json as the new item.
    json = getCurrentFavourites() // get current favs from localStorage
    // Remove entry where id == entry.id
    var filtered = json.filter(function(item) { 
        return item.login !== id;  
     });
    window.localStorage.setItem('gn-favourites', JSON.stringify(filtered))
    displayCharacters(getCurrentFavourites())


}

const loadCharacters = async () => {
    displayCharacters(ls_favs);
};

const displayCharacters = (characters) => {
    const htmlString = characters
        .map((character) => {
            return `
            <li class="character">
                <h2>${character.login}</h2>
                <p></p>
                <a href="${character.repos_url}"></a>
                <img src="${character.avatar_url}"></img>
                <button id="${character.login}" onclick="deleteEntry(this.id)" style="margin-top: 6px;">remove</button>
            </li>
        `;
        })
        .join('');
    favouritesList.innerHTML = htmlString;
};




loadCharacters();