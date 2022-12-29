//axios import buraya gelecek
import axios from 'axios'

var benimIP;


// ------------ değiştirmeyin --------------
// licensed to Ergineer 2022
require("babel-core/register");
require("babel-polyfill");
async function ipAdresimiAl(){
	await axios({
		method: 'get',
		url: 'https://apis.ergineer.com/ipadresim',
	})
	.then(function (response) {
		return response.data
	})
	.then(function (a) {
		benimIP=a
	});
}				
// ------------ değiştirmeyin --------------


/*
	ADIM 1: axios kullanarak, aşağıdaki URL'ye GET sorgusu atacağız
    (tag içindeki yere kendi ipnizi yazarak URL'yi oluşturun):
    https://apis.ergineer.com/ipgeoapi/<ipniz>
	
	NOT: Bilgisayarın IP adresini öğrenmek için: https://apis.ergineer.com/ipadresim 
	ADIM 5'e gelene kadar fonksiyonunuzu test etmek için ip nizi URL'ye manuel olarak ekleyebilirsiniz.
*/

/*
	ADIM 2: Geri döndürülen verileri inceleyin, bu sizin ip bilgileriniz! Bileşen fonksiyonunuzu geliştirmek içindeki bu veri yapısını
	iyice anlamanız gerekmektedir.
	
*/
/*
	ADIM 3: Argümanı sadece 1 nesne kabül eden bir fonksiyon oluşturun.
    DOM metotlarını ve özelliklerini kullanarak, şunları gerçekleştirin:
	
	<div class="card">
	<img src={ülke bayrağı url} />
	<div class="card-info">
		<h3 class="ip">{ip adresi}</h3>
		<p class="ulke">{ülke bilgisi (ülke kodu)}</p>
		<p>Enlem: {enlem} Boylam: {boylam}</p>
		<p>Şehir: {şehir}</p>
		<p>Saat dilimi: {saat dilimi}</p>
		<p>Para birimi: {para birimi}</p>
		<p>ISP: {isp}</p>
	</div>
    </div>
*/

/*
	ADIM 4: API'den alınan verileri kullanarak ADIM 3'te verilen yapıda bir kart oluşturun ve 
	bu kartı DOM olarak .cards elementinin içine ekleyin. 
*/

/*
	ADIM 5: Manuel olarak eklediğiniz IP adresini dinamiğe dönüştürün. 
	Sayfanın en üstünde ---değiştirmeyin--- etiketleri arasında yer alan asenkron ipAdresimiAl() fonksiyonuna 
	sorgu atarak bilgisayarınız IP adresini dinamik olarak aldıracaksınız. Bu fonksiyon asenkron olarak çağırıldığında `benimIP` değişkenine 
	bilgisayarınızın IP adresini atayacaktır. 
	Örnek dinamik URL kullanımı: var url = "https://apis.ergineer.com/ipgeoapi/"+benimIP; 
*/



//kodlar buraya gelecek

const cards = document.querySelector(".cards");
const contention = async function (){
await ipAdresimiAl();
axios
.get(`https://apis.ergineer.com/ipgeoapi/${benimIP}`)
.then ((response) => {
	cards.appendChild(bilgi(response.data))
})
.catch((error)  => {
	console.log(`Error: ${error}`)
});
};
contention();
	

 


function bilgi(nesne){
const divCard = document.createElement("div");
divCard.classList.add("card");

const img = document.createElement("img");
img.src = nesne.ülkebayrağı;
divCard.appendChild(img);

const divCardİnfo = document.createElement("div");
divCardİnfo.classList.add("card-info");
divCard.appendChild(divCardİnfo);

const ipAdresi = document.createElement("h3");
ipAdresi.classList.add("ip");
ipAdresi.textContent = nesne.sorgu;
divCardİnfo.appendChild(ipAdresi);

const ulkeBilgisi = document.createElement("p");
ulkeBilgisi.classList.add("ulke");
ulkeBilgisi.textContent = `${nesne.ülke} (${nesne.ülkeKodu})`;
divCardİnfo.appendChild(ulkeBilgisi);

const enlemBoylam = document.createElement("p");
enlemBoylam.textContent = `Enlem: ${nesne.enlem} Boylam: ${nesne.boylam}`
divCardİnfo.appendChild(enlemBoylam);

const sehir = document.createElement("p");
sehir.textContent = `Şehir: ${nesne.şehir}`;
divCardİnfo.appendChild(sehir);

const saatDilimi = document.createElement("p");
saatDilimi.textContent = `Saat Dilimi: ${nesne.saatdilimi}`;
divCardİnfo.appendChild(saatDilimi);

const paraBirimi = document.createElement("p");
paraBirimi.textContent = `Para Birimi: ${nesne.parabirimi}`;
divCardİnfo.appendChild(paraBirimi);

const isp = document.createElement("p");
isp.textContent = `ISP: ${nesne.isp}`;
divCardİnfo.appendChild(isp);



return divCard;
}



