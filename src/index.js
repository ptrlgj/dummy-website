const gallerySection = document.querySelector("section.gallery");
const previewImgs = gallerySection.querySelectorAll("div.gallery-minature img");
const bigView = gallerySection.querySelector("img.gallery-image");
const buttons = gallerySection.querySelectorAll("button");

function changeOutline(idOutline){
    previewImgs.forEach(img=>{
        img.classList.remove("gallery-focus");
        if(img.getAttribute("id")===idOutline) img.classList.add("gallery-focus");
    })
}
function changeImage(src, id){
    bigView.setAttribute("src",src)
    bigView.setAttribute("id",id)
    const idOutline = bigView.getAttribute("id");
    changeOutline(idOutline);
}
function switchId(newId){
    if (newId < 1) newId = previewImgs.length;
    else if (newId > previewImgs.length) newId = 1;
    changeImage(`img/${newId}.jpg`,newId)
}
previewImgs.forEach(img => {
    img.addEventListener("mousedown",(e)=>{
        changeImage(e.path[0].getAttribute("src"),e.path[0].getAttribute("id"))
    })
})

buttons.forEach(button => {
    button.addEventListener("click",()=>{
        let newId;
        switch (button.id){
            case "previous":
                newId = parseInt(bigView.id)-1;
            break;
            case "next":
                newId = parseInt(bigView.id)+1;
            break;
            default:
                console.log("no such button");
        }
        switchId(newId)
    })
})

window.addEventListener("keydown",(e)=>{
    if(e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
    if(document.activeElement === bigView.parentNode){
        let newId;
        switch (e.key){
            case "ArrowLeft":
                newId = parseInt(bigView.id)-1;
            break;
            case "ArrowRight":
                newId = parseInt(bigView.id)+1;
            break;
            default:
                console.log("no such button");
        }
        switchId(newId)
    }
})

