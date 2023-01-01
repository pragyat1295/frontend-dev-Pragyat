export function filterName(nameArr) {
    document.querySelector('#myInput').onkeyup = function() {
    // document.getElementById('myInput').onkeyup = function() {
        var filter = this.value.toUpperCase();
        console.log(filter);
        var data = document.querySelector('#filterName');
        console.log('data is' ,data);
        console.log(nameArr);
       
      nameArr.filter(elem => {
        if(elem.includes(filter)) {
            console.log('found', elem);
        }
      })
       
       
      }
}

export function filterTheme() {
    console.log("Theme connected");
}