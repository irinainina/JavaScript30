var inputs = document.querySelectorAll("input");

inputs.forEach(input => input.addEventListener("change", inputUpdate));
inputs.forEach(input => input.addEventListener("mousemove", inputUpdate));

function inputUpdate() {
    var suffix = this.dataset.sizing || "";
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}