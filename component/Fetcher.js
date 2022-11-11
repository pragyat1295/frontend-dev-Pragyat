
import { loadData } from "./Loader.js";


export function fetcher(data) {

  if(data.length === 0 || !data) {
    console.error("No data provided");
  }
  else {
    console.log("Test case passed... getting data in fetcher")
  }

  // So, the idea is I will fetch 10 data initially and when the scoll event reach to the bottom then I will fetch 10 more data.
  // In this way it will prevent the load on the website.

    let initial_length = 0;
    let final_length = 10;

    // the load data function you ccan find in Loader.js component to display 10 data at a time.

      loadData(0,10, data); 

      window.addEventListener('scroll', () => {
        if(window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
            initial_length += 10;
            final_length += 10;
            loadData(initial_length, final_length, data);
        }
      })

      
}


