// to convert whitespace into linebreak

export function whiteSpaceSeparator(str) {

    return str.replace(" ", '<br>'); 
}
  
// to separate data and time.

export function dateTimeSeparator(data) {
  const [dateStr, timeStr] = data.split('T');
 
  const [time, randNum] = timeStr.split('.');
  
  return dateStr + '<br>' + time;
}