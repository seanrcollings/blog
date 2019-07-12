export default function formatDate(createdAt) {
  const date = new Date (createdAt)
  const day = date.getDate() 
  const month = date.getMonth() + 1
  const year = date.getFullYear()
  const strDate =  day + '/' + month + '/' + year
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  const strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime + ' ' + strDate 
}