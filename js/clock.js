const nowTime = document.querySelector(".now-time");

const time = () => {
    const now = new Date();

    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");

    nowTime.innerText = `${hours}:${minutes}`;
};

time();
setInterval(time, 1000);