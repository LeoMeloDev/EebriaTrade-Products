const request = () => 
    fetch('http://api.eebria.com/')
    .then((data) => data.json())
    .then((data) => data)

export default request;    
