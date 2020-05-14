let timeStamp_value = api.data[0].created;
theDate = new Date(timeStamp_value * 1000);
dateString = theDate.toLocaleDateString();
console.log(dateString);

//aqui convertí la fecha de created
