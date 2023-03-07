const dropZone = document.querySelector(".dropZone")
const inputFile = document.getElementById("inputFile");
const icon = document.querySelector("#icon");

icon.addEventListener("click", function(){
    inputFile.click();
    
});

dropZone.addEventListener("dragover", ()=>{
    // dropZone.classList.add("dropZone_over");
    highlightDropzone("dropZone_over");
})

dropZone.addEventListener("dragleave", ()=>{
    // dropZone.classList.remove("dropZone_over");
    highlightDropzone("dropZone_over");
})

dropZone.addEventListener("drop", (event)=>{
    event.preventDefault();
    
})

function highlightDropzone(e){
    dropZone.classList.toggle(e);
}

