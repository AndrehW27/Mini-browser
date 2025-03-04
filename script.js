const closeTab = () => {
  console.log('Close tab');
  document.getElementById('containerId').style.display = 'none';
}

const goBack = () => {
  console.log('goBack');
  document.getElementById('urlInputId').value = sites[0].url;
  document.getElementById('contentImgId').src = sites[0].img;
  document.getElementById('tabIconId').src = sites[0].icon;
}
  
const goForward = () => {
  console.log('goForward');
  document.getElementById('urlInputId').value = sites[1].url;
  document.getElementById('contentImgId').src = sites[1].img;
  document.getElementById('tabIconId').src = sites[1].icon;
}  
  
const refreshPage = () => {
  console.log('refreshPage');
  location.reload();
}
  
const goHome = () => {
    console.log('goHome');
    document.getElementById('titleId').innerText = sites[0].title;
    document.getElementById('contentImgId').src = sites[0].img;
    document.getElementById('tabIconId').src = sites[0].icon;  
    document.getElementById('urlInputId').value = sites[0].url;  
}
  
const minimize = () => {
  console.log('Minimize');  
  document.getElementById('containerId').style.height = '50vh';
  document.getElementById('containerId').style.width = '50vw';
}

const maxmize = () => {
  console.log('Maxmize');
  document.getElementById('containerId').style.height = '90vh';
  document.getElementById('containerId').style.width = '95vw';
}

const closewindow = () => {
  console.log('closewindow');
  document.getElementById('containerId').style.display = 'none';
}

const newTab = () => {
  console.log('newTab');
}
  
const seeHistory = () => {
    console.log('history');
    document.getElementById('historyListId').style.visibility = 'visible';
}

// ==============================
//SITES/HISTORY OBJECT LISTS
// ==============================

var sites = [];
sites.push({title: 'Google', url: 'https://www.google.com', icon: 'https://www.google.com/favicon.ico',img:'./assets/google-dev.png'});
sites.push({title: 'Facebook', url: 'https://www.facebook.com', icon: 'https://www.facebook.com/favicon.ico',img:'./assets/facebook-img.png'});
sites.push({title: 'Instagram', url: 'https://www.instagram.com', icon: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png',img:'./assets/insta.avif'});
sites.push({title: 'YouTube', url: 'https://www.youtube.com', icon: 'https://www.youtube.com/favicon.ico',img:'./assets/youtube-logo.jpeg'});

console.log("Sites: ", sites);

//HISTORY
class HistoryStack {
  constructor() {
    this.stack = [];
  }

  pushHistory(site) {
    this.stack.push(site);
    console.log("history: ", this.stack);
  }

  popHistory() {
    return this.stack.pop();
    console.log("history: ", this.stack);
  }

  peekHistory() {
    return this.stack[this.stack.length - 1];
    console.log("history: ", this.stack);
  }

  clearHistory() {
    this.stack = [];
    console.log("history: ", this.stack);
  }
}

const history = new HistoryStack();

console.log("history: ", history);


//Setando a home para google
document.getElementById('urlInputId').value = sites[0].url;
document.getElementById('contentImgId').src = sites[0].img;
document.getElementById('tabIconId').src = sites[0].icon;

//Selecionar tudo ao clicar na url
document.getElementById('urlInputId').addEventListener('click', () => {
  document.getElementById('urlInputId').select(); // Select all text in the input field
});

//Chamar ao teclar enter
document.getElementById('urlInputId').addEventListener('keydown', (event) => {
  if (event.key === 'Enter') { // Check if the key pressed is Enter
    changeUrl();
    console.log('Enter key pressed');
  }
});

//Ouvindo valor do input da url
const changeUrl = () => {
  // document.getElementById('urlInputId').addEventListener('input', (event) => {
    let input = document.getElementById('urlInputId');
    let currentValue = input.value;

    if (currentValue.includes('goog')) {
      input.value = currentValue.replace("goog", sites[0].url);
      document.getElementById('titleId').innerText = sites[0].title;
      document.getElementById('contentImgId').src = sites[0].img;
      document.getElementById('tabIconId').src = sites[0].icon;  
    } else if (currentValue.includes('face')) {
      input.value = currentValue.replace("face", sites[1].url);
      document.getElementById('titleId').innerText = sites[1].title;
      document.getElementById('contentImgId').src = sites[1].img;
      document.getElementById('tabIconId').src = sites[1].icon;   
    } else if (currentValue.includes('insta')) {
      input.value = currentValue.replace("insta", sites[2].url);
      document.getElementById('titleId').innerText = sites[2].title;
      document.getElementById('contentImgId').src = sites[2].img;
      document.getElementById('tabIconId').src = sites[2].icon;  
    } else if (currentValue.includes('you')) {
      input.value = currentValue.replace("you", sites[3].url);
      document.getElementById('titleId').innerText = sites[3].title;
      document.getElementById('contentImgId').src = sites[3].img;
      document.getElementById('tabIconId').src = sites[3].icon;  
    }
    history.pushHistory(document.getElementById('urlInputId').value);
  // });
}






