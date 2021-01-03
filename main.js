const charactersList = document.getElementById('charactersList');
const searchBar = document.getElementById('searchBar');
let hpCharacters = [];

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredCharacters = hpCharacters.items.filter((character) => {
        return (
            character.login.toLowerCase().includes(searchString)
            // || character.house.toLowerCase().includes(searchString)
        );
    });
    displayCharacters(filteredCharacters);
});

const loadCharacters = async () => {
    try {
        const res = await fetch('./organizations.json');
        hpCharacters = await res.json();
        displayCharacters(hpCharacters.items);
    } catch (err) {
        console.error(err);
    }
};


async function addEntry(id) {
    try {
        const res = await fetch('./organizations.json');
        all_orgs = await res.json();
        new_obj = all_orgs.items.find(x => x.login == id)
        currentStorage = JSON.parse(window.localStorage.getItem('gn-favourites'))
        currentStorage.push(new_obj)
        window.localStorage.setItem('gn-favourites', JSON.stringify(currentStorage))
    } catch (err) {
        console.error(err);
    }
}

async function getAllOrganizations() {
    const res = await fetch('./organizations.json');
    all_orgs = await res.json();
    return all_orgs.items
}


const displayCharacters = (characters) => {
    const htmlString = characters
        .map((character) => {
            return `
            <li class="character">
                <h2>${character.login}</h2>
                <p></p>
                <a href="${character.repos_url}"></a>
                <img src="${character.avatar_url}"></img>
                <button id="${character.login}" onclick="addEntry(this.id)" style="margin-top: 6px;">add to favourites</button>
            </li>
        `;
        })
        .join('');
    charactersList.innerHTML = htmlString;
};

loadCharacters();
