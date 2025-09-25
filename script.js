// Data pengguna (simulasi)
let users = JSON.parse(localStorage.getItem('users')) || [];

// Data lagu per genre
const songsData = {
    indie: [
        { title: "Anything You Want - Reality Club", img: "images/indie1.jpeg", yt: "https://music.youtube.com/search?q=Anything+You+Want+Reality+Club" },
        { title: "Akad - Payung Teduh", img: "images/indie2.jpeg", yt: "https://music.youtube.com/search?q=Akad+Payung+Teduh" },
        { title: "Electric Feel - MGMT", img: "images/indie3.jpeg", yt: "https://music.youtube.com/search?q=Electric+Feel+MGMT" },
        { title: "I've Always Loved You - Arash Buana", img: "images/indie4.jpeg", yt: "https://music.youtube.com/search?q=Ive+Always+Loved+You+Arash+Buana" },
        { title: "The Less I Know The Better - Tame Impala", img: "images/indie5.jpeg", yt: "https://music.youtube.com/search?q=The+Less+I+Know+The+Better+Tame+Impala" }
    ],
    pop: [
        { title: "Pemuja Rahasia - Sheila On 7", img: "images/pop1.jpeg", yt: "https://music.youtube.com/search?q=Pemuja+Rahasia+Sheila+On+7" },
        { title: "About You - The 1975", img: "images/pop2.jpeg", yt: "https://music.youtube.com/search?q=About+You+The+1975" },
        { title: "Serena - For Revenge", img: "images/pop3.jpeg", yt: "https://music.youtube.com/search?q=Serena+For+Revenge" },
        { title: "Closer - The Chainsmokers", img: "images/pop4.jpeg", yt: "https://music.youtube.com/search?q=Closer+The+Chainsmokers" },
        { title: "Bitter Sweet Symphony - The Verve", img: "images/pop5.jpeg", yt: "https://music.youtube.com/search?q=Bitter+Sweet+Symphony+The+Verve" }
    ],
    rock: [
        { title: "Slide Away - Oasis", img: "images/rock1.jpeg", yt: "https://music.youtube.com/search?q=Slide+Away+Oasis" },
        { title: "Twist and Shout - The Beatles", img: "images/rock2.jpeg", yt: "https://music.youtube.com/search?q=Twist+and+Shout+The+Beatles" },
        { title: "Paradise City - Guns N' Roses", img: "images/rock3.jpeg", yt: "https://music.youtube.com/search?q=Paradise+City+Guns+N+Roses" },
        { title: "Back in Black - AC/DC", img: "images/rock4.jpeg", yt: "https://music.youtube.com/search?q=Back+in+Black+ACDC" },
        { title: "Racun Dunia - The Changcuters", img: "images/rock5.jpeg", yt: "https://music.youtube.com/search?q=Racun+Dunia+The+Changcuters" }
    ],
    rnb: [
        { title: "One Last Time - Ariana Grande", img: "images/rnb1.jpeg", yt: "https://music.youtube.com/search?q=One+Last+Time+Ariana+Grande" },
        { title: "Lantas - Juicy Luicy", img: "images/rnb2.jpeg", yt: "https://music.youtube.com/search?q=Lantas+Juicy+Luicy" },
        { title: "My Boo - Usher", img: "images/rnb3.jpeg", yt: "https://music.youtube.com/search?q=My+Boo+Usher" },
        { title: "Kill Bill - SZA", img: "images/rnb4.jpeg", yt: "https://music.youtube.com/search?q=Kill+Bill+SZA" },
        { title: "Blinding Lights - The Weeknd", img: "images/rnb5.jpeg", yt: "https://music.youtube.com/search?q=Blinding+Lights+The+Weeknd" }
    ],
    jazz: [
        { title: "From the Start - Laufey", img: "images/jazz1.jpeg", yt: "https://music.youtube.com/search?q=From+the+Start+Laufey" },
        { title: "Valentine - Laufey", img: "images/jazz2.jpeg", yt: "https://music.youtube.com/search?q=Valentine+Laufey" },
        { title: "Street by Street - Laufey", img: "images/jazz3.jpeg", yt: "https://music.youtube.com/search?q=Street+by+Street+Laufey" },
        { title: "J'ai Deux Amours - Laufey (cover)", img: "images/jazz4.jpeg", yt: "https://music.youtube.com/search?q=Jai+Deux+Amours+Laufey" },
        { title: "Goodnight - Laufey", img: "images/jazz5.jpeg", yt: "https://music.youtube.com/search?q=Goodnight+Laufey" }
    ],
    hiphop: [
        { title: "Not Like Us - Kendrick Lamar", img: "images/hiphop1.jpeg", yt: "https://music.youtube.com/search?q=Not+Like+Us+Kendrick+Lamar" },
        { title: "Like That - Future ft. Kendrick Lamar", img: "images/hiphop2.jpeg", yt: "https://music.youtube.com/search?q=Like+That+Future+Kendrick+Lamar" },
        { title: "Carnival - Kanye West ft. Ty Dolla Sign", img: "images/hiphop3.jpeg", yt: "https://music.youtube.com/search?q=Carnival+Kanye+West" },
        { title: "Family Matters - Drake", img: "images/hiphop4.jpeg", yt: "https://music.youtube.com/search?q=Family+Matters+Drake" },
        { title: "Euphoria - Kendrick Lamar", img: "images/hiphop5.jpeg", yt: "https://music.youtube.com/search?q=Euphoria+Kendrick+Lamar" }
    ]
};

// Fungsi navigasi halaman
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
}

function showRegister() {
    showPage('registerPage');
}

function showLogin() {
    showPage('loginPage');
}

// Registrasi
document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('regName').value;
    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;

    if (users.find(u => u.email === email)) {
        alert('Email sudah terdaftar!');
        return;
    }

    users.push({ name, email, password });
    localStorage.setItem('users', JSON.stringify(users));
    alert('Registrasi berhasil! Silakan login.');
    showLogin();
});

// Login
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
        localStorage.setItem('loggedInUser ', email);
        showPage('dashboardPage');
    } else {
        alert('Email atau password salah!');
    }
});

// Dashboard
// Dashboard - Tampilkan lagu berdasarkan genre (update dengan error handling)
function showGenre(genre) {
    const title = document.getElementById('genreTitle');
    const songsList = document.getElementById('songsList');
    title.textContent = genre.charAt(0).toUpperCase() + genre.slice(1) + ' Lagu';
    songsList.innerHTML = '';  // Clear list sebelumnya
    songsData[genre].forEach((song, index) => {  // Index buat fallback kalau gambar hilang
        const songDiv = document.createElement('div');
        songDiv.classList.add('song-item');
        songDiv.innerHTML = `
            <img src="${song.img}" alt="${song.title}" 
                 onerror="console.log('Gambar gagal load: ${song.img}'); 
                          this.src='https://via.placeholder.com/200x200?text=No+Image+${index+1}'; 
                          this.onerror=null;"
                 onload="console.log('Gambar loaded: ${song.title}');">
            <div class="song-title" onclick="window.open('${song.yt}', '_blank')">${song.title}</div>
        `;
        songsList.appendChild(songDiv);
    });
    showPage('songsPage');
}
function backToDashboard() {
    showPage('dashboardPage');
}

function logout() {
    localStorage.removeItem('loggedInUser ');
    showLogin();
}

// Cek jika sudah login saat load
window.onload = function() {
    if (localStorage.getItem('loggedInUser ')) {
        showPage('dashboardPage');
    } else {
        showPage('registerPage');
    }
};