// Accessing HTML elements
const playerContainer = document.getElementById("all-players-container");
const newPlayerFormContainer = document.getElementById("new-player-form");

// Cohort name variable, replace with your own cohort name
const cohortName = "2302-ACC-CT-PT-B";
// Base URL for fetch requests
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/`;

/**
 * It fetches all players from the API and returns them
 * @returns An array of objects.
 */
const fetchAllPlayers = async () => {
  try {
    const response = await fetch(APIURL + "players");
    const result = await response.json();

    if (result.success) {
      return result.data.players;
    } else {
      throw new Error(result.error.message);
    }
  } catch (err) {
    console.error("Uh oh, trouble fetching players!", err);
  }
};

/**
 * Function to fetch a single player. To be implemented.
 * @param playerId - the ID of the player to be fetched
 */
const fetchSinglePlayer = async (playerId) => {
  try {
    fetch(
      `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/players/${playerId}`
    );
  } catch (err) {
    console.error(`Oh no, trouble fetching player #${playerId}!`, err);
  }
};

/**
 * Function to add a new player. To be implemented.
 * @param playerObj - the player object to be added
 */
const addNewPlayer = async (playerObj) => {
  try {
    // Code to add a new player goes here
  } catch (err) {
    console.error("Oops, something went wrong with adding that player!", err);
  }
};

/**
 * Function to remove a player. To be implemented.
 * @param playerId - the ID of the player to be removed
 */
const removePlayer = async (playerId) => {
  try {
    // Code to remove a player goes here
  } catch (err) {
    console.error(
      `Whoops, trouble removing player #${playerId} from the roster!`,
      err
    );
  }
};

/**
 * It takes an array of player objects, loops through them, and creates a string of HTML for each
 * player, then adds that string to a larger string of HTML that represents all the players.
 *
 * Then it takes that larger string of HTML and adds it to the DOM.
 *
 * The event listeners for "See details" and "Remove from roster" buttons need to be implemented.
 * @param playerList - an array of player objects
 */
const renderAllPlayers = (playerList) => {
  try {
    let playerContainerHTML = "";
    playerList.forEach((player) => {
      playerContainerHTML += `
      <div class="player-card">
        <img src="${player.imageUrl}" alt="${player.name}">
        <h2>${player.name}</h2>
        <p>Breed: ${player.breed}</p>
        <p>Status: ${player.status}</p>
        <button class="details-button" data-id="${player.id}">See details</button>
        <button class="remove-button" data-id="${player.id}">Remove from roster</button>
      </div>`;
    });

    playerContainer.innerHTML = playerContainerHTML;
  } catch (err) {
    console.error("Uh oh, trouble rendering players!", err);
  }
};

const renderSinglePlayer = (player) => {
  try {
    // create card and append to container
    const playerCard = document.createElement("div");
    playerCard.id = player.id;
    playerCard.className = "player-card";
    playerContainer.appendChild(playerCard);

    // create h2
    const playerName = document.createElement("h2");
    playerCard.appendChild(playerName);
    playerName.innerHTML = player.name;

    const playerBreed = document.createElement("p");
    playerCard.appendChild(playerBreed);
    playerBreed.innerHTML = `Breed: ${player.breed}`;

    const playerStatus = document.createElement("p");
    playerCard.appendChild(playerStatus);
    playerStatus.innerHTML = `Status: ${player.status}`;

    // create img for image
    const playerImage = document.createElement("img");
    playerImage.className = "player-image";
    playerCard.appendChild(playerImage);
    playerImage.src = player.imageUrl;

    // create show details button
    const showDetailsButton = document.createElement("button");
    playerCard.appendChild(showDetailsButton);
    showDetailsButton.innerHTML = "See details";

    // create delete button
    const deleteButton = document.createElement("button");
    playerCard.appendChild(deleteButton);
    deleteButton.innerHTML = "Remove from roster";

    return playerCard;
  } catch (err) {
    console.error("Uh oh, trouble rendering player!", err);
  }
};

/**
 * It renders a form to the DOM, and when the form is submitted, it adds a new player to the database,
 * fetches all players from the database, and renders them to the DOM. To be implemented.
 */
const renderNewPlayerForm = () => {
  try {
    // Code to render a form for a new player goes here
    const form = document.createElement("div");
    form.innerHTML = `
      <form>
        <label for="name">Name:</label><br>
        <input type="text" id="name" name="name"><br>
        <label for="breed">Breed:</label><br>
        <input type="text" id="breed" name="breed"><br>
        <label for="status">Status:</label><br>
        <input type="text" id="status" name="status"><br>
        <label for="imageUrl">ImageUrl:</label><br>
        <input type="text" id="imageUrl" name="imageUrl"><br>
        <input type="submit" id="submit-button" value="Submit">
      </form>
    `;
    newPlayerFormContainer.appendChild(form);
  } catch (err) {
    console.error("Uh oh, trouble rendering the new player form!", err);
  }
};

/**
 * Initial function that fetches all players from the API and renders them to the DOM,
 * then renders a form to the DOM for adding new players.
 */
const init = async () => {
  const players = await fetchAllPlayers();
  // renderAllPlayers(players);
  // renderSinglePlayer(players[0]);

  renderNewPlayerForm();
};

// Call the initial function
init();
