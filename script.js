document.querySelector("form[name='contactform']").addEventListener("submit", function(e){
const email = document.getElementById("email").value;
const confirmEmail = document.getElementById("confirm-email").value;


if (email !==confirmEmail){
    e.preventDefault();
    alert("The email addresses do not match. Please check and try again");
}
});

const checkin = document.getElementById('checkin');
  const checkout = document.getElementById('checkout');

  // Set minimum check-in date to today (YYYY-MM-DD)
  const today = new Date().toISOString().split('T')[0];
  checkin.min = today;

  // Update minimum check-out date when check-in changes
  checkin.addEventListener('change', () => {
    checkout.min = checkin.value;
    if (checkout.value && checkout.value < checkin.value) {
      checkout.value = checkin.value;
    }
  });