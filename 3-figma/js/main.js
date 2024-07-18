$(".carousel").owlCarousel({
  loop: true,
  margin: 20,
  nav: false,

  responsive: {
    0: {
      items: 1,
    },
    300: {
      items: 2,
    },
    500: {
      items: 3,
    },
    700: {
      items: 4,
    },
    900: {
      items: 5,
    },
  },
});


// 

function createSnowflake() {
  const snowflake = document.createElement("div");
  snowflake.classList.add("snowflake");
  snowflake.textContent = "❆"; // Snowflake character

  snowflake.style.left = Math.random() * window.innerWidth + "px";
  snowflake.style.animationDuration = Math.random() * 3 + 2 + "s"; // Fall speed
  snowflake.style.opacity = Math.random();
  snowflake.style.fontSize = Math.random() * 10 + 10 + "px";

  document.body.appendChild(snowflake);

  setTimeout(() => {
    snowflake.remove();
  }, 5000);
}

function startSnowfall() {
  setInterval(createSnowflake, 100);
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", startSnowfall);
});
