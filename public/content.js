function loadProductById(productId) {
    fetch(`http://localhost:1337/api/products/${productId}?populate=*`)
      .then(response => response.json())
      .then(data => {
        const product = data.data;
        console.log('Loading product:', product);
        const { Name, Description, Rating, Image, Date } = product.attributes;
  
        let descriptionText = '';
        if (Description && Array.isArray(Description)) {
          descriptionText = Description.map(desc => {
            if (desc.children && Array.isArray(desc.children)) {
              return desc.children.map(child => child.text).join(' ');
            }
            return '';
          }).join(' ');
        }
  
        let imageUrl = '';
        if (Image && Image.data && Array.isArray(Image.data) && Image.data.length > 0) {
          const imageFormats = Image.data[0].attributes.formats;
          if (imageFormats.medium) {
            imageUrl = `http://localhost:1337${imageFormats.medium.url}`;
          } else if (imageFormats.small) {
            imageUrl = `http://localhost:1337${imageFormats.small.url}`;
          } else if (imageFormats.thumbnail) {
            imageUrl = `http://localhost:1337${imageFormats.thumbnail.url}`;
          } else {
            imageUrl = `http://localhost:1337${Image.data[0].attributes.url}`;
          }
          console.log('Product image URL:', imageUrl);
        } else {
          console.error('Product image URL is missing:', product);
        }
  
        const content = document.getElementById('content');
        content.innerHTML = `
          <h1>${Name}</h1>
          ${imageUrl ? `<img class="product-image" src="${imageUrl}" alt="${Name}">` : '<div class="image-placeholder">IMAGE</div>'}
          <div class="details">
            <span class="product-name">${Name || 'N/A'}</span>
            <span class="product-score">SCORE: ${Rating ? Rating.toFixed(2) : 'N/A'}</span>
            <span class="product-date">Date: ${Date || 'N/A'}</span>
          </div>
          <p class="product-description">${descriptionText || 'No description available.'}</p>
        `;
      })
      .catch(error => console.error('Error loading product:', error));
  }
  
  function loadProduct(product) {
    const { Name, Description, Rating, Image, Date } = product.attributes;
  
    let descriptionText = '';
    if (Description && Array.isArray(Description)) {
      descriptionText = Description.map(desc => {
        if (desc.children && Array.isArray(desc.children)) {
          return desc.children.map(child => child.text).join(' ');
        }
        return '';
      }).join(' ');
    }
  
    let imageUrl = '';
    if (Image && Image.data && Array.isArray(Image.data) && Image.data.length > 0) {
      const imageFormats = Image.data[0].attributes.formats;
      if (imageFormats.medium) {
        imageUrl = `http://localhost:1337${imageFormats.medium.url}`;
      } else if (imageFormats.small) {
        imageUrl = `http://localhost:1337${imageFormats.small.url}`;
      } else if (imageFormats.thumbnail) {
        imageUrl = `http://localhost:1337${imageFormats.thumbnail.url}`;
      } else {
        imageUrl = `http://localhost:1337${Image.data[0].attributes.url}`;
      }
      console.log('Product image URL:', imageUrl);
    } else {
      console.error('Product image URL is missing:', product);
    }
  
    const content = document.getElementById('content');
    content.innerHTML = `
      <h1>${Name}</h1>
      ${imageUrl ? `<img class="product-image" src="${imageUrl}" alt="${Name}">` : '<div class="image-placeholder">IMAGE</div>'}
      <div class="details">
        <span class="product-name">${Name || 'N/A'}</span>
        <span class="product-score">SCORE: ${Rating ? Rating.toFixed(2) : 'N/A'}</span>
        <span class="product-date">Date: ${Date || 'N/A'}</span>
      </div>
      <p class="product-description">${descriptionText || 'No description available.'}</p>
    `;
  }
  
  window.loadProductById = loadProductById;
  window.loadProduct = loadProduct;
  