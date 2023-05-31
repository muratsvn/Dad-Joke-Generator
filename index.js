const btnEl =document.getElementById('btn');
const jokeEl = document.getElementById('joke');
//api ninjas a git
//dad joke u bul ve anlat
//sonra ana sayfada premium a tıkla ve monthly i seç
//email ile kaydol ve API key i seç

const apiKey = "Ow050ekVy2rLnTgazqE0IQ==SdPbwD6s4Re7DunG";

const options = {
    method : "GET",
    headers : {
        "X-Api-Key" : apiKey
    },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";
async function getJoke(){

    try {
        jokeEl.innerText = "Updating...";
        //btnEl.disabled = true;
        //btnEl.innerText = "Loading...";
        const response = await fetch(apiURL, options); // API nin endpointi ile alıyoruz
        const data = await response.json();// convert the data to json

        console.log(data);//farklı görünür
        console.log(data[0]);//array olduğu için farklı görünür
        console.log(data[0].joke);// sadece joke olduğu için farklı görünür

        //btnEl.disabled = false;
        //btnEl.innerText = "Tell me a joke";
       jokeEl.innerText = data[0].joke; //p nin yerine joke u yazdırdık
 
    } catch (error) {
        //jokeEl.innerText ="An error happened, try again later"
        //network - no throttling sonrasında offline ı seç 
        //btnEl.disabled = false;
        //btnEl.innerText = "Tell me a joke";
        //console.log(error)
    }
    }

btnEl.addEventListener('click', getJoke);
