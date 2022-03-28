# SkillTest bidang Web Developer

## SOAL TES

# A. 

1. Buat Halaman Login

2. Saat login hit ke API, POST https://devel.bebasbayar.com/web/test_programmer.php

3. Content-Type: application/json | Accept: application/json

### Request:

### `{"user": "sesuai inputan", "password": "sesuai inputan"}`

### Credential untuk login:

### `User: admin | Pass: admin123`

Berdasarkan hasil API

### Contoh Response Sukses:

### `{"rc":"00","rd":"Sukses"}`

4. Jika sukses masuk ke step 4

### Contoh Response Gagal:

### `{"rc":"01","rd":"Invalid user\/password"}`

Jika gagal tampilkan alert error sesuai “rd”

# B.

1. Ambil data menggunakan http request ke API, GET https://devel.bebasbayar.com/web/test_programmer.php

2. Content-Type: application/x-www-form-urlencoded | Accept: application/json

3. Tampilkan data di suatu tabel, data yang ditampilkan adalah date, label, nb_visits, status

4. Untuk masing2 baris ada action untuk lihat detail, saat diklik detail maka akan menampilkan popup berisi seluruh data pada baris itu

5. Tambahkan tombol untuk melakukan reload

# C. 

## TES LOGIKA

1. Ada 5 rumah

2. Orang Madura tinggal Rumah warna Merah Marun.

3. Orang Batak memelihara Anjing.

4. Tercium bau Capuchino di Rumah warna Hijau Pupus.

5. Orang Jawa minum Teh Melati.

6. Rumah Hijau Pupus berada di sebelah kanan Rumah warna Putih Tulang.

7. Orang yang suka makan Spagetti memelihara Kucing.

8. Penghuni Rumah warna Kuning Telur suka makan Steak.

9. Susu Beruang diminum oleh pemilik Rumah di tengah.

10. Orang Sunda tinggal di Rumah Pertama.

11. Orang yang suka makan Pizza tinggal di sebelah rumah orang yang pelihara Ikan Cupang.

12. Steak dimakan di Rumah sebelahnya Rumah yang ada kandang Kudanya

13. Orang yang suka makan Burger juga sering minum Jus Wortel.

14. Orang Betawi suka sekali makan Mie Instan.

15. Orang Sunda tinggal di sebelah rumah wana Biru Langit.


Pertanyaannya:
Siapa yang memelihara Ular?


Aturan:

Gambarkan dalam bentuk bagan/tabel/chart dalam format bebas yang penting bisa menggambarkan logika dan teknis untuk menjawab pertanyaan di atas
