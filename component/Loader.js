import { whiteSpaceSeparator,  dateTimeSeparator} from "./SeparatorFunc.js";


export function loadData(init, final, data) {

  // The initial value and the final value should be numbers;

    if(typeof(init) !== "number" && typeof(final) !== "number") {
      console.error("the variable should always be a number");
    }
    else {
      console.log("Test case passed... the variables are the numbers")
    }

    if(data.length === 0 || !data) {
      console.error("No data provided");
    }
    else {
      console.log("Test case passed... getting data in loadData function")
    }

        // The idea is this function will take the initial value and final value and then display the data based on the range.

    // One more point to note is that since, the image was in jpg so it won't be good for the smaller screens and the load on the server
    //  will be more. Because the jpg, png files will get displayed as they are in size. So, to optimize them I change the images to 
    //  webp (nextgen format) to improve the performance.

    for(let i = init; i< final; i++) {
        document.querySelector('#t_body').innerHTML +=
        `
        <div class="table-row" id = ${'row'+ i}>
             <div class = "table-col">${i+1}</div>
             <div class = "table-col"><img class="img" src="/img.webp" width="64" height="40" /></div>
             <div class = "table-col" id = "filterName"> ${whiteSpaceSeparator(data[i].name)} </div> 
            <div class = "table-col"> ${data[i].theme}</div>
            <div class = "table-col"> ${data[i].type} </div>
            <div class = "table-col"> ${data[i].cost}</div>
            <div class = "table-col">${data[i].est_cust}</div>
            <div class = "table-col">${data[i].maintenance_time}</div>
            
            <div class = "table-col">${data[i].eworkers}</div>
            <div class = "table-col">${dateTimeSeparator(data[i].updated_at)}</div>
        </div>
            
        `
        
      }

      // there was the problem with the tsv file for the naming convention so I chsnged the workers category to eworkers.

  }