const dropZone = document.querySelector(".dropZone");
const inputFile = document.getElementById("inputFile");
const icon = document.querySelector("#icon");
const tHead = document.querySelector(".tHead");
let buttonBox = document.querySelector(".btn-box");
let fileNameExtension = document.getElementById("fileNameExtension");

let files; // dropped filles will be assigned to this global variable



icon.addEventListener("click", function () {
    inputFile.click();

});

dropZone.addEventListener("dragover", (event) => {
    event.preventDefault()
    dropZone.classList.add("dropZone_over");
})

dropZone.addEventListener("dragleave", () => {
    dropZone.classList.remove("dropZone_over");

})

// manage while choosing file
inputFile.onchange = function (event) {
    event.preventDefault();

    // Remove the style while drop event accur
    dropZone.classList.remove("dropZone_over");

    // Get the dropped files
    Array.from(event.target.files).forEach(file => {
        let reader = new FileReader();

        reader.onloadend = function (e) {

            let imgSource = e.target.result;
            // the number of uploaded item

            fileNameExtension.innerText++;
            let fileName = file.name.length >= 2 ? file.name.split('.')[0].substring(0, 13) + fileNameExtension.innerText + "... ." + file.name.split('.')[1] : file.name;

            let fileSize;
            (file.size < 1024) ? fileSize = file.size + " KB" : fileSize = (file.size / (1024 * 1024)).toFixed(2) + " MB";


            

            CreateTableColumns();
            CreateTableContent(fileName, imgSource, fileSize);
            numarationforItems();
            DeleteFilesUsingIcon();

            let deleteAll = document.querySelector(".Delete-all");  // write tomorrow
            DeleteButton(deleteAll)

        }
        reader.readAsDataURL(file);
    });

}

// Manage the drop event
dropZone.addEventListener("drop", (event) => {
    event.preventDefault();
   
    // Remove the style while drop event accur
    dropZone.classList.remove("dropZone_over");

    // Get the dropped files
    let files = event.dataTransfer.files;
    console.log(event);
    for (let i = 0; i < files.length; i++) {
        const file = files[i];

        let reader = new FileReader();

        reader.onloadend = function (e) {

            let imgSource = e.target.result;
            // the number of uploaded item

            fileNameExtension.innerText++;
            let fileName = file.name.length >= 2 ? file.name.split('.')[0].substring(0, 13) + fileNameExtension.innerText + "... ." + file.name.split('.')[1] : file.name;

            let fileSize;
            (file.size < 1024) ? fileSize = file.size + " KB" : fileSize = (file.size / (1024 * 1024)).toFixed(2) + " MB";


           

            CreateTableColumns();
            CreateTableContent(fileName, imgSource, fileSize);
            numarationforItems();
            DeleteFilesUsingIcon();

            let deleteAll = document.querySelector(".Delete-all");  // write tomorrow
            DeleteButton(deleteAll)

        }

        reader.readAsDataURL(file);
    }

})



function numarationforItems() {
    let numbers = document.querySelectorAll("#number");
    let temp = 0;
    numbers.forEach(function (number) {

        temp++;
        number.innerText = temp;
    })
}

function CreateTableColumns(){
    if (tHead.innerText == "") {

        let deleteAllbtn = document.createElement("button");
        deleteAllbtn.setAttribute("class", "btn btn-danger col-10 Delete-all");
        deleteAllbtn.textContent = "Delete all";
        buttonBox.appendChild(deleteAllbtn);
        let Headtr = document.createElement("tr")
        Headtr.classList.add("trHead")
        Headtr.innerHTML = `
        <th scope="col">#</th>
        <th scope="col">File_Name</th>
        <th scope="col">File_content</th>
        <th scope="col">File_Size</th>
        <th scope="col">File_Type</th>
        <th scope="col">Progress</th>
        <th scope="col">Delete</th>`;

        tHead.append(Headtr);

    }
}

function CreateTableContent(fileName, imgSource, fileSize){
    
    let Bodytr = document.createElement("tr");
    Bodytr.classList.add("trItems")
    Bodytr.innerHTML = `
    <th id="number" scope="row"></th>
    <td class="td ">${fileName}</td>
    <td class="td d-flex justify-content-center"><img src="${imgSource}" class="image" alt=""></td>
    <td class="td"> ${fileSize}</td>
    <td class="td "> <i class="fa-solid fa-file"></i></td>
    <td  class="td d-flex justify-content-between">
        <div class="progress-box">
            <div class="uploadProgress_backround">
                <div class="uploadProgress"></div> 
            </div>
                <span class="percent"></span>
        </div>
        <div class="icon-check-box">
            <i class="fa-solid fa-check Icon-check"></i>
        </div>
    </td>
    <td class="td">
        <div class="icon-delete-box d-flex justify-content-center">
            <i class="fa-solid fa-trash-can Icon-delete" id = "Icon-delete"></i>
        </div>
    </td>`;

    const tBody = document.querySelector(".tBody")
    tBody.appendChild(Bodytr);
}

function DeleteFilesUsingIcon(){
    let icondeleteBoxes = document.querySelectorAll("#Icon-delete");
    console.log(icondeleteBoxes);

    icondeleteBoxes.forEach(function (icondeleteBox) {

        icondeleteBox.addEventListener("click", function () {
            // let colsestTr = icondeleteBox.closest("tr");
            // if (colsestTr) {
            //     colsestTr.parentNode.removeChild(colsestTr);
            // }

            let colsestTd = icondeleteBox.closest("td");
            console.log(colsestTd);
            if (colsestTd) {
                let mainTr = colsestTd.parentElement;
                console.log(mainTr);
                // let colsestTr = icondeleteBox.closest("tr.trItems");
                let trPArent = mainTr.parentNode;
                console.log(trPArent);
                if (trPArent) {
                    mainTr.parentNode.removeChild(mainTr);
                }
            }

        
            let numbers = document.querySelectorAll("#number");
            console.log(numbers);

            if (!numbers.length > 0) {

                tHeadChildTr = document.querySelector(".trHead")

                tHeadChildTrParent = tHeadChildTr.parentNode; // issue

                tHeadChildTr.parentNode.removeChild(tHeadChildTr)

                let deleteAllButton = document.querySelector(".Delete-all");
                deleteAllButton.parentNode.removeChild(deleteAllButton);


            }

            numarationforItems();

        });


    })
}

// finish tomorrow
function DeleteButton(deleteAll){

    deleteAll.addEventListener("click", function () {
        
        trHead = document.querySelector(".trHead")
        trItems = document.querySelector(".trItems")

        if (trHead) {
            trHead.parentNode.removeChild(trHead);
        }

        if (trItems) {
            trItems.parentNode.removeChild(trItems);
        }

        deleteAll.parentNode.removeChild(deleteAll);  // fix it 

        })
}


