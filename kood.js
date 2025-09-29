console.info("App started");
console.warn("warning");
console.error("error");

const users = [
  { id: 1, name: "Al" },
  { id: 2, name: "Bob" },
];
console.table(users);

console.time("Loop timer");
for (let i = 0; i < 100; i++) {}
console.timeEnd("Loop timer");

console.assert(1 === 2, "1 is not equal to 2");

console.group("Requests");
console.log("get users");
console.log("get user id");
console.groupEnd();

console.count("Login attempt");
console.count("Login attempt");
console.count("Login attempt");
