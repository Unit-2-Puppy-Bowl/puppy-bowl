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
    // Code to fetch a single player goes here
  } catch (err) {
    console.error(`Oh no, trouble fetching player #${playerId}!`, err);
  }
};

// Add input for name, breed, submit button

/**
 * Function to add a new player. To be implemented.
 * @param playerObj - the player object to be added
 */
const addNewPlayer = async (breed, Name) => {
  try {
    const response = await fetch(APIURL + "players", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: `${name}`,
        breed: `${breed}`,
      }),
    });
    const result = await response.json();
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
    fetch(`${APIURL}/players/${playerId}`, { method: 'DELETE'});
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
        <img src="${player.imageUrl}" alt="${player.name}" style = "max-width: 300px">
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

/**
 * It renders a form to the DOM, and when the form is submitted, it adds a new player to the database,
 * fetches all players from the database, and renders them to the DOM. To be implemented.
 */
const renderNewPlayerForm = () => {
  try {
    const nameInput = document.createElement("input")
    const breedInput = document.createElement("input")
    // for line 116-117 add id tag, append them to form already existing.
    // repeat for submit buttons.
    // Code to render a form for a new player goes here
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
  renderAllPlayers(players);

  renderNewPlayerForm();
};

// Call the initial function
init();
