import 'bootstrap'
import '../css/style.scss'
import '../assets/image.png'
import '../assets/positif.png'
import '../assets/sembuh.png'
import '../assets/meninggal.png'
import { data } from 'jquery'


const apiUrl = "https://indonesia-covid-19.mathdro.id/api";

function getDataIndonesia() {
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {

        let positif = data.jumlahKasus
        let sembuh = data.sembuh
        let meninggal = data.meninggal
        document.getElementById('data-date').innerHTML = `${new Date().toDateString()}`
        document.getElementById("data-positif").innerHTML = positif
        document.getElementById("data-sembuh").innerHTML = sembuh
        document.getElementById("data-meninggal").innerHTML = meninggal  
    })
    .catch(err => {
        console.log(err)
    });
}


function getDataProvinsi() {

  let dataProvinsi = "";

  fetch(`${apiUrl}/provinsi`)
  .then(response => response.json())
  .then(data => {
      
      data.data.forEach(function(item,idx) {
          dataProvinsi += `<tr>`
          dataProvinsi += `<td>${idx+1}</td>`
          dataProvinsi += `<td> ${item.provinsi}</td>`
          dataProvinsi += `<td> ${item.kasusPosi}</td>`
          dataProvinsi += `<td> ${item.kasusSemb}</td>`
          dataProvinsi += `<td> ${item.kasusMeni}</td>`
          dataProvinsi += `</tr>`
      })

      document.getElementById("table-provinsi").innerHTML = dataProvinsi
  })
  .catch(err => {
      console.log(err)
  });
}


getDataProvinsi()
getDataIndonesia()



