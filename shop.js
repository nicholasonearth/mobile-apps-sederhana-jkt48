document.addEventListener('DOMContentLoaded', () => {

    const productsData = [
        { id: 1, name: 'Photopack "Magic Hour"', category: 'Photopack', price: 85000, imageSrc: '1.png' },
        { id: 2, name: 'Official JKT48 Lightstick Ver. 3', category: 'Aksesoris', price: 450000, imageSrc: '2.png' },
        { id: 3, name: 'T-shirt "I LOVE JKT48"', category: 'Apparel', price: 150000, imageSrc: '3.png' },
        { id: 4, name: 'Photopack "Musim Panas"', category: 'Photopack', price: 85000, imageSrc: '4.png' },
        { id: 5, name: 'JKT48 Totebag Logo', category: 'Aksesoris', price: 120000, imageSrc: '5.png' },
        { id: 6, name: 'Varsity Jacket JKT48', category: 'Apparel', price: 550000, imageSrc: '6.png' },
        { id: 7, name: 'Official Photobook "RE:BOOST"', category: 'Aksesoris', price: 250000, imageSrc: '7.png' },
        { id: 8, name: 'Photopack "Kelopak Bunga Sakura"', category: 'Photopack', price: 85000, imageSrc: '8.png' }
    ];

    class ShopPage {
        constructor(products) {
            this.allProducts = products;
            
            this.state = {
                searchTerm: '',
                activeCategory: 'all'
            };

            this.gridElement = document.getElementById('product-grid');
            this.searchInput = document.getElementById('shopSearchInput');
            this.filterButtonsContainer = document.getElementById('filter-buttons');

            this.init();
        }

        init() {
            this.searchInput.addEventListener('input', this.handleSearch.bind(this));
            this.filterButtonsContainer.addEventListener('click', this.handleFilterClick.bind(this));

            this.render();
        }
        
        handleSearch(event) {
            this.state.searchTerm = event.target.value.toLowerCase();
            this.render();
        }

        handleFilterClick(event) {
            if (event.target.classList.contains('filter-btn')) {
                this.state.activeCategory = event.target.dataset.category;
                
                this.filterButtonsContainer.querySelector('.active').classList.remove('active');
                event.target.classList.add('active');
                
                this.render();
            }
        }

        render() {
            const filteredProducts = this.allProducts.filter(product => {
                const nameMatch = product.name.toLowerCase().includes(this.state.searchTerm);
                const categoryMatch = this.state.activeCategory === 'all' || product.category === this.state.activeCategory;
                return nameMatch && categoryMatch;
            });
            
            this.gridElement.innerHTML = '';
            
            if (filteredProducts.length === 0) {
                this.gridElement.innerHTML = `<p class="col-span-full text-center text-gray-500">Produk tidak ditemukan.</p>`;
                return;
            }

            filteredProducts.forEach(product => {
                const productCardHTML = this.createProductCardHTML(product);
                this.gridElement.innerHTML += productCardHTML;
            });
        }

        createProductCardHTML(product) {
            const priceFormatted = new Intl.NumberFormat('id-ID', {
                style: 'currency', currency: 'IDR', minimumFractionDigits: 0
            }).format(product.price);

            return `
                <div class="product-card">
                    <div class="product-image-container">
                        <img src="${product.imageSrc}" alt="${product.name}" class="product-image" onerror="this.src='https://via.placeholder.com/200?text=Image+Error';">
                    </div>
                    <div class="product-info">
                        <p class="product-category">${product.category}</p>
                        <h3 class="product-name">${product.name}</h3>
                        <p class="product-price">${priceFormatted}</p>
                        <a href="#" class="buy-button">Beli Sekarang</a>
                    </div>
                </div>`;
        }
    }

    if (document.getElementById('product-grid')) {
        new ShopPage(productsData);
    }
    
    if (document.getElementById('member-grid')) {
        console.log("Halaman Member dimuat.");
    }
    
    if (document.getElementById('event-list-container')) {
        console.log("Halaman Event dimuat.");
    }
});