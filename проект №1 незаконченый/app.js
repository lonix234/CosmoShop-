// Список товаров
const products = [
    {
      name: "Яркая помада",
      price: 499,
      image: "https://th.bing.com/th/id/OIP.SbLRNjyrLLer7n3skZ227wHaHa?rs=1&pid=ImgDetMain", // замените на реальный путь
      category: "makeup"
    },
    {
      name: "Крем для лица",
      price: 699,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPzhKuObAppYyxpIaHris20b_J-6LiRciI9w&s", // замените на реальный путь
      category: "skincare"
    },
    {
      name: "Шампунь",
      price: 399,
      image: "https://th.bing.com/th/id/OIP.1RCovV2873A4vgjWPZpPIAHaHa?w=205&h=205&c=7&r=0&o=5&dpr=1.3&pid=1.7", // замените на реальный путь
      category: "hair"
    },
    {
      name: "Тональный крем",
      price: 999,
      image: "https://th.bing.com/th/id/OIP.apHM9HM1_kPQLFBTxvcE-AHaHa?w=198&h=198&c=7&r=0&o=5&dpr=1.3&pid=1.7", // замените на реальный путь
      category: "makeup"
    },
    {
      name: "Маска для волос",
      price: 350,
      image: "https://th.bing.com/th/id/OIP.5NenHtybW-DfVnP1uH2z9AHaHN?w=220&h=214&c=7&r=0&o=5&dpr=1.3&pid=1.7", // замените на реальный путь
      category: "hair"
    },
    {
      name: "Скраб для лица",
      price: 450,
      image: "https://th.bing.com/th/id/OIP.1g9_MJGtLWiQ-3eyyu0YWwHaHa?w=183&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7", // замените на реальный путь
      category: "skincare"
    },
    {
      name: "Помада nude",
      price: 399,
      image: "https://th.bing.com/th/id/OIP.KWkQY2bu6d8g300VWGa_xQHaHa?w=187&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7", // замените на реальный путь
      category: "makeup"
    },
    {
      name: "Увлажняющий крем",
      price: 550,
      image: "https://th.bing.com/th/id/OIP._0dEuULZtAUmpoRzqNLs4gHaHa?pid=ImgDet&w=185&h=185&c=7&dpr=1.3", // замените на реальный путь
      category: "skincare"
    },
    {
      name: "Гель для душа",
      price: 250,
      image: "https://th.bing.com/th/id/OIP.RZ4aPjXVlMu-tS-3icOo9QHaHa?w=198&h=198&c=7&r=0&o=5&dpr=1.3&pid=1.7", // замените на реальный путь
      category: "skincare"
    },
    {
      name: "Пудра",
      price: 799,
      image: "https://th.bing.com/th/id/OIP.4NzJK7gmlnj0x9E8CKXY3gHaHa?w=192&h=192&c=7&r=0&o=5&dpr=1.3&pid=1.7", // замените на реальный путь
      category: "makeup"
    },
    {
      name: "Бальзам для губ",
      price: 150,
      image: "https://th.bing.com/th/id/OIP.Mm0FQAyuuFchzJdxde9rQQHaHa?pid=ImgDet&w=185&h=185&c=7&dpr=1.3", // замените на реальный путь
      category: "makeup"
    },
    {
      name: "Шампунь для блеска",
      price: 400,
      image: "https://th.bing.com/th/id/OIP.5tVLBi2Nk2VM-k93hhhwYAHaHa?w=180&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7", // замените на реальный путь
      category: "hair"
    },
    {
      name: "Сыворотка для лица",
      price: 999,
      image: "https://th.bing.com/th/id/OIP.30h2i-46rK9lpSp5A5yN-wHaHa?pid=ImgDet&w=185&h=185&c=7&dpr=1.3", // замените на реальный путь
      category: "skincare"
    },
    {
      name: "Подводка",
      price: 450,
      image: "https://th.bing.com/th/id/OIP.j_QinwlroAvThqmSg8fzRwHaHa?w=192&h=192&c=7&r=0&o=5&dpr=1.3&pid=1.7", // замените на реальный путь
      category: "makeup"
     },
     {
      name: "Тушь",
      price: 800,
      image: "https://th.bing.com/th/id/OIP.66ycocGYdZ7sRAFo2uajSAHaHa?w=200&h=200&c=7&r=0&o=5&dpr=1.3&pid=1.7", // замените на реальный путь
      category: "makeup"
     }
    ];
  
  const productList = document.getElementById("productList");
  let cart = [];
  
  // Функция для отображения всех товаров
  function renderProducts(filter = "all", search = "") {
    productList.innerHTML = ""; // Очищаем список перед рендером
  
    const filteredProducts = products.filter(product => {
      return (
        (filter === "all" || product.category === filter) &&
        product.name.toLowerCase().includes(search.toLowerCase())
      );
    });
  
    filteredProducts.forEach(product => {
      const card = document.createElement("div");
      card.classList.add("card");
  
      card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>Цена: ${product.price}₽</p>
        <button onclick="addToCart('${product.name}', ${product.price}, '${product.image}')">В корзину</button>
      `;
  
      productList.appendChild(card);
    });
  }
  
  // Добавление товара в корзину
  function addToCart(name, price, image) {
    cart.push({ name, price, image });
    updateCartCount();
  }
  
  // Обновление счетчика товаров в корзине
  function updateCartCount() {
    document.getElementById("cartCount").innerText = cart.length;
  }
  
  // Отображение корзины
  function showCart() {
    const cartModal = document.getElementById("cartModal");
    const cartItems = document.getElementById("cartItems");
    const totalPrice = document.getElementById("totalPrice");
  
    cartItems.innerHTML = ""; // Очищаем корзину перед рендером
  
    let total = 0;
    cart.forEach(item => {
      const cartItem = document.createElement("li");
      cartItem.innerHTML = `
        <img src="${item.image}" alt="${item.name}" style="width: 30px; height: 30px; margin-right: 10px;">
        ${item.name} — ${item.price}₽
      `;
      cartItems.appendChild(cartItem);
      total += item.price;
    });
  
    totalPrice.innerText = `${total}₽`;
    cartModal.classList.remove("hidden");
  }
  
  // Закрытие корзины
  function hideCart() {
    const cartModal = document.getElementById("cartModal");
    cartModal.classList.add("hidden");
  }
  
  // Слушатели событий для фильтрации и поиска товаров
  document.getElementById("categoryFilter").addEventListener("change", (event) => {
    const selectedCategory = event.target.value;
    const searchQuery = document.getElementById("searchInput").value;
    renderProducts(selectedCategory, searchQuery);
  });
  
  document.getElementById("searchInput").addEventListener("input", (event) => {
    const searchQuery = event.target.value;
    const selectedCategory = document.getElementById("categoryFilter").value;
    renderProducts(selectedCategory, searchQuery);
  });
  
  // Инициализация страницы
  window.onload = () => {
    renderProducts(); // Показываем все товары при первом заходе
  };
  
  