var comp = document.getElementsByTagName('tooltip');

for (let index = 0; index < comp.length; index++) {
    const compElement = comp[index];

    (function (ce) {

        var ceRect = ce.getBoundingClientRect();

        var div = document.createElement('div');
        div.style.position = "absolute";
        div.style.display = "none";
        div.style.border = "1px solid silver";
        div.style.padding = "10px";
        div.innerText = ce.getAttribute('title');

        div.style.top = (ceRect.top+ceRect.height)+'px';
        div.style.left = (ceRect.left + ceRect.width / 2)+'px';
        div.style.transform = "translateX(-50%)";

        ce.appendChild(div)

        ce.addEventListener("mouseover", function (el, ev) {
            div.style.display = "inline-block";
        });

        ce.addEventListener("mouseleave", function (el, ev) {
            div.style.display = "none";
        })

    })(compElement)
}
