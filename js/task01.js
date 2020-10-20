const doButtonRef = document.querySelector("#task-01-do");

const delay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(ms);
    }, ms);
  });
};

const logger = (time) => console.log(`Resolved after ${time}ms`);

doButtonRef.addEventListener("click", doButtonHolder);

function doButtonHolder() {
  console.log("--- task 1 ---");
  delay(2000).then(logger);
  delay(1000).then(logger);
  delay(1500).then(logger);
}
