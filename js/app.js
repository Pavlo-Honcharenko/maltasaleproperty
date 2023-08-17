(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(webP.height == 2);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = support === true ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    document.addEventListener("DOMContentLoaded", (function() {
        const navbarToggler = document.querySelector(".navbar-toggler");
        document.querySelector(".navbar-nav");
        navbarToggler.addEventListener("click", (function() {
            if (!navbarToggler.classList.contains("collapsed")) navbarToggler.classList.add("collapsed"); else navbarToggler.classList.remove("collapsed");
        }));
    }));
    function handleLiClick(e) {
        if (e.target.type === "checkbox") return;
        var checkbox = e.currentTarget.querySelector('input[type="checkbox"]');
        if (checkbox) {
            checkbox.checked = !checkbox.checked;
            if (checkbox.checked) e.currentTarget.classList.add("_checked"); else e.currentTarget.classList.remove("_checked");
        }
        e.stopPropagation();
    }
    document.querySelectorAll(".filters li").forEach((function(li) {
        li.addEventListener("click", handleLiClick);
    }));
    document.getElementById("selectAllPropertyType").addEventListener("click", (function(e) {
        e.preventDefault();
        e.stopPropagation();
        document.querySelectorAll(".property-checkbox").forEach((function(checkbox) {
            checkbox.checked = true;
            checkbox.classList.add("_checked");
        }));
    }));
    document.getElementById("clearAllPropertyType").addEventListener("click", (function(e) {
        e.preventDefault();
        e.stopPropagation();
        document.querySelectorAll(".property-checkbox").forEach((function(checkbox) {
            checkbox.checked = false;
            checkbox.classList.remove("_checked");
        }));
    }));
    function handleSelectClearAll(selectId, clearId, checkboxClass) {
        document.getElementById(selectId).addEventListener("click", (function(e) {
            e.preventDefault();
            e.stopPropagation();
            document.querySelectorAll(checkboxClass).forEach((function(checkbox) {
                checkbox.checked = true;
            }));
        }));
        document.getElementById(clearId).addEventListener("click", (function(e) {
            e.preventDefault();
            e.stopPropagation();
            document.querySelectorAll(checkboxClass).forEach((function(checkbox) {
                checkbox.checked = false;
            }));
        }));
    }
    handleSelectClearAll("selectAllSDA", "clearAllSDA", ".sda-checkbox");
    handleSelectClearAll("selectAllMalta", "clearAllMalta", ".malta-checkbox");
    handleSelectClearAll("selectAllGozo", "clearAllGozo", ".gozo-checkbox");
    var priceSlider = document.getElementById("priceSlider");
    noUiSlider.create(priceSlider, {
        start: [ 1e3, 5e3 ],
        connect: true,
        step: 100,
        range: {
            min: 0,
            max: 1e4
        }
    });
    var fromPrice = document.getElementById("fromPrice");
    var toPrice = document.getElementById("toPrice");
    priceSlider.noUiSlider.on("update", (function(values, handle) {
        var value = values[handle];
        if (handle) toPrice.value = value; else fromPrice.value = value;
    }));
    fromPrice.addEventListener("change", (function() {
        priceSlider.noUiSlider.set([ this.value, null ]);
    }));
    toPrice.addEventListener("change", (function() {
        priceSlider.noUiSlider.set([ null, this.value ]);
    }));
    document.getElementById("selectAllFeatures").addEventListener("click", (function(e) {
        e.preventDefault();
        e.stopPropagation();
        document.querySelectorAll(".features-checkbox").forEach((function(checkbox) {
            checkbox.checked = true;
        }));
    }));
    document.getElementById("clearAllFeatures").addEventListener("click", (function(e) {
        e.preventDefault();
        e.stopPropagation();
        document.querySelectorAll(".features-checkbox").forEach((function(checkbox) {
            checkbox.checked = false;
        }));
    }));
    window["FLS"] = true;
    isWebp();
})();