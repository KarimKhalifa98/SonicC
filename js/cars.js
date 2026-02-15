async function getCarsData() {
  try {
    const response = await fetch("./data/cars.json");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching cars data:", error);
    return [];
  }
}

await getCarsData().then((cars) => {
  const container = document.getElementById("cars-container");
  if (!container) return;

  cars.forEach((car) => {
    const carCard = document.createElement("div");
    carCard.className =
      "group animate-view sticky top-20 h-[500px] mx-auto w-full max-w-6xl rounded-lg shadow-lg overflow-hidden";
    carCard.innerHTML = `
        <div class="absolute inset-0">
          <img
            src="${car.image}"
            alt="${car.model}"
            class="w-full h-full object-cover group-hover:scale-110 duration-500"
          />
        </div>
        <div class="absolute inset-0 bg-black opacity-20"></div>
        <div
          class="relative z-10 flex flex-col items-start justify-end gap-8 h-full p-4 md:p-10 text-white"
        >
          <h3 class="car-company text-3xl font-bold">${car.company}</h3>
          <h3 class="text-3xl font-bold">${car.model}</h3>
          <div class="flex gap-5 md:gap-12 font-bold sm:text-2xl">
            <p class="flex flex-col gap-2">
              <span>Price</span>
              <span>$${car.price}</span>
            </p>
            <p class="flex flex-col gap-2">
              <span>Engine</span>
              <span>${car.engine}</span>
            </p>
            <p class="flex flex-col gap-2">
              <span>Cylinders</span>
              <span>${car.cylinders}</span>
            </p>
            <p class="flex flex-col gap-2">
              <span>HorsePower</span>
              <span>${car.horsePower} HP</span>
            </p>
          </div>
        </div>`;
    container.appendChild(carCard);
  });
});

function getSpecificCar(company) {
  const carsContainer = document.getElementById("cars-container");
  const carCards = carsContainer.querySelectorAll(".group");
  for (let i = 0; i < carCards.length; i++) {
    const carCompany = carCards[i]
      .querySelector(".car-company")
      .textContent.trim();
    if (company == "Clear") {
      carCards[i].classList.remove("hidden");
    } else if (carCompany == company) {
      carCards[i].classList.remove("hidden");
    } else {
      carCards[i].classList.add("hidden");
    }
  }
}

const btns = document.querySelectorAll("button");
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    getSpecificCar(btn.textContent.trim());
  });
});
