const playerContainer = document.getElementById("all-players-container");
const newPlayerFormContainer = document.getElementById("new-player-form");

// Add your cohort name to the cohortName variable below, replacing the 'YOUR COHORT NAME HERE' placeholder
const cohortName = "YOUR COHORT NAME HERE";
// Use the APIURL variable for fetch requests
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/`;

const fetchAllPlayers = async () => {
  try {
    const response = await fetch(APIURL + 'players');
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

const fetchSinglePlayer = async (playerId) => {
  try {
  } catch (err) {
    console.error(`Oh no, trouble fetching player #${playerId}!`, err);
  }
};

const addNewPlayer = async (playerObj) => {
  try {
  } catch (err) {
    console.error("Oops, something went wrong with adding that player!", err);
  }
};

const removePlayer = async (playerId) => {
  try {
  } catch (err) {
    console.error(`Whoops, trouble removing player #${playerId} from the roster!`, err);
  }
};

const renderAllPlayers = (playerList) => {
  try {
    let playerContainerHTML = '';
    playerList.forEach(player => {
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

const renderNewPlayerForm = () => {
  try {
  } catch (err) {
    console.error("Uh oh, trouble rendering the new player form!", err);
  }
};

const init = async () => {
  const players = await fetchAllPlayers();
  renderAllPlayers(players);

  renderNewPlayerForm();
};

init();
