//your JS code here. If required.
document.addEventListener("DOMContentLoaded", () => {
  const userForm = document.getElementById("userForm");

  userForm.addEventListener("submit", async (event) => {
    event.preventDefault(); // Prevent the default form submission

    const ageInput = document.getElementById("age");
    const nameInput = document.getElementById("name");

    const age = parseInt(ageInput.value, 10);
    const name = nameInput.value.trim();

    if (!age || isNaN(age) || age <= 0 || !name) {
      alert("Please enter valid age and name.");
      return;
    }

    const result = await checkAge(age, name);
    if (result === "above18") {
      alert(`Welcome, ${name}. You can vote.`);
    } else {
      alert(`Oh sorry ${name}. You aren't old enough.`);
    }
  });

  function checkAge(age, name) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (age >= 18) {
          resolve("above18");
        } else {
          reject("below18");
        }
      }, 4000);
    });
  }
});

