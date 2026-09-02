// const btn = document.getElementById("dropdownBtn");
// const menu = document.getElementById("dropdownMenu");

// btn.addEventListener("click", (e) => {
//   e.stopPropagation();

//   menu.classList.toggle("show");
//   btn.classList.toggle("active");
// });

// document.addEventListener("click", () => {
//   menu.classList.remove("show");
//   btn.classList.remove("active");
// });

// const items = document.querySelectorAll(".item");

// items.forEach((item) => {
//   item.addEventListener("click", () => {
//     document.querySelector(".item.active")?.classList.remove("active");

//     item.classList.add("active");

//     document.getElementById("selectedVersion").textContent = item.textContent
//       .trim()
//       .replace("✓", "");

//     menu.classList.remove("show");
//     btn.classList.remove("active");
//   });
// });

// let prices = [100, 250, 80];

// let discout = prices
//   .map((price) => price - 5)
//   .reduce((acc, sum) =>
//     acc + sum
//   , 0);

// let x = prices.reduce((acc, sum) => acc + sum, 0);
// console.log(x, discout);

// function studentIntroduction(student) {
//   if (!student) return "Invalid";
//   if (typeof student !== "object" || student.length === 0) return "Invalid";

//   if (!student?.name || !student?.age || !student?.course) return "Invalid";

//   if (!(typeof student.age === "number")) return "Invalid";

//   return `My name is ${student.name}. I am ${student.age} years old. I am learning ${student.course}.`;
// }
// console.log(filterActiveUsers(["80"]));
// console.log(filterActiveUsers([null]));
// console.log(filterActiveUsers(null));
// console.log(studentIntroduction(""));

// console.log(studentIntroduction({ name: "Sadia", age: 22, course: "React" }));
// console.log(studentIntroduction({ name: "", age: 22 }));

// function filterActiveUsers(users) {
//   if (!Array.isArray(users) || users.length === 0) return "Invalid";

//   if (
//     users.every(
//       (user) => !user?.name || !Object.keys(user).includes("isActive"),
//     )
//   )
//     return "Invalid";

//   let newUsers = users.filter((user) => user.isActive === true);

//   return newUsers;
// }
// console.log(filterActiveUsers([-80, 9, -70]));
// console.log(filterActiveUsers([null]));
// console.log(filterActiveUsers(null));

// console.log(filterActiveUsers([{ name: "A" }]));

// console.log(
//   filterActiveUsers([
//     { name: "A", isActive: true },
//     { name: "B", isActive: false },
//   ]),
// );

// function countHashtags(caption) {
//   // Write your code here...

//   if (!(typeof caption === "string")) return "Invalid";

//   let hasTagWords = caption
//     .split(" ")
//     .filter((hasTag) => hasTag.startsWith("#"))
//     .map((hasTagWord) => hasTagWord.slice(1));

//   let hasTagCount = hasTagWords.length;

//   let longestTagWord = "";

//   hasTagWords.forEach((tagWord) => {
//     if (tagWord.length > longestTagWord.length) {
//       longestTagWord = tagWord;
//     }
//   });

//   return { hashtagCount: hasTagCount, longestTag: longestTagWord };
// }
// console.log(countHashtags([-80, 9, -70]));
// console.log(countHashtags([null]));
// console.log(countHashtags(null));

// console.log(countHashtags(123));
// console.log(countHashtags("Loving this weather today #sunny #vibes #weekend"));

// function bonusScore(scores) {
//   // Write your code here
//   if (!Array.isArray(scores) || scores.length === 0) return "Invalid";
//   if (scores.some((score) => typeof score !== "number")) return "Invalid";

//   let totalScore = scores
//     .map((num) => num + 10)
//     .reduce((acc, curr) => acc + curr, 0);

//   return totalScore > 0 ? totalScore : 0;
// }

// console.log(bonusScore([-80, 9, -70]));
// console.log(bonusScore([null]));
// console.log(bonusScore(null));

/* Find and fix every bug. Do not change the function name. */
// function generateLeaderboard(students) {
//   if (!Array.isArray(students) || typeof students === "undefined")
//     return "Invalid";

//   if (students.length === 0) return "Invalid";

//   if (students.some((student) => typeof student?.score !== "number"))
//     return "Invalid";

//   if (students.some((student) => !student.name)) return "Invalid";

//   let qualified = students.filter((student) => student.score >= 70);

//   const names = qualified.map((student) => student.name.toUpperCase());

//   return names.slice(0, 3);
// }

// console.log(generateLeaderboard([-100]));

