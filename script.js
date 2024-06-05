// Datos de los platillos
const dishes = [
  {
    name: "Huevos Rancheros",
    type: "desayunos",
    price: 12.99,
    ingredients: "Huevos, salsa ranchera, frijoles, tortillas",
    imageUrl:
      "https://images.pexels.com/photos/2067470/pexels-photo-2067470.jpeg",
  },
  {
    name: "Pancakes con Arándanos",
    type: "desayunos",
    price: 9.99,
    ingredients: "Harina, huevos, leche, arándanos frescos, jarabe de arce",
    imageUrl:
      "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg",
  },
  {
    name: "Hamburguesa Clásica",
    type: ["cenas", "hamburguesas"],
    price: 14.99,
    ingredients:
      "Carne de res, lechuga, tomate, cebolla, pepinillos, queso cheddar",
    imageUrl:
      "https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg",
  },
  {
    name: "Hamburguesa Vegana",
    type: ["cenas", "hamburguesas"],
    price: 16.99,
    ingredients:
      "Proteína vegetal, lechuga, tomate, cebolla, pepinillos, queso vegano",
    imageUrl:
      "https://images.pexels.com/photos/1633572/pexels-photo-1633572.jpeg",
  },
  {
    name: "Pizza Margarita",
    type: ["comidas", "pizzas"],
    price: 19.99,
    ingredients:
      "Masa de pizza, salsa de tomate, queso mozzarella, albahaca fresca",
    imageUrl:
      "https://images.pexels.com/photos/2619970/pexels-photo-2619970.jpeg",
  },
  {
    name: "Pizza Pepperoni",
    type: ["comidas", "pizzas"],
    price: 21.99,
    ingredients: "Masa de pizza, salsa de tomate, queso mozzarella, pepperoni",
    imageUrl:
      "https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg",
  },
  {
    name: "Limonada Fresca",
    type: "bebidas",
    price: 3.99,
    ingredients: "Agua, limones frescos, azúcar",
    imageUrl:
      "https://images.pexels.com/photos/1233319/pexels-photo-1233319.jpeg",
  },
  {
    name: "Malteada de Chocolate",
    type: "bebidas",
    price: 5.99,
    ingredients:
      "Leche, helado de chocolate, jarabe de chocolate, crema batida",
    imageUrl:
      "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg",
  },
  {
    name: "Pastel de Queso",
    type: "postres",
    price: 7.99,
    ingredients: "Queso crema, huevos, azúcar, galletas graham",
    imageUrl:
      "https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg",
  },
  {
    name: "Brownie Caliente",
    type: "postres",
    price: 6.99,
    ingredients: "Chocolate, mantequilla, huevos, harina, azúcar",
    imageUrl:
      "https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg",
  },
];

// Función para generar las tarjetas de los platillos
/* function createDishCards(dishes) {
  const menuItemsContainer = document.querySelector(".menu-items");
  menuItemsContainer.innerHTML = "";

  dishes.forEach((dish) => {
    const card = document.createElement("div");
    card.classList.add("menu-item");
    card.innerHTML = `
        <img src="${dish.imageUrl}" alt="${dish.name}">
        <h3>${dish.name}</h3>
        <p>Tipo: ${dish.type}</p>
        <p class="price">$${dish.price}</p>
        <p class="ingredients">Ingredientes: ${dish.ingredients}</p>
      `;
    menuItemsContainer.appendChild(card);
  });
} */
function createDishCards(dishes) {
    const menuItemsContainer = document.querySelector('.menu-items');
    menuItemsContainer.innerHTML = '';

    // Agregamos una demora para que las animaciones se vean más suaves
    setTimeout(() => {
        dishes.forEach((dish, index) => {
            const card = document.createElement('div');
            card.classList.add('menu-item');
            card.innerHTML = `
                <img src="${dish.imageUrl}" alt="${dish.name}">
                <h3>${dish.name}</h3>
                <p>Tipo: ${dish.type}</p>
                <p class="price">$${dish.price}</p>
                <p class="ingredients">Ingredientes: ${dish.ingredients}</p>
            `;
            menuItemsContainer.appendChild(card);

            // Agregamos la clase 'show' a las tarjetas con un pequeño retraso
            setTimeout(() => {
                card.classList.add('show');
            }, index * 50); // Cada tarjeta aparecerá con un retraso de 50ms
        });
    }, 100); // Pequeña demora inicial para que las animaciones se vean más suaves
}

const filterSelect = document.querySelector(".filter-select");

filterSelect.addEventListener("change", () => {
  filterDishes(filterSelect.value);
});

// Función para filtrar los platillos
function filterDishes(filter) {
  const filteredDishes =
    filter === "all"
      ? dishes
      : dishes.filter((dish) => dish.type.includes(filter));
  createDishCards(filteredDishes);
}

// Event listeners para los botones de filtro
const filterButtons = document.querySelectorAll(".filter-btn");
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    filterDishes(button.dataset.filter);
  });
});

// Cargar todos los platillos al inicio
createDishCards(dishes);
