function setCookie(cookieName,cookieValue,daysToExpire){
    // create date
let date = new Date();
//prima metoda
let utcDate = date.getTime();
let daysToExpireUTC = (new Date(utcDate + (daysToExpire * 86400000))).toUTCString();
// a doua metoda
let anotherDate = (new Date(date.getUTCFullYear(), date.getUTCMonth(), (date.getUTCDate() + daysToExpire))).toUTCString();

//toDateString();toUTCString();
console.log(daysToExpireUTC);
console.log(anotherDate);
console.log(`"${cookieName} = ${cookieValue}; expires = ${daysToExpireUTC}";`);
//"MosVasile = oVodca; expires = 21 Jan 2020 20:00:00 UTC";
    localStorage.setItem(`"${cookieName} = ${cookieValue}; expires = ${daysToExpireUTC}";`);
    // create cookie 
      }
function getCookie(cookieName){
       // access cookie
      }
function verifiyCookie(){
      // verify cookie
      // use prompt messages 
      // if cookie doesnt exist use prompt to show message "Hello, please insert your name"
      // if cookie exist show message "Hello {name}"
      }