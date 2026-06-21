const fetchName = document.querySelector("[data-fetch-name]");
const fetchRole = document.querySelector("[data-fetch-role]");
const randomButton = document.querySelector("[data-random-button]");
const randomResult = document.querySelector("[data-random-result]");

const apiData = {
    data: {
        name: "Jean-Carlo",
        role: "Web Design & Development student"
    }
};

async function tekstInvoegen() {
    const data = await apiData;

    fetchName.textContent = data.data.name;
    fetchRole.textContent = data.data.role;
}

function kiesWillekeurigeStudent() {
    if (!randomResult) {
        return;
    }

    const studenten = [
        "Student 1",
        "Student 2",
        "Student 3",
        "Student 4",
        "Student 5"
    ];
    const name = studenten.length - 1;
    const index = Math.floor(Math.random() * (name + 1));

    randomResult.textContent = studenten[index];
}

tekstInvoegen();
kiesWillekeurigeStudent();

randomButton?.addEventListener("click", kiesWillekeurigeStudent);
