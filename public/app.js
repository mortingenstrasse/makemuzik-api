document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.getElementById('sidebar');
  const hamburgerMenu = document.getElementById('hamburger-menu');
  const searchInput = document.getElementById('search-input');
  let productsData = [];

  hamburgerMenu.addEventListener('click', () => {
    sidebar.classList.toggle('open');
  });

  // Tüm Product verilerini çekmek için API isteği
  fetch('https://www.makemuzik.com/api/products?populate=*&sort=Date:desc')
    .then(response => response.json())
    .then(data => {
      console.log('Product data:', data);
      if (data.data.length > 0) {
        productsData = data.data; // Tüm ürün verilerini kaydet
        createMenu(data.data, loadProductById);
        loadProduct(data.data[0]);  // En son tarihe sahip olan ürünü göster
      }
    })
    .catch(error => console.error('Error fetching products:', error));

  searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    const filteredProducts = productsData.filter(product =>
      product.attributes.Name.toLowerCase().includes(query)
    );
    displaySearchResults(filteredProducts);
  });

  function displaySearchResults(products) {
    let resultsContainer = document.getElementById('search-results');
    if (!resultsContainer) {
      resultsContainer = document.createElement('ul');
      resultsContainer.id = 'search-results';
      document.body.appendChild(resultsContainer);
    } else {
      resultsContainer.innerHTML = '';
    }
    products.sort((a, b) => a.attributes.Name.localeCompare(b.attributes.Name))
      .forEach(product => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = '#';
        a.textContent = product.attributes.Name;
        a.addEventListener('click', (e) => {
          e.preventDefault();
          loadProductById(product.id);
        });
        li.appendChild(a);
        resultsContainer.appendChild(li);
      });

    // Position the results container below the search input
    const searchInputRect = searchInput.getBoundingClientRect();
    resultsContainer.style.top = `${searchInputRect.bottom + window.scrollY + 20}px`; // 20px altında
    resultsContainer.style.left = `${searchInputRect.left + window.scrollX}px`;
  }

  document.addEventListener('click', (event) => {
    const resultsContainer = document.getElementById('search-results');
    if (resultsContainer && !resultsContainer.contains(event.target) && !searchInput.contains(event.target)) {
      resultsContainer.style.display = 'none';
    }
  });

  searchInput.addEventListener('focus', () => {
    const resultsContainer = document.getElementById('search-results');
    if (resultsContainer) {
      resultsContainer.style.display = 'block';
    }
  });
});
