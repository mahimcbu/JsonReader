const button = document.createElement('button');
button.innerHTML="Click to show!";
button.id = "myButton";
button.type = "submit";
button.addEventListener("click", ()=>{
    degrees(); // doing all the fetch, parsing json objects into html table.
    chekPromise(); //using promise all to check for promise  returns and catch any error
})

document.body.appendChild(button);


const degrees = () =>{
  
    fetch("json.json")
    .then((resp)=> resp.json())
    .then((results)=>{
    const databody = document.getElementById("databody");
    let out ="";
    for (let result of results) {
        out +=`
            <tr>
                <td>${result.School}</td>
                <td>${result.Program}</td>
                <td>${result.Type}</td>
                <td>${result.Gpa}</td>
                <td>${result.Year}</td>
            </tr>
        `;      
    }
    databody.innerHTML = out;
    })

}

const chekPromise = () => {
    const urls = [
        './json.json'
       ]
       Promise.all(urls.map(url =>
           fetch(url).then(resp => resp.json())
       ))
         .then(results => {
           console.log('1', results[0])
         })
         .catch((err) =>{
            console.log('ughhhh fix it!', err)
         });
}
