

function hover_on(id_num) {
    document.getElementById("pic_" + id_num).style.opacity = 0.3;
    document.getElementById("caption_" + id_num).style.display = "block";
}

function hover_off(id_num) {
    document.getElementById("pic_" + id_num).style.opacity = 1.0;
    document.getElementById("caption_" + id_num).style.display = "none";
}