import './style.css'
import { merge } from './merge.js';
import {fetcher} from './component/Fetcher.js';
import {filterName} from './component/Filter.js';


document.querySelector('#app').innerHTML = `
  <div id="app">
  
    <div class = "table-row">
      <div class = "table-col head" >S.No.</div>
      <div class = "table-col head" >Image</div>
      <div class = "table-col head" >Name</div>
      <div class = "table-col head" >Theme</div>
      <div class = "table-col head" >Type</div>
      <div class = "table-col head" >Cost</div>
      <div class = "table-col head" >Estimated<br>Customers</div>
      <div class = "table-col head" >Maintenance<br>Time</div>
      <div class = "table-col head" >Workers<br>Required</div>
      <div class = "table-col head" >Updated</div>
    </div>  
  
  
    <div  id = t_body>
    </div>


  </div>
`;

// filterName();
let arr1 = [];
let arr2 = [];


// since, the file is in tsv so we need to convert the file into json because server reads json only.

d3.tsv("./data1.tsv", function (data1) {

  // get the data and then push it to the array and call the function to merge the data.
  for(let i =0; i<data1.length; i++) {
    arr1.push(data1[i]);
  }
  
  tsvJsonMerge();
  
});

function tsvJsonMerge() {
  fetch('./data2.json')
    .then((response) => response.json())
    // take the data from the json and fill it to the array2.
    .then(data2 => {
      for(let i =0; i<data2.length; i++) {
        arr2.push(data2[i]);
      }

      // arr1 data we will be get by callback function and then merge both the data and send it to fetcher for the display. 
      let mergeData = merge(arr1, arr2); 
      
      // fetcher function is used to display the data I have implemented infinite loading in the same function.
      fetcher(mergeData);
      // console.log("merge data length", mergeData.length);
    })
    .catch(error => console.log(error))
} 



