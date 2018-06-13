var comp = document.getElementsByTagName('tooltip');

for (let index = 0; index < comp.length; index++) {
    const compElement = comp[index];

    (function (ce) {

        var ceRect = ce.getBoundingClientRect();

        var div = document.createElement('div');
        div.classList.add('tooltip');
        div.innerText = ce.getAttribute('title');

        div.style.top = (ceRect.top + ceRect.height) + 'px';
        div.style.left = (ceRect.left + ceRect.width / 2) + 'px';
        div.style.transform = "translate(-50%)";

        ce.parentNode.insertBefore(div,ce.nextSibling);

        ce.addEventListener("mouseover", function (el, ev) {
            div.classList.add('on');
        });

        ce.addEventListener("mouseleave", function (el, ev) {
            div.classList.remove('on');
        })

    })(compElement)
}
