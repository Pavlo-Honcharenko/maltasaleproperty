(() => {
    "use strict";
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
        const wrapper = document.querySelector(".wrapper");
        navbarToggler.addEventListener("click", (function() {
            if (!navbarToggler.classList.contains("collapsed")) {
                navbarToggler.classList.add("collapsed");
                wrapper.classList.add("_open-mob-menu");
            } else {
                navbarToggler.classList.remove("collapsed");
                wrapper.classList.remove("_open-mob-menu");
            }
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
    var filters = document.querySelectorAll(".filters li");
    if (filters) filters.forEach((function(li) {
        li.addEventListener("click", handleLiClick);
    }));
    var selectAllPropertyType = document.getElementById("selectAllPropertyType");
    if (selectAllPropertyType) selectAllPropertyType.addEventListener("click", (function(e) {
        e.preventDefault();
        e.stopPropagation();
        document.querySelectorAll(".property-checkbox").forEach((function(checkbox) {
            checkbox.checked = true;
            checkbox.classList.add("_checked");
        }));
    }));
    var clearAllPropertyType = document.getElementById("clearAllPropertyType");
    if (clearAllPropertyType) clearAllPropertyType.addEventListener("click", (function(e) {
        e.preventDefault();
        e.stopPropagation();
        document.querySelectorAll(".property-checkbox").forEach((function(checkbox) {
            checkbox.checked = false;
            checkbox.classList.remove("_checked");
        }));
    }));
    function handleSelectClearAll(selectId, clearId, checkboxClass) {
        var selectElement = document.getElementById(selectId);
        var clearElement = document.getElementById(clearId);
        if (selectElement) selectElement.addEventListener("click", (function(e) {
            e.preventDefault();
            e.stopPropagation();
            document.querySelectorAll(checkboxClass).forEach((function(checkbox) {
                checkbox.checked = true;
            }));
        }));
        if (clearElement) clearElement.addEventListener("click", (function(e) {
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
    handleSelectClearAll("selectAllRentSDA", "clearAllRentSDA", ".sda-checkbox");
    handleSelectClearAll("selectAllRentMalta", "clearAllRentMalta", ".malta-checkbox");
    handleSelectClearAll("selectAllRentGozo", "clearAllRentGozo", ".gozo-checkbox");
    var priceSlider = document.getElementById("priceSlider");
    if (priceSlider && noUiSlider) {
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
        if (fromPrice && toPrice) {
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
        }
    }
    var selectAllFeatures = document.getElementById("selectAllFeatures");
    if (selectAllFeatures) selectAllFeatures.addEventListener("click", (function(e) {
        e.preventDefault();
        e.stopPropagation();
        document.querySelectorAll(".features-checkbox").forEach((function(checkbox) {
            checkbox.checked = true;
        }));
    }));
    var clearAllFeatures = document.getElementById("clearAllFeatures");
    if (clearAllFeatures) clearAllFeatures.addEventListener("click", (function(e) {
        e.preventDefault();
        e.stopPropagation();
        document.querySelectorAll(".features-checkbox").forEach((function(checkbox) {
            checkbox.checked = false;
        }));
    }));
    function handleSelectClearAllRent(selectId, clearId, checkboxClass) {
        var selectElement = document.getElementById(selectId);
        var clearElement = document.getElementById(clearId);
        if (selectElement) selectElement.addEventListener("click", (function(e) {
            e.preventDefault();
            e.stopPropagation();
            document.querySelectorAll(checkboxClass).forEach((function(checkbox) {
                checkbox.checked = true;
            }));
        }));
        if (clearElement) clearElement.addEventListener("click", (function(e) {
            e.preventDefault();
            e.stopPropagation();
            document.querySelectorAll(checkboxClass).forEach((function(checkbox) {
                checkbox.checked = false;
            }));
        }));
    }
    handleSelectClearAllRent("selectAllRentPropertyType", "clearAllRentPropertyType", ".property-checkbox");
    handleSelectClearAllRent("selectAllRentFeatures", "clearAllRentFeatures", ".features-checkbox");
    var priceSliderRent = document.getElementById("priceSliderRent");
    if (priceSliderRent && noUiSlider) {
        noUiSlider.create(priceSliderRent, {
            start: [ 1e3, 5e3 ],
            connect: true,
            step: 100,
            range: {
                min: 0,
                max: 1e4
            }
        });
        var fromPriceRent = document.getElementById("fromPriceRent");
        var toPriceRent = document.getElementById("toPriceRent");
        if (fromPriceRent && toPriceRent) {
            priceSliderRent.noUiSlider.on("update", (function(values, handle) {
                var value = values[handle];
                if (handle) toPriceRent.value = value; else fromPriceRent.value = value;
            }));
            fromPriceRent.addEventListener("change", (function() {
                priceSliderRent.noUiSlider.set([ this.value, null ]);
            }));
            toPriceRent.addEventListener("change", (function() {
                priceSliderRent.noUiSlider.set([ null, this.value ]);
            }));
        }
    }
    window.addEventListener("scroll", (function() {
        window.scrollY || window.pageYOffset;
        var element = document.querySelector(".contact-buttons");
        var topSectionButtons = document.getElementById("top-section-buttons");
        if (topSectionButtons) {
            var topSectionButtonsPosition = topSectionButtons.getBoundingClientRect().top;
            var topSectionButtonsHeight = topSectionButtons.offsetHeight;
            if (topSectionButtonsPosition + topSectionButtonsHeight < 0) element.classList.add("_show-line"); else element.classList.remove("_show-line");
        }
    }));
    function toggleMobileVersionClass() {
        var contactButtons = document.querySelector(".contact-buttons");
        if (contactButtons) if (window.innerWidth < 992) {
            if (!contactButtons.classList.contains("_mobile-version")) contactButtons.classList.add("_mobile-version");
        } else contactButtons.classList.remove("_mobile-version");
    }
    window.addEventListener("load", toggleMobileVersionClass);
    window.addEventListener("resize", toggleMobileVersionClass);
    window["FLS"] = false;
})();