export function merge(data1, data2) {
  const start = Date.now();
  let data = [];
  const res = window.performance.now(); // merge duration in micro seconds.
  

  if ((!data1 || data1.length == 0) || (!data2 || data2.length == 0) ) {
    console.error('No data provided');
  }

  //your code - start


  data = data1.concat(data2);

  //your code - end

  const duration = Date.now() - start;
  console.log("Merge duration: ", duration);
  console.log("Merge duration in microSec: ",window.performance.now()-res); //// display merge duration in micro seconds.
  return data;
}