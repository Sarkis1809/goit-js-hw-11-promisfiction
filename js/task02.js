const doButtonRef = document.querySelector("#task-02-do");

const users = [
  { name: "Mango", active: true },
  { name: "Poly", active: false },
  { name: "Ajax", active: true },
  { name: "Lux", active: false },
];

const toggleUserState = (allUsers, userName) => {
  return new Promise((resolve) => {
    const updatedUsers = allUsers.map((user) =>
      user.name === userName ? { ...user, active: !user.active } : user
    );
    resolve(updatedUsers);
  });
};

const logger = (updatedUsers) => console.table(updatedUsers);

doButtonRef.addEventListener("click", doButtonHolder);

function doButtonHolder() {
  console.log("--- task 2 ---");

  toggleUserState(users, "Mango").then(logger);
  toggleUserState(users, "Lux").then(logger);
}