// console.log(generateLeaderboard([{ name: "Rafi", score: 90 }]));
// console.log(generateLeaderboard([""]));
// console.log(generateLeaderboard(null));

// function studentIntroduction(student) {
//   if (typeof student !== "object" || student.length === 0) return "Invalid";

//   let { name, age, course } = student;
//   let studentKeys = Object.keys(student);

//   if (
//     !studentKeys.includes("name") ||
//     !studentKeys.includes("course") ||
//     !studentKeys.includes("age")
//   )
//     return "Invalid";

//   if (!(typeof student.age === "number")) return "Invalid";

//   return `My name is ${name}. I am ${age} years old. I am learning ${course}.`;
// }

// function filterActiveUsers(users) {
//   if (!Array.isArray(users) || users.length === 0) return "Invalid";

//   if (users.every((user) => !Object.keys(user).includes("isActive")))
//     return "Invalid";

//   let newUsers = users.filter((user) => user.isActive === true);

//   return newUsers;
// }

// function filterActiveUsers(users) {
//   if (!Array.isArray(users) || users.length === 0) return "Invalid";

//   if (users.every((user) => !Object.keys(user).includes("isActive")))
//     return "Invalid";

//   let newUsers = users.filter((user) => user.isActive === true);

//   return newUsers;
// }

// function bonusScore(scores) {
//   if (!Array.isArray(scores) || scores.length === 0) return "Invalid";
//   if (scores.some((score) => typeof score !== "number")) return "Invalid";

//   let totalScore = scores
//     .map((num) => num + 10)
//     .reduce((acc, curr) => acc + curr, 0);

//   return totalScore;
// }

// function generateLeaderboard(students) {
//   if (!Array.isArray(students)) return "Invalid";
//   if (students.length === 0) return "Invalid";

//   if (students.some((student) => typeof student.score !== "number"))
//     return "Invalid";

//   if (students.some((student) => !student.name || !student.score))
//     return "Invalid";

//   let qualified = students.filter((student) => student.score >= 70);

//   const names = qualified.map((student) => student.name.toUpperCase());

//   return names.slice(0, 3);
// }

// function averageResponseTime(times) {
//   if (Array.isArray(times) === false) {
//     return "Invalid";
//   }

//   if (times.length === 0) {
//     return "Invalid";
//   }

//   let total = 0;

//   for (let i = 0; i < times.length; i++) {
//     if (typeof times[i] !== "number") {
//       return "Invalid";
//     }

//     total = total + times[i];
//   }

//   return total / times.length;
// }
// console.log(averageResponseTime([null]));

function studentIntroduction(student) {
  if (!student) return "Invalid";
  if (typeof student !== "object" || student.length === 0) return "Invalid";

  if (!student?.name || !student?.age || !student?.course) return "Invalid";

  if (!(typeof student.age === "number")) return "Invalid";

  return `My name is ${student.name}. I am ${student.age} years old. I am learning ${student.course}.`;
}

function filterActiveUsers(users) {
  if (!Array.isArray(users) || users.length === 0) return "Invalid";

  if (
    users.every(
      (user) => !user?.name || !Object.keys(user).includes("isActive"),
    )
  )
    return "Invalid";

  let newUsers = users.filter((user) => user.isActive === true);

  return newUsers;
}

function countHashtags(caption) {
  if (!(typeof caption === "string")) return "Invalid";

  let hasTagWords = caption
    .split(" ")
    .filter((hasTag) => hasTag.startsWith("#"))
    .map((hasTagWord) => hasTagWord.slice(1));

  let hasTagCount = hasTagWords.length;

  let longestTagWord = "";

  hasTagWords.forEach((tagWord) => {
    if (tagWord.length > longestTagWord.length) {
      longestTagWord = tagWord;
    }
  });

  return { hashtagCount: hasTagCount, longestTag: longestTagWord };
}

function bonusScore(scores) {
  if (!Array.isArray(scores) || scores.length === 0) return "Invalid";
  if (scores.some((score) => typeof score !== "number")) return "Invalid";

  let totalScore = scores
    .map((num) => num + 10)
    .reduce((acc, curr) => acc + curr, 0);

  return totalScore > 0 ? totalScore : 0;
}

function generateLeaderboard(students) {
  if (!Array.isArray(students) || typeof students === "undefined")
    return "Invalid";

  if (students.length === 0) return "Invalid";

  if (students.some((student) => typeof student?.score !== "number"))
    return "Invalid";

  if (students.some((student) => !student?.name)) return "Invalid";

  let qualified = students.filter((student) => student.score >= 70);

  const names = qualified.map((student) => student.name.toUpperCase());

  return names.slice(0, 3);
}
