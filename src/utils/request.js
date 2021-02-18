const request = () => fetch("http://api.eebria.com/").then(data => data.json());

export default request;
