document.addEventListener("DOMContentLoaded", function () {
  const newsletterForm = document.getElementById("newsletterForm");
  const emailInput = document.getElementById("email");
  const emailError = document.getElementById("emailError");
  const formContainer = document.querySelector(".form-container");
  const newsletterCard = document.querySelector(".newsletter-card");
  const successMessage = document.getElementById("hide");
  const successEmail = document.getElementById("success-email");
  const newsletterCardImage = document.querySelector(".image-container img");

  newsletterForm.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!emailInput.value) {
      emailError.textContent = "Email address is required";
      emailError.style.display = "block";
      emailInput.classList.add("input-invalid");
    } else if (!emailInput.validity.valid) {
      emailError.textContent = "Please enter a valid email address";
      emailError.style.display = "block";
      emailInput.classList.add("input-invalid");
    } else {
      emailError.style.display = "none";
      emailInput.classList.remove("input-invalid");

      successEmail.textContent = emailInput.value;

      formContainer.style.display = "none";
      newsletterCard.style.display = "none";
      successMessage.style.display = "flex";
    }
  });

  emailInput.addEventListener("input", function () {
    if (emailInput.validity.valid) {
      emailError.style.display = "none";
      emailInput.classList.remove("input-invalid");
    }
  });

  const submitButton = document.querySelector("#newsletterForm button");
  if (submitButton && newsletterCardImage) {
    submitButton.addEventListener("mouseover", function () {
      newsletterCardImage.style.borderRadius = "0";
    });

    submitButton.addEventListener("mouseout", function () {
      newsletterCardImage.style.borderRadius = "20px";
    });
  }
});

window.addEventListener("resize", function () {
  const screenWidth = window.innerWidth;
  const newsletterImage = document.querySelector(".image-container img");

  if (screenWidth <= 375) {
    newsletterImage.src = "./assets/images/illustration-sign-up-mobile.svg";
  } else {
    newsletterImage.src = "./assets/images/illustration-sign-up-desktop.svg";
  }
});

window.dispatchEvent(new Event("resize"));
