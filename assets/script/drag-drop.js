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


// Manage the drop event
dropZone.addEventListener("drop", (event)=>{
    event.preventDefault();
    // files = event.dataTransfer.files()
    // console.log(event.dataTransfer);
    

    // Remove the style while drop event accur
    dropZone.classList.remove("dropZone_over");

    // Get the dropped files
    let files = event.dataTransfer.files;

    for (let i = 0; i < files.length; i++) {
        const file = files[i];

        let reader = new FileReader();

        reader.onloadend = function (e) {


        let fileName = file.name; //getting file name
        if (fileName.length >= 12) { //if file name length is greater than 12 then split it and add ...
            let splitName = fileName.split('.');
            fileName = splitName[0].substring(0, 13) + "... ." + splitName[1];
        }

        let fileTotal = Math.floor(total / 1000); //gettting total file size in KB from bytes
        let fileSize;
        (file.size < 1024) ? fileSize = file.size + " KB" : fileSize = (file.size / (1024*1024)).toFixed(2) + " MB";

        let tr = document.createElement("tr");
        tr.innerHTML =  `<tr>
        <th scope="row">1</th>
        <td>${fileName}</td>
        <td><img src="${e.target.result}" alt=""></td>
        <td> ${fileSize}</td>
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
            
        }

        
            
    }



    
})



