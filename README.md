# Undangan Digital — Pengelola Formulir

Desain undangan asli dipertahankan dengan panel pengelola di **admin.html**. Buka **PANDUAN.html** untuk panduan yang nyaman dibaca.

## Mulai
1. Ekstrak seluruh ZIP. Jangan menjalankan file dari dalam ZIP.
2. Buka `admin.html` di Chrome atau Edge. Jika penyimpanan/pratinjau diblokir saat dibuka sebagai file, gunakan server lokal atau GitHub Pages.
3. Untuk server lokal di komputer yang memiliki Python: klik `MULAI_LOKAL.bat` pada Windows, atau jalankan `python3 -m http.server 8000 --bind 127.0.0.1` di folder ini lalu buka `http://localhost:8000/admin.html`.
4. Draf pertama menggunakan data contoh asli Silfi & Nedi. Klik **Pasangan baru** untuk memulai tanpa identitas, foto, lokasi dan rekening pasangan sebelumnya.
5. Isi enam bagian formulir. Klik **Simpan draf**, lalu **Pratinjau**.

## Yang dapat diubah
- Nama panggilan/lengkap kedua mempelai, keluarga, alamat dan foto profil.
- Dua acara: judul, tanggal, jam, tempat, alamat serta tautan peta masing-masing.
- Pilihan WIB/WITA/WIT dan acara yang digunakan pada sampul/hitung mundur.
- Sampul, latar utama/acara, enam foto galeri, musik, teks pembuka, kutipan, judul bagian dan kredit.
- Dua rekening / dompet digital. Kosongkan nomor untuk menyembunyikan rekening.
- Nomor WhatsApp penerima konfirmasi. Kosongkan untuk menyembunyikan bagian konfirmasi.
- Format pesan undangan dan daftar tamu.

## Arti Simpan, Pratinjau, dan Terbitkan
**Simpan draf** menyimpan ke IndexedDB di browser/perangkat dan alamat situs saat ini. Bukan penyimpanan akun/cloud. Browser lain, perangkat lain, localhost dan GitHub Pages memiliki penyimpanan berbeda. Menghapus data situs dapat menghilangkan draf; gunakan cadangan JSON.

**Pratinjau** membaca draf di browser yang sama menggunakan parameter `preview`. Tautan pratinjau bukan tautan untuk tamu. Tampilan publik biasa selalu menggunakan `data.js`, sehingga pengunjung tidak melihat draf Anda.

**Terbitkan** dilakukan dengan mengunggah hasil ekspor ke repository. GitHub Pages adalah hosting statis, sehingga halaman formulir ini tidak dapat menulis langsung ke repository. Tidak ada token GitHub yang diminta atau disimpan. Membuka panel pengelola tidak memberi orang lain akses untuk mengubah repository Anda.

## Publikasi pertama ke GitHub Pages
1. Buat repository untuk satu pasangan, misalnya `undangan-ayu-rizki`.
2. Isi formulir dan alamat publik, misalnya `https://USERNAME.github.io/undangan-ayu-rizki/`. Ganti USERNAME dan nama repository sesuai akun Anda; huruf besar/kecil pada jalur harus cocok.
3. Klik **Terbitkan & cadangkan → Unduh pembaruan ZIP**.
4. Ekstrak ZIP pembaruan. Salin `index.html`, `data.js`, dan folder `media` (jika ada) ke folder paket utama ini, lalu setujui penggantian file.
5. Unggah **isi folder paket utama yang sudah diperbarui**, bukan file ZIP dan bukan folder pembungkus `Invitation-main`. `index.html` harus berada di root repository. Sertakan `admin.html`, `data.js`, `style.css`, `utility.css`, `personalize.css`, serta folder `editor`, `js`, `img`, `fonts`, `mp3`, dan `media` jika ada. File `.nojekyll` boleh ditambahkan melalui GitHub bila tidak terlihat pada pemilih file.
6. Buka **Settings → Pages → Build and deployment → Source: Deploy from a branch → Branch: main → /(root) → Save**.
7. Tunggu deployment berhasil, lalu gunakan alamat yang ditampilkan GitHub Pages. Masukkan alamat tersebut persis ke formulir daftar tamu bila berbeda.
8. Periksa nama pasangan, tanggal, foto, rekening, peta, serta satu tautan tamu di perangkat lain sebelum mengirim undangan.

Panduan resmi: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Mengubah undangan yang sudah terbit
1. Buka `https://USERNAME.github.io/REPOSITORY/admin.html` atau editor lokal Anda.
2. Pilih draf, ubah data, simpan dan pratinjau. Untuk membawa draf dari perangkat/alamat lain, impor cadangan JSON.
3. Unduh pembaruan ZIP. Ekstrak, lalu unggah isinya pada root repository yang sama. Timpa file yang sama dan lakukan commit.
4. ZIP pembaruan **bukan paket website lengkap**: file desain dan kode dari paket utama tetap diperlukan. Folder media baru harus ikut diunggah. Media versi lama yang tidak lagi dipakai boleh dihapus setelah memastikan tautan yang masih digunakan.
5. Tunggu deployment selesai, muat ulang halaman publik dan periksa. Cache pratinjau WhatsApp mungkin tidak langsung berganti setelah perubahan.

