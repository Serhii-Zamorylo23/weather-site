axios.get('https://api.ipify.org?format=json')
.then((response)=>{console.log(response.data.ip)})
axios.get('https://ipapi.co/178.197.206.7/json/')