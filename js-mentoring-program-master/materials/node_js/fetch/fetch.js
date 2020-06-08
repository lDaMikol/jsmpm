fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'GET',
    headers: {}
  }
)
.then(response => response.json())
.then(json => console.log(json));