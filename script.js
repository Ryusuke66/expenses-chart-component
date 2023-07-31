let graphs = document.querySelector(".graphs");

fetch("data.json")
    .then(r => r.json())
    .then(data => {
        for (let i in data) {
            let bar = document.createElement("div");
            bar.className = "bar";
            let amount = document.createElement("div");
            amount.className = "amount";
            amount.textContent = `$${data[i].amount}`;
            let graph = document.createElement("div");
            graph.className = 'graph';
            graph.style.height = `${data[i].amount * 3}px`;
            let day = document.createElement("div");
            day.className = "day";
            day.textContent = data[i].day;
            bar.appendChild(amount);
            bar.appendChild(graph);
            bar.appendChild(day);
            graphs.appendChild(bar);
        }

        let bars = document.querySelectorAll(".graph"),
        amounts = document.querySelectorAll(".amount");
        bars[new Date().getDay() - 1].classList.add("highlight");
        for (let i =0; i < bars.length; i++) {
        bars[i].addEventListener("mouseover",() => {
            amounts.forEach(e => e.classList.remove("up"));
            amounts[i].classList.add("up");
        });

        bars[i].addEventListener("mouseleave",() => {
            amounts[i].classList.remove("up");
        });
        }
    })
    .catch(e => {
        console.error("Error loading JSON file:" + e);
    });

