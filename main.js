let sortOrder = 1;
let users = [];
const myUrl = "https://jsonplaceholder.typicode.com/users";

//complete the fetchData function
async function fetchData(url) {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    return response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}

//complete the sortUsers function
// users is the array of users and order can be 1 or -1, which means order ascending or descending respectively
function sortUsers(users, order) {
  return users.slice().sort((a, b) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();
    if (nameA < nameB) return -order;
    if (nameA > nameB) return order;
    return 0;
  });
}

//Implement a function that select users with the name input
function filterUsersByName(users, name) {
  const filterText = name.toLowerCase();
  return users.filter((user) => user.name.toLowerCase().includes(filterText));
}

function displayData(tbody, users) {
  tbody.innerHTML = users
    .map(
      (user) => `
    <tr>
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.username}</td>
        <td>${user.email}</td>
    </tr>
  `
    )
    .join("");
}

async function initializeApp() {
  const tbody = document.getElementById("table-body");
  const sortBtn = document.getElementById("sort");
  const nameFilter = document.getElementById("nameFilter");

  users = await fetchData(myUrl);
  displayData(tbody, users);

  // when a visitor click the sortBtn element, the users should be ordered ascending in the first click, and descending in the second click
  sortBtn.addEventListener("click", () => {
    sortOrder *= -1;
    users.sort((a, b) => sortOrder * (a.id - b.id));
    displayData(tbody, users);
  });

  // when a visitor fill the name in the nameFilter element, the table should only show users asociated to this name
  nameFilter.addEventListener("input", () => {
    const filterText = nameFilter.value.toLowerCase();
    const filteredUsers = users.filter((user) =>
      user.name.toLowerCase().includes(filterText)
    );

    displayData(tbody, filteredUsers);
  });
}

if (typeof document !== "undefined") {
  initializeApp();
}

module.exports = { fetchData, sortUsers, filterUsersByName, displayData };
// initializeApp();
