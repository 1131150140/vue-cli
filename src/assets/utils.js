export const formaTime = time => {
    let d = new Date(time);
    let Month =  d.getMonth() + 1 < 10 ? '0'+(d.getMonth() + 1) : d.getMonth() + 1;
    let Date1 = d.getDate() < 10 ? '0'+d.getDate() : d.getDate();
    let hour = d.getHours() < 10 ? '0'+d.getHours() : d.getHours();
    let Minutes = d.getMinutes() < 10 ? '0'+d.getMinutes() : d.getMinutes();
    let Seconds = d.getSeconds() < 10 ? '0'+d.getSeconds() : d.getSeconds();
     return d.getFullYear() + '-' + Month + '-' + Date1 + ' ' + hour + ':' + Minutes + ':' + Seconds; 
 }