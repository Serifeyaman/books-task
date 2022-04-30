export const format = (inputDate) => {
    var date = new Date(inputDate);
    if (!isNaN(date.getTime())) {
        
        var month = (date.getMonth() + 1).toString()
        var date_ = date.getDate().toString()

        return (date_.length == 1 ? 0 + date_ : date_) + '.' + (month.length == 1 ? 0 + month : month) + '.' + date.getFullYear();
    } else {
        return inputDate
    }
}