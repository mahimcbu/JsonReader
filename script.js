const button = document.createElement('button');
button.innerHTML="Click to show!";
button.id = "myButton";
button.type = "submit";
button.addEventListener("click", ()=>{
    degrees();
})

document.body.appendChild(button);


const degrees = () =>{
    fetch("json.json")
    .then((resp)=> resp.json())
    .then((results)=>{
        console.log(results);
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

