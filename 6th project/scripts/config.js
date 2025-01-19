function openPlayerConfig(event) {
    editedPlayer = +event.target.dataset.playerid;
    playerConfigOverlayElement.style.display = 'block';
    backdropElement.style.display = 'block';
}

function closePlayerConfig() {
    playerConfigOverlayElement.style.display = 'none';
    backdropElement.style.display = 'none';
    errorsOutputElement.textContent = '';
    formElement.firstElementChild.lastElementChild.value='';
}

function savePlayerConfig(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const enteredPlayerName = formData.get('playername').trim();


if(enteredPlayerName ==='') {
    errorsOutputElement.textContent = 'Please enter a valid name!';
    return;
}

const updatedPlayerDataElement = document.getElementById(`player-${editedPlayer}-data`);
updatedPlayerDataElement.children[1].textContent= enteredPlayerName;

players[editedPlayer-1].name = enteredPlayerName;
closePlayerConfig();
}

