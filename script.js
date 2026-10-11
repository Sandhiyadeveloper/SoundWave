
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

// Mobile navigation
menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// Product color selection

const colorButtons = document.querySelectorAll(".color-btn");
const selectedColor = document.getElementById("selectedColor");
const productImage = document.getElementById("productImage");

const productImages = {
  Black: {
    src: "Images/Black_Headphones.jpg",
    alt: "Black over-ear headphones"
  },
  White: {
    src: "Images/White_Headphone.avif",
    alt: "Headphones in a light-colored product setting"
  },
  Blue: {
    src: "Images/Blue_Headphone.jpg",
    alt: "Headphones in a blue-toned product setting"
  }
};

colorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const color = button.dataset.color;

    colorButtons.forEach((item) => {
      item.classList.remove("selected");
      item.setAttribute("aria-pressed", "false");
    });

    button.classList.add("selected");
    button.setAttribute("aria-pressed", "true");

    selectedColor.textContent = `Selected color: ${color}`;

    productImage.src = productImages[color].src;
    productImage.alt = productImages[color].alt;
  });
});

// const colorButtons = document.querySelectorAll(".color-btn");
// const selectedColor = document.getElementById("selectedColor");

// colorButtons.forEach((button) => {
//   button.addEventListener("click", () => {
//     colorButtons.forEach((item) => {
//       item.classList.remove("selected");
//       item.setAttribute("aria-pressed", "false");
//     });

//     button.classList.add("selected");
//     button.setAttribute("aria-pressed", "true");

//     selectedColor.textContent =
//       `Selected color: ${button.dataset.color}`;
//   });
// });

// Add to cart demo
const addToCart = document.getElementById("addToCart");
const cartMessage = document.getElementById("cartMessage");

addToCart.addEventListener("click", () => {
  const color = document.querySelector(".color-btn.selected").dataset.color;

  cartMessage.textContent =
    `SoundWave Pro (${color}) added to your demo cart!`;
});

// Contact form validation
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!contactForm.checkValidity()) {
    contactForm.reportValidity();
    return;
  }

  formMessage.textContent =
    "Thank you! Your demo form was submitted successfully.";
  formMessage.style.color = "#187448";

  contactForm.reset();

  colorButtons.forEach((button) => {
    const isBlack = button.dataset.color === "Black";
    button.classList.toggle("selected", isBlack);
    button.setAttribute("aria-pressed", String(isBlack));
  });

  selectedColor.textContent = "Selected color: Black";
});
