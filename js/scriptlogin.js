const labels = document.querySelectorAll(".login__container--form-control label");

labels.forEach((label) => {
    label.innerHTML = label.innerText
        .split("")
        .map((letter, idx) => `<span style="transition-delay: ${idx * 50}ms">${letter}</span>`)
        .join("");
});