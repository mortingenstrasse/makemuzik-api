function createMenu(products, loadProductById) {
    const categories = {
      Software: {},
      Hardware: {}
    };
  
    products.forEach(product => {
      const { Name, Subheader, category } = product.attributes;
      const categoryName = category?.data?.attributes?.Name;
      console.log(`Processing product: ${Name}, Subheader: ${Subheader}, Category: ${categoryName}`);
  
      if (!categories[categoryName]) return;
  
      if (!categories[categoryName][Subheader]) {
        categories[categoryName][Subheader] = [];
      }
  
      categories[categoryName][Subheader].push({
        id: product.id,
        name: Name
      });
    });
  
    const menu = document.getElementById('menu');
    Object.keys(categories).forEach(category => {
      console.log(`Creating menu for category: ${category}`);
      const li = document.createElement('li');
      const button = document.createElement('button');
      button.className = 'menu-btn';
      button.textContent = category;
      button.addEventListener('click', () => {
        const submenu = li.querySelector('.submenu');
        if (submenu) {
          submenu.style.display = submenu.style.display === 'none' ? 'block' : 'none';
        }
      });
      li.appendChild(button);
  
      const ul = document.createElement('ul');
      ul.className = 'submenu';
      ul.style.display = 'none';
  
      Object.keys(categories[category]).forEach(subheader => {
        console.log(`Creating submenu for subheader: ${subheader} under category: ${category}`);
        const subLi = document.createElement('li');
        const subButton = document.createElement('button');
        subButton.className = 'subheader-btn';
        subButton.textContent = subheader;
        subButton.addEventListener('click', () => {
          const subSubmenu = subLi.querySelector('.sub-submenu');
          if (subSubmenu) {
            subSubmenu.style.display = subSubmenu.style.display === 'none' ? 'block' : 'none';
          }
        });
        subLi.appendChild(subButton);
  
        const subUl = document.createElement('ul');
        subUl.className = 'sub-submenu';
        subUl.style.display = 'none';
  
        categories[category][subheader].forEach(product => {
          console.log(`Adding product: ${product.name} under subheader: ${subheader} in category: ${category}`);
          const productLi = document.createElement('li');
          const a = document.createElement('a');
          a.href = '#';
          a.textContent = product.name;
          a.addEventListener('click', (e) => {
            e.preventDefault();
            loadProductById(product.id);
          });
          productLi.appendChild(a);
          subUl.appendChild(productLi);
        });
  
        subLi.appendChild(subUl);
        ul.appendChild(subLi);
      });
  
      li.appendChild(ul);
      menu.appendChild(li);
    });
  
    // Add Education button
    const educationLi = document.createElement('li');
    const educationButton = document.createElement('button');
    educationButton.className = 'menu-btn';
    educationButton.textContent = 'Education';
    educationButton.addEventListener('click', () => {
      const content = document.getElementById('content');
      content.innerHTML = `
        <h1>Education</h1>
        <p>Coming Soon</p>
        <p>We are planning to release educational videos here soon. Stay tuned!</p>
      `;
    });
    educationLi.appendChild(educationButton);
    menu.appendChild(educationLi);
  
    // Add About Us button
    const aboutUsLi = document.createElement('li');
    const aboutUsButton = document.createElement('button');
    aboutUsButton.className = 'menu-btn';
    aboutUsButton.textContent = 'About Us';
    aboutUsButton.addEventListener('click', () => {
      const content = document.getElementById('content');
      content.innerHTML = `
        <h1>About Us</h1>
        <p>My name is Tunc Alicioglu. I have been taking education in the field of cinema and game music for many years and have participated in various projects.</p>
        <p>My main goal is to share my accumulated knowledge with you.</p>
        <p>Contact: <a href="mailto:makemuzikcontact@gmail.com">makemuzikcontact@gmail.com</a></p>
      `;
    });
    aboutUsLi.appendChild(aboutUsButton);
    menu.appendChild(aboutUsLi);
  }
  
  window.createMenu = createMenu;
  