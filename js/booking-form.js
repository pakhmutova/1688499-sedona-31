const FormToggle = document.querySelector(".search-btn");
const form = document.querySelector(".booking__form");
const arrivalDate = document.querySelector("[name=arrival-date]");
const departureDate = form.querySelector("[name=departure-date]");
const adultsAmount = form.querySelector("[name=number-of-adults]");
const childrenAmount = form.querySelector("[name=number-of-kids]");


form.classList.add('hidden');



FormToggle.addEventListener("click", function (evt) {
   evt.preventDefault();
   form.classList.toggle('hidden');
});

form.addEventListener("submit", function (evt) {
   if (!arrivalDate.value || !departureDate.value) {
      evt.preventDefault();
      console.log("Введите даты приезда и отъезда");
      form.classList.remove("error");
      form.offsetWidth = form.offsetWidth;
      form.classList.add("error");
   }
   if (adultsAmount.value == 0 && childrenAmount.value == 0) {
      evt.preventDefault();
      console.log("Введите количество людей");
      form.classList.remove("error");
      form.offsetWidth = form.offsetWidth;
      form.classList.add("error");
   }
});