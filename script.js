//Registrar o horario
const now = new Date();
const day = String(now.getDate()).padStart(2, '0'); // Add leading zero if needed
const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are zero-based
const hours = String(now.getHours()).padStart(2, '0');
const minutes = String(now.getMinutes()).padStart(2, '0');

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

    let url = sites[0].url;
    let hour = day+'/'+month+' às '+hours+':'+minutes;

    let homeSite = {
      url: url,
      hour: hour
    };

    //Preenche o history stack
    history.pushHistory(homeSite);

    //Atualiza lista visivel do histórico (criando um <p>)  
    const list = document.getElementById('historyListId');

    //HORA
    const hourParagraph = document.createElement('p');
    hourParagraph.id = 'new-hour-paragraph'
    hourParagraph.classList.add('hora');
    hourParagraph.textContent = hour;
    list.prepend(hourParagraph);

    //URL 
    const urlParagraph = document.createElement('p');
    urlParagraph.id = 'new-paragraph'
    urlParagraph.classList.add('history-site');
    urlParagraph.textContent = url;
    list.prepend(urlParagraph);
    
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
    // console.log('history');
    // console.log('visibility: ', document.getElementById('historyListId').style.visibility);
    if (document.getElementById('historyListId').style.visibility === 'visible') {
      document.getElementById('historyListId').style.visibility = 'hidden';
    }
    else{
      document.getElementById('historyListId').style.visibility = 'visible';
    }
    
}

const popHistory = () => {
  history.popHistory();
  console.log("history: ", history);  

  const list = document.getElementById('historyListId');
  const url = document.getElementById('new-paragraph');
  const hour = document.getElementById('new-hour-paragraph');
  list.removeChild(url);
  list.removeChild(hour);
}

const clearHistory = () => {
  history.clearHistory();
  console.log("history: ", history);  

  document.getElementById('historyListId').innerHTML = '';  
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
  // constructor(url, hour) {
  //   this.stack = [
  //     this.url = url,
  //     this.hour = hour
  //   ];
  // }
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
    document.getElementById('historyListId').style.visibility = 'visible';
    // console.log('Enter key pressed');
    // console.log('style.visibility: ', document.getElementById('historyListId').style.visibility);

    // if (document.getElementById('historyListId').style.visibility === 'hidden') {
    //   document.getElementById('historyListId').style.visibility = 'visible';
    //   console.log('entrei aqui!');
      
    // }
  }
});

//Ouvindo valor do input da url
const changeUrl = () => {
  // document.getElementById('urlInputId').addEventListener('input', (event) => {
    let input = document.getElementById('urlInputId');
    let currentValue = input.value;

    if (currentValue.includes('goog')) {
      input.value = currentValue.replace(currentValue, sites[0].url);
      document.getElementById('titleId').innerText = sites[0].title;
      document.getElementById('contentImgId').src = sites[0].img;
      document.getElementById('tabIconId').src = sites[0].icon;  
    } else if (currentValue.includes('face')) {
      input.value = currentValue.replace(currentValue, sites[1].url);
      document.getElementById('titleId').innerText = sites[1].title;
      document.getElementById('contentImgId').src = sites[1].img;
      document.getElementById('tabIconId').src = sites[1].icon;   
    } else if (currentValue.includes('insta')) {
      input.value = currentValue.replace(currentValue, sites[2].url);
      document.getElementById('titleId').innerText = sites[2].title;
      document.getElementById('contentImgId').src = sites[2].img;
      document.getElementById('tabIconId').src = sites[2].icon;  
    } else if (currentValue.includes('you')) {
      input.value = currentValue.replace(currentValue, sites[3].url);
      document.getElementById('titleId').innerText = sites[3].title;
      document.getElementById('contentImgId').src = sites[3].img;
      document.getElementById('tabIconId').src = sites[3].icon;  
    }


    //Rsgitro de site no historico
    let url = input.value;
    let hour = day+'/'+month+' às '+hours+':'+minutes;

    let historySite = {
      url: url,
      hour: hour
    };

    //Preenche o history stack
    history.pushHistory(historySite);

    //Atualiza lista visivel do histórico (criando um <p>)  
    const list = document.getElementById('historyListId');

    //HORA
    const hourParagraph = document.createElement('p');
    hourParagraph.id = 'new-hour-paragraph'
    hourParagraph.classList.add('hora');
    hourParagraph.textContent = hour;
    list.prepend(hourParagraph);

    //URL 
    const urlParagraph = document.createElement('p');
    urlParagraph.id = 'new-paragraph'
    urlParagraph.classList.add('history-site');
    urlParagraph.textContent = url;
    list.prepend(urlParagraph);



    // document.getElementById('historySiteId').innerHTML = url;
    // document.getElementById('historyHourId').innerHTML = hour;

    // //Atualiza lista visivel do histórico
    // document.getElementById('historyListId').innerHTML = '';
    // history.stack.forEach((site) => {
    //   let url = document.createElement('p');
    //   url.appendChild(document.createTextNode(site));
    //   document.getElementById('historyListId').appendChild(url);

    //   //Registrar o horario
    //   const now = new Date();
    //   const hours = now.getHours(); // Gets the current hour (0-23)
    //   const minutes = now.getMinutes(); // Gets the current minutes (0-59)

    //   let hora = document.createElement('p');
    //   hora.appendChild(document.createTextNode(site));
    //   document.getElementById('historyHourId').appendChild(hora);
    // });
  // });
}






