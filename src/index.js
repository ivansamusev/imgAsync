function photo(){
setTimeout(() => {
       fetch('https://jsonplaceholder.typicode.com/photos')
  .then(response => response.json())
  .then(data => {
    console.log('slice :>> ', data.slice(0, 50));
    data.slice(0, 50).forEach(item => {
      const img  = document.createElement('img');
        img.src= item.url
      const push = document.body.append(img);
    });
  })
  .catch(error);   
}, 1500);
}

photo()
   


 