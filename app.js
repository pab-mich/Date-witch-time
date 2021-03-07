const getTime = () => {
  const data = new Date();
  const time = {
    hour: data.getHours(),
    minute: data.getMinutes(),
    second: data.getSeconds(),
    day: data.getDate(),
    month: data.getMonth(),
    year: data.getFullYear(),
  };
  const now = `${time.hour} : ${time.minute} : ${time.second}`;
  const dateNow = `${time.day} / ${time.month + 1} / ${time.year}`;

  document.querySelector(".clock").innerHTML = now;
  document.querySelector(".date").innerHTML = dateNow;
};

const date = setInterval(getTime, 1000);
