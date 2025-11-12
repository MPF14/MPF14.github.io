// const scriptURL = "https://script.google.com/macros/s/AKfycbyNKoJAOZBXvcds5KIgykI2-S-3wDP1tGEXODhyIoVwrOYwvf9yIa0twneJ_UygW10H/exec";

// document.getElementById('signup-form').addEventListener('submit', async (e) => {
//   e.preventDefault();
//   const form = new FormData(e.target);
//   const payload = { email: form.get('email') };

//   try {
//     const res = await fetch(scriptURL, {
//       method: 'POST',
//       body: JSON.stringify(payload),
//       headers: { 'Content-Type': 'application/json' }
//     });
//     const data = await res.json();
//     if (data.status === "ok") alert("Thanks! You’re on the list.");
//     else alert("Submission failed: " + data.message);
//   } catch(err) {
//     console.error(err);
//     alert("Network error — please try again later.");
//   }

//   e.target.reset();
// });
