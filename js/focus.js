const focus = document.querySelector(".focus");
const focusInput = document.querySelector(".focus-input");
const focusUl = document.querySelector(".focus-ul");
const focusContainer = document.querySelector(".focus-container");
const focusH2 = document.querySelector("#focus-h2");

focus.addEventListener("submit", (event) => {
    event.preventDefault();
    const focus = focusInput.value;
    localStorage.setItem("focus", focus);

    focusH2.classList.remove("none");
    focusContainer.classList.add("none");
    paintFocus(focus)
})

const paintFocus = (focus) => {
    const focusLi = document.createElement("li");
    focusLi.setAttribute("class", "focus-li");
    focusLi.innerText = focus;

    const focusDel = document.createElement("button");
    focusDel.setAttribute("class", "focus-del")
    focusDel.innerText = "Delete";
    focusDel.addEventListener("click", () => {
        focusUl.removeChild(focusLi);
        localStorage.removeItem("focus")
        focusContainer.classList.remove("none");
        focusH2.classList.add("none");
    })
    focusLi.appendChild(focusDel);
    focusUl.appendChild(focusLi);
}

const savedFocus = localStorage.getItem("focus")

if(localStorage.getItem("focus") !== null) {
    focusContainer.classList.add("none");
    focusH2.classList.remove("none");
    paintFocus(savedFocus);
}