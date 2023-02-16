const itemsNumber = document.querySelector("#items-number");
const totalGrade = document.querySelector("#total-grade");
const btn = document.querySelector("button");

totalGrade.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        btn.click();
    }
});

itemsNumber.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        btn.click();
    }
});


const theadData = {
    1: "Correct answers",
    2: "Total score"
};

const tbodyData = {

};

const tableClass = "table"

btn.addEventListener("click", () => {

    if(itemsNumber.value && totalGrade.value) {
        document.querySelector(".error-message").classList.remove("show");
        document.querySelector(".instructions").style.display = "none";
        let children = document.querySelector(".container").children;
        let hasTable = false;
        for (let i = 0; i < children.length; i++) {
            if (children[i].className === "table") {
                hasTable = true;
            }
        }

        if (hasTable === true) {
            const oldTable = document.querySelector(".table");
            oldTable.remove();
        }

        generateTable(itemsNumber.value, totalGrade.value);
    } else {
        document.querySelector(".error-message").classList.add("show");
    }

});


function generateTable(itemsNumber, totalGrade) {

    let table = document.createElement("table");
    table.setAttribute("class", tableClass);

    let thead = document.createElement("thead");
    let theadTr = document.createElement("tr");

    let td1 = document.createElement("td");
    td1.innerText = "Correct answers";
    theadTr.appendChild(td1);
    let td2 = document.createElement("td");
    td2.innerText = "Total score";
    theadTr.appendChild(td2);
    thead.appendChild(theadTr);

    //-----------Table body-----------------------------//

    let tbody = document.createElement("tbody");

    for (let i = 1; i <= itemsNumber; i++) {
        let tbodyTr = document.createElement("tr");
        tbody.appendChild(tbodyTr);

        let bodyTd1 = document.createElement("td");
        bodyTd1.innerText = i;
        tbodyTr.appendChild(bodyTd1);

        let itemScore = (totalGrade / itemsNumber) * i;
        let bodyTd2 = document.createElement("td");
        bodyTd2.innerText = itemScore.toFixed(1);
        tbodyTr.appendChild(bodyTd2);
    }

    table.appendChild(thead);
    table.appendChild(tbody);
    document.querySelector(".container").appendChild(table);
}