## Daftar tamu dan salin pesan
1. Masukkan alamat **publik** undangan; jangan gunakan URL `admin.html` atau URL dengan `preview`.
2. Ketik/tempel satu nama per baris, lalu **Tambahkan nama**. Nama ganda diabaikan tanpa membedakan huruf besar/kecil.
3. Gunakan **Lihat**, **Salin nama**, **Salin link**, atau **Salin pesan** pada baris tamu.
4. Pesan memakai `{nama}`, `{mempelai}`, `{tanggal}`, `{link}`. Penanda `{nama}` dan `{link}` harus ada. Hasil penggantian tidak menafsirkan nama sebagai HTML atau penanda tambahan.
5. Nama `Ahmad & Siti` menghasilkan tautan `...?to=Ahmad+%26+Siti` dan tampil sebagai **Ahmad & Siti**, bukan terpotong pada tanda `&`.
6. Ada pencarian, ubah/hapus nama, salin semua pesan, dan ekspor CSV. Simpan draf setelah mengedit daftar.
7. Cadangan JSON dan CSV berisi daftar tamu, sehingga **jangan unggah ke repository publik**. Paket pembaruan tidak menyertakan daftar tamu. Nama tamu pada tautan bisa diedit penerima; fitur ini personalisasi sapaan, bukan verifikasi identitas.

## Memakai ulang untuk pasangan lain
- Klik **Pasangan baru**: membuat draf kosong dengan teks desain awal, tanpa daftar tamu dan tanpa data pribadi pasangan sebelumnya.
- **Duplikat draf** menyalin isian pasangan aktif tanpa tamu. Periksa kembali seluruh informasi yang masih tersalin.
- Buat repository baru per pasangan agar undangan lama tetap berjalan. Satu repository/root hanya menerbitkan satu pasangan aktif. Menimpa `data.js` di repository lama akan mengganti pasangan bagi semua tautan tamu di repository itu.
- Unggah paket utama + pembaruan pasangan baru seperti langkah publikasi pertama.
- Bila pengantin mengisi sendiri: berikan paket ini atau URL `admin.html`, minta mereka mengunduh cadangan JSON setelah mengisi, lalu kirimkan cadangan kepada pengelola secara pribadi. Pengelola mengimpor cadangan, memeriksa hasil, mengekspor pembaruan, dan mengunggah ke GitHub. Draf antarperangkat tidak otomatis tersinkron.

## Foto, musik, peta, dan konfirmasi
- Pilih foto langsung dari perangkat. Foto diubah menjadi JPEG dengan sisi terpanjang maksimum 1.800 px. Format PNG transparan akan kehilangan transparansi; unggah foto biasa atau gunakan URL PNG jika transparansi diperlukan.
- Musik mendukung MP3/M4A/OGG/WAV, maksimal 15 MB per file. Musik dimainkan setelah tombol Buka Undangan ditekan, sesuai pembatasan browser.
- URL media publik harus bisa diakses langsung; tautan halaman album Google Drive bukan URL foto langsung. Jika memakai jalur relatif, file tersebut harus disertakan sendiri pada repository.
- Tautan lokasi menerima tautan Google Maps biasa. Peta sematan menerima URL dari atribut `src` pada kode **Bagikan → Sematkan peta**; tempel URL saja, bukan seluruh kode iframe. Kosongkan bila tidak memerlukan peta sematan.
- Nomor konfirmasi menggunakan format `628…`, tanpa tanda plus/spasi. Pesan dibuka di WhatsApp dan dikirim sendiri oleh tamu. Tidak ada database RSVP bersama. Komentar contoh statis pada file awal diganti dengan konfirmasi WhatsApp agar tidak menjadi ucapan palsu untuk pasangan baru.
- Aset foto/musik awal berasal dari ZIP pengguna dan tetap disertakan. Ganti dengan foto dan musik pilihan Anda sebelum memakai untuk pasangan baru.
- Font dan tata letak utama sudah disertakan secara lokal. Peta, tautan eksternal dan konfirmasi WhatsApp memerlukan internet. Tidak bergantung pada Tailwind CDN.

## Struktur berkas
- `index.html`: halaman tamu.
- `admin.html`: formulir pengelola.
- `data.js`: data publik yang diterbitkan.
- `editor/`: formulir, penyimpanan, pembuat ZIP dan templat halaman.
- `js/main.js`: pengisian data dan perilaku undangan.
- `style.css`, `utility.css`, `personalize.css`: desain, animasi dan penyesuaian responsif.
- `img/`, `mp3/`: aset awal; `media/`: aset hasil unggahan setelah ekspor.

Tidak memerlukan database, npm, PHP, atau akun admin tersendiri untuk versi GitHub Pages ini. Login pengantin dengan sinkronisasi cloud dan publikasi langsung memerlukan layanan backend tambahan; fitur tersebut tidak disimulasikan sebagai login lokal.
