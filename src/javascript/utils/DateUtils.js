export default {
    formatDateYYYYMMDD: function (date, delimeter = '/') {
        let year = date.getFullYear();
        let month = (date.getMonth()+1);

        //Adds the 0 infront of month if it less than 10
        if(month < 10){
            month = '0'+month; 
        }

        let day = date.getDay();

          //Adds the 0 infront of month if it less than 10
        if(day < 10){
            day = '0'+day; 
        }

        return `${year}${delimeter}${month}${delimeter}${day}`;
    },
    toIsoString: function (date) {
        let dateString = date.toISOString();

        return dateString.slice(0,dateString.length -1);
    }


}