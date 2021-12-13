let sbmtBtn = document.querySelector(".btn");
sbmtBtn.addEventListener("click", function(e) {
    let dayInput = document.querySelector("#inputday");
    let monthInput = document.querySelector("#inputmonth");
    let yearInput = document.querySelector("#inputyear");

    fetch(
            `https://api.aladhan.com/v1/calendar?latitude=40&longitude=49&method=2&month=${monthInput.value}&year=${yearInput.value}`
        )
        .then((res) => res.json())
        .then((res) => {
            let datas = res.data;
            for (let i = 0; i < datas.length; i++) {
                let todays = datas[dayInput.value - 1];
                console.log(todays.date.gregorian);
                let newtd1 = document.createElement('td');
                newtd1.innerHTML = todays.date.gregorian.day;
                let newtd2 = document.createElement("td");
                newtd2.innerHTML = todays.date.gregorian.weekday.en
                let newtd3 = document.createElement("td")
                newtd3.innerHTML = todays.date.gregorian.month.en
                let newtd4 = document.createElement("td")
                newtd4.innerHTML = yearInput.value
                let newtd5 = document.createElement("td")
                newtd5.innerHTML = todays.timings.Asr
                let newtd6 = document.createElement("td")
                newtd6.innerHTML = todays.timings.Dhuhr
                let newtd7 = document.createElement("td")
                newtd7.innerHTML = todays.timings.Fajr
                let newtd8 = document.createElement("td")
                newtd8.innerHTML = todays.timings.Imsak
                let newtd9 = document.createElement("td")
                newtd9.innerHTML = todays.timings.Isha
                let newtd10 = document.createElement("td")
                newtd10.innerHTML = todays.timings.Maghrib
                let newtd11 = document.createElement("td")
                newtd11.innerHTML = todays.timings.Midnight
                let newtd12 = document.createElement("td")
                newtd12.innerHTML = todays.timings.Sunrise
                let newtd13 = document.createElement("td")
                newtd13.innerHTML = todays.timings.Sunset
                let newtr1 = document.createElement("tr")
                newtr1.appendChild(newtd1)
                newtr1.appendChild(newtd2)
                newtr1.appendChild(newtd3)
                newtr1.appendChild(newtd4)
                newtr1.appendChild(newtd5)
                newtr1.appendChild(newtd6)
                newtr1.appendChild(newtd7)
                newtr1.appendChild(newtd8)
                newtr1.appendChild(newtd9)
                newtr1.appendChild(newtd10)
                newtr1.appendChild(newtd11)
                newtr1.appendChild(newtd12)
                newtr1.appendChild(newtd13)
                let tbody = document.querySelector("tbody")
                tbody.appendChild(newtr1);
                break;
            }
        })
})