var tooltipsElements = document.getElementsByTagName('tooltip');

for (let index = 0; index < tooltipsElements.length; index++) {
    const tooltipElement = tooltipsElements[index];

    (function (tooltipElm) {

        var tooltipElmRect = tooltipElm.getBoundingClientRect();

        var div = document.createElement('div');
        div.classList.add('tooltip');
        div.innerText = tooltipElm.getAttribute('title');

        div.style.top = (tooltipElmRect.top + tooltipElmRect.height) + 'px';
        div.style.left = (tooltipElmRect.left + tooltipElmRect.width / 2) + 'px';
        div.style.transform = "translate(-50%)";

        tooltipElm.parentNode.insertBefore(div,tooltipElm.nextSibling);

        tooltipElm.addEventListener("mouseover", function (el, ev) {
            div.classList.add('on');
        });

        tooltipElm.addEventListener("mouseleave", function (el, ev) {
            div.classList.remove('on');
        })

    })(tooltipElement)
}
