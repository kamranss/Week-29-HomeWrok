const dropZone = document.querySelector(".dropZone")
const inputFile = document.getElementById("inputFile");
const icon = document.querySelector("#icon");
const tBody = document.querySelector(".tBody")
let files; // dropped filles will be assigned to this global variable

icon.addEventListener("click", function(){
    inputFile.click();
    
});

inputFile.onchange = ({target}) => {
    console.log(target.files);
}

dropZone.addEventListener("dragover", (event)=>{
    event.preventDefault()
    dropZone.classList.add("dropZone_over");
  
})

dropZone.addEventListener("dragleave", ()=>{
    dropZone.classList.remove("dropZone_over");
   
})

dropZone.addEventListener("drop", (event)=>{
    event.preventDefault();
    // files = event.dataTransfer.files()
    // console.log(event.dataTransfer);
        
    let tr = document.createElement("tr");
     tr.innerHTML =  `<tr>
    <th scope="row">1</th>
    <td>Mark</td>
    <td>Otto</td>
    <td>@mdo</td>
    <td> <i class="fa-solid fa-file"></i></td>
    <td class="td-4 d-flex justify-content-between">
        <div class="progress-box">
           <div class="uploadProgress_backround" >
            <div class="uploadProgress"></div>
           </div>
            <span class="percent"></span>
        </div>
       <div class="icon-check-box">
        <i class="fa-solid fa-check Icon-check"></i>
       </div>
    </td>
    </tr>`;
tBody.append(tr);
})

// function highlightDropzone(e){
//     dropZone.classList.toggle(e);
// }

