document.addEventListener('DOMContentLoaded', () => {
    const members = [
        { name: 'Shani Indira', gen: 3, status: 'Member', isOshi: false, imgSrc: 'https://jkt48.com/profile/shani_indira_natio.jpg?v=2' },
        { name: 'Marsha Lenathea', gen: 9, status: 'Member', isOshi: false, imgSrc: 'https://jkt48.com/profile/marsha_lenathea.jpg?v=2' },
        { name: 'Gita Sekar', gen: 6, status: 'Member', isOshi: false, imgSrc: 'https://jkt48.com/profile/gita_sekar_andarini.jpg?v=2' },
        { name: 'Amanda Sukma', gen: 10, status: 'Member', isOshi: false, imgSrc: 'https://jkt48.com/profile/amanda_sukma.jpg?v=2' },
        { name: 'Alya Amanda', gen: 11, status: 'Trainee', isOshi: false, imgSrc: 'https://jkt48.com/profile/alya_amanda.jpg?v=2' },
        { name: 'Greesel', gen: 11, status: 'Trainee', isOshi: false, imgSrc: 'https://jkt48.com/profile/greesella_adhalia.jpg?v=2' },
        { name: 'Christy', gen: 7, status: 'Member', isOshi: false, imgSrc: 'https://jkt48.com/profile/angelina_christy.jpg?v=2' },
        { name: 'Olla', gen: 7, status: 'Member', isOshi: false, imgSrc: 'https://jkt48.com/profile/febriola_sinambela.jpg?v=2' },
        { name: 'Fiony', gen: 8, status: 'Member', isOshi: false, imgSrc: 'https://jkt48.com/profile/fiony_alveria.jpg?v=2' },
        { name: 'Lulu', gen: 8, status: 'Member', isOshi: false, imgSrc: 'https://jkt48.com/profile/lulu_salsabila.jpg?v=2' }
    ];

    const memberGrid = document.getElementById('member-grid');
    const searchInput = document.getElementById('searchInput');
    const genFilter = document.getElementById('genFilter');
    const statusFilter = document.getElementById('statusFilter');

    function renderMembers(filteredMembers) {
        memberGrid.innerHTML = '';
        
        if (filteredMembers.length === 0) {
            memberGrid.innerHTML = `<p class="col-span-full text-center text-gray-500">Member tidak ditemukan.</p>`;
            return;
        }

        filteredMembers.forEach(member => {
            const oshiStar = member.isOshi ? `
                <div class="oshi-border absolute top-2 right-2 z-10">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                </div>` : '';

            const card = `
                <div class="member-card bg-white rounded-xl overflow-hidden card-shadow relative group">
                    ${oshiStar}
                    <div class="h-48 relative overflow-hidden">
                        <img src="${member.imgSrc}" alt="${member.name}" class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300" onerror="this.src='https://via.placeholder.com/150';">
                        <div class="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent opacity-80"></div>
                        <p class="absolute bottom-2 left-3 text-white font-bold text-sm">${member.name}</p>
                    </div>
                    <div class="p-3 text-center">
                        <p class="text-xs text-gray-500 font-semibold">Gen ${member.gen} &bull; ${member.status}</p>
                    </div>
                </div>
            `;
            memberGrid.innerHTML += card;
        });
    }
    
    function applyFilters() {
        const searchTerm = searchInput.value.toLowerCase();
        const selectedGen = genFilter.value;
        const selectedStatus = statusFilter.value;

        const filteredMembers = members.filter(member => {
            const nameMatch = member.name.toLowerCase().includes(searchTerm);
            const genMatch = selectedGen === 'all' || member.gen == selectedGen;
            const statusMatch = selectedStatus === 'all' || member.status === selectedStatus;
            
            return nameMatch && genMatch && statusMatch;
        });

        renderMembers(filteredMembers);
    }
    
    function populateGenFilter() {
        const generations = [...new Set(members.map(member => member.gen))];
        generations.sort((a, b) => a - b);
        
        generations.forEach(gen => {
            const option = document.createElement('option');
            option.value = gen;
            option.textContent = `Generasi ${gen}`;
            genFilter.appendChild(option);
        });
    }

    searchInput.addEventListener('input', applyFilters);
    genFilter.addEventListener('change', applyFilters);
    statusFilter.addEventListener('change', applyFilters);

    populateGenFilter();
    renderMembers(members);
});