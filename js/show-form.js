var link = document.querySelector(".button-search");
var popup = document.querySelector(".filter");
var form = popup.querySelector(".button-search-hotel");
var indate = popup.querySelector("[name=indate]");
var outdate = popup.querySelector("[name=outdate]");
var adult = popup.querySelector("[name=adult]");
var childrens = popup.querySelector("[name=outdate]");
var isStorageSupport = true;
var storageAdult = "";
var storageChildrens = "";

try {
    storageAdult = localStorage.getItem("adult");
    storageChildrens = localStorage.getItem("childrens");
} catch (err) {
    isStorageSupport = false;
}

document.addEventListener('DOMContentLoaded', function() {
    popup.classList.add("filter-show");
})


link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.toggle("filter-show");
    indate.focus()
    if (storageAdult) {
        adult.value = storageAdult;
    }
    if (storageChildrens) {
        childrens.value = storageChildrens;
    }
});

form.addEventListener("submit", function (evt) {
    if (!indate.value || !outdate.value || !adult.value) {
        evt.preventDefault();
    } else {
        if (isStorageSupport) {
            localStorage.setItem("adult", adult.value);
            localStorage.setItem("childrens", childrens.value);
        }
    }
});