document.addEventListener('DOMContentLoaded', () => {
    const eventContainer = document.getElementById('event-list-container');
    if (!eventContainer) {
        return;
    }

    const events = [
        {
            title: 'Theater Show: Aturan Anti Cinta',
            date: 'Setiap Jumat, 19:00 WIB',
            location: 'JKT48 Theater, fX Sudirman',
            type: 'Theater',
            status: 'ongoing',
            imageSrc: 'aturancinta.png'
        },
        {
            title: 'Personal Meet & Greet "Spring Has Come"',
            date: 'Sabtu, 18 November 2025',
            location: 'ICE BSD, Tangerang',
            type: 'Meet & Greet',
            status: 'upcoming',
            imageSrc: 'spring.png'
        },
        {
            title: 'Live Streaming di Shopee Live',
            date: 'Rabu, 8 Oktober 2025, 20:00 WIB',
            location: 'Online',
            type: 'Live Stream',
            status: 'upcoming',
            imageSrc: 'shopee.png'
        },
        {
            title: 'JKT48 13th Anniversary Concert',
            date: 'Sabtu, 21 Desember 2025',
            location: 'GBK Senayan, Jakarta',
            type: 'Special Event',
            status: 'upcoming',
            imageSrc: 'wonderland.png'
        },
        {
            title: 'Theater Show: Cara Meminum Ramune',
            date: 'Minggu, 21 September 2025',
            location: 'JKT48 Theater, fX Sudirman',
            type: 'Theater',
            status: 'past',
            imageSrc: 'ramune.png'
        }
    ];

    const tagColors = {
        'Theater': 'tag-theater',
        'Meet & Greet': 'tag-meetgreet',
        'Live Stream': 'tag-livestream',
        'Special Event': 'tag-special'
    };

    function createEventCard(event) {
        const tagClass = tagColors[event.type] || 'bg-gray-500';
        return `
            <div class="event-card">
                <img src="${event.imageSrc}" alt="${event.title}" class="event-card-image">
                <div class="event-card-content">
                    <span class="event-tag ${tagClass}">${event.type}</span>
                    <h3 class="text-lg font-bold text-gray-800 flex-grow">${event.title}</h3>
                    <div class="event-info mt-3">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                        <span>${event.date}</span>
                    </div>
                    <div class="event-info">
                         <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                        <span>${event.location}</span>
                    </div>
                </div>
            </div>
        `;
    }

    function createEventSection(title, eventList) {
        if (eventList.length === 0) {
            return '';
        }

        const eventCardsHTML = eventList.map(createEventCard).join('');

        return `
            <section>
                <h2 class="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500 inline-block">${title}</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    ${eventCardsHTML}
                </div>
            </section>
        `;
    }

    const ongoingEvents = events.filter(e => e.status === 'ongoing');
    const upcomingEvents = events.filter(e => e.status === 'upcoming');
    const pastEvents = events.filter(e => e.status === 'past');

    eventContainer.innerHTML = `
        ${createEventSection('Sedang Berlangsung', ongoingEvents)}
        ${createEventSection('Akan Datang', upcomingEvents)}
        ${createEventSection('Telah Berakhir', pastEvents)}
    `;
});