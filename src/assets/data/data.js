export const data = {
    bride: {
        L: {
            id: 1,
            name: 'Kodri, S.Kom',
            child: 'Putra ke Tiga',
            father: '(Alm.) Mukhtar',
            mother: 'Ramah',
            image: './src/assets/images/man.jpg'
        },
        P: {
            id: 2,
            name: 'Susanti, S.Pd',
            child: 'Putri ke Dua',
            father: 'M. Zen',
            mother: 'Ratna',
            image: './src/assets/images/women.jpg'
        },

        couple: './src/assets/images/wedding.jpg'
    },

    time: {
        marriage: {
            year: '2026',
            month: 'April',
            date: '16',
            day: 'Kamis',
            hours: {
                start: '14.00',
                finish: 'Selesai'
            }
        },
        // reception: {
        //     year: '2024',
        //     month: 'November',
        //     date: '14',
        //     day: 'Kamis',
        //     hours: {
        //         start: '11.00',
        //         finish: 'Selesai'
        //     }
        // },
        address: 'Jl. Kakak Tua RT/RW 002/001 Desa Tuo Limbur SP 4 Kec. Limbur Lubuk Mengkuang Kab. Bungo'
    },

    link: {
        calendar: 'https://calendar.app.google/2gXLipAxWS1Jko2T6',
        map: 'https://maps.app.goo.gl/8t894ccZSQhvUmiL7',
    },

    galeri: [
        {
            id: 1,
            image: './src/assets/images/1.png'
        },
        {
            id: 2,
            image: './src/assets/images/2.png'
        },
        {
            id: 3,
            image: './src/assets/images/3.png'
        },
        {
            id: 4,
            image: './src/assets/images/4.png'
        },
        {
            id: 5,
            image: './src/assets/images/5.png'
        }
    ],

    bank: [
        {
            id: 1,
            name: 'Kodri',
            icon: './src/assets/images/bni.png',
            rekening: '2018544607'
        },
        {
            id: 2,
            name: 'Susanti',
            icon: './src/assets/images/bri.png',
            rekening: '804601014181537'
        },
    ],

    audio: './src/assets/audio/wedding.mp3',

    api: 'https://script.google.com/macros/s/AKfycbwyhFnlqSLZDzGhHP3te56qrRPgDbJLrEipGrAdWnxLxEa6gXInHXkj10r2h8rcgShe/exec',

    navbar: [
        {
            id: 1,
            teks: 'Home',
            icon: 'bx bxs-home-heart',
            path: '#home',
        },
        {
            id: 2,
            teks: 'Mempelai',
            icon: 'bx bxs-group',
            path: '#bride',
        },
        {
            id: 3,
            teks: 'Tanggal',
            icon: 'bx bxs-calendar-check',
            path: '#time',
        },
        {
            id: 4,
            teks: 'Galeri',
            icon: 'bx bxs-photo-album',
            path: '#galeri',
        },
        {
            id: 5,
            teks: 'Ucapan',
            icon: 'bx bxs-message-rounded-dots',
            path: '#wishas',
        },
    ],
}
