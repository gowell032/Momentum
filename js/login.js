const loginContainer = document.querySelector("#login-container");
const login = document.querySelector(".login")
const mainContainer = document.querySelector("#main-container");
const loginInput = document.querySelector(".login-input");
const userName = document.querySelector(".user-name");
const logout = document.querySelector(".logout")

const CLASS_NONE = "none";
const CLASS_MAIN_CONTAINER = "main-container";
const CLASS_LOGIN_CONTAINER = "login-container";

const onLogin = (event) => {
    event.preventDefault();
    const name = loginInput.value;
    localStorage.setItem("userName", name);
    paintMainContainer(name)
    mainContainer.className = CLASS_MAIN_CONTAINER;
}

const onLogout = () => {
    localStorage.removeItem("userName")
    alert("I hope to see you again 🙏")
}

const paintMainContainer = (name) => {
    userName.innerText = `Let's get it ! ${name}`;
    loginContainer.className = CLASS_NONE;
}

const savedName = localStorage.getItem("userName");

if(savedName === null) {
    login.addEventListener("submit", onLogin);
}else {
    mainContainer.className = CLASS_MAIN_CONTAINER;
    paintMainContainer(savedName)
    logout.addEventListener("submit", onLogout)
}