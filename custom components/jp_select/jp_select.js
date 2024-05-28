document.addEventListener("DOMContentLoaded", function() {
    var selectSelected = document.querySelector(".select-selected");
    var selectOptions = document.querySelector(".select-options");
    var optionItems = document.querySelectorAll(".select-option");

    selectSelected.addEventListener("click", function() {
        var isVisible = selectOptions.style.display === "block";
        selectOptions.style.display = isVisible ? "none" : "block";
        selectSelected.classList.toggle("active", !isVisible);
    });

    optionItems.forEach(function(item) {
        item.addEventListener("click", function() {
            selectSelected.innerHTML = item.innerHTML;
            selectOptions.style.display = "none";
            selectSelected.classList.remove("active");
        });
    });

    document.addEventListener("click", function(event) {
        if (!selectSelected.contains(event.target) && !selectOptions.contains(event.target)) {
            selectOptions.style.display = "none";
            selectSelected.classList.remove("active");
        }
    });
});