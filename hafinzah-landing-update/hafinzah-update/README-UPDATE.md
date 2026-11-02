# Update Hafinzah Fotocopy Landing Page

## Perubahan

### 1. Logo mesin fotocopy (bukan ikon polos)
- Logo navbar, hero label, dan footer diganti SVG berbentuk **mesin printer/fotocopy**
  (badan mesin, kertas keluar, tombol status, tray atas)
- Warna mengikuti tema hijau situs

### 2. Favicon custom
- File: `favicon.svg`
- Desain tile hijau rounded + ikon mesin fotocopy putih
- Sudah dipasang di `<head>` (+ apple-touch-icon + theme-color)

### 3. Keamanan / anti-intip (deterrent)
**Dihapus:** script pihak ketiga `silverhawk.web.id` (yang membuka tab social acak)

**Ditambahkan di `script.js`:**
- Blokir klik kanan → toast "Konten dilindungi"
- Blokir F12, Ctrl+U, Ctrl+S, Ctrl+Shift+I/J/C
- Nonaktifkan drag gambar
- Clear console berkala
- Deteksi kasar DevTools (tanpa blank page agresif)

**Penting (jujur):**
Di GitHub Pages, source **tetap bisa** dilihat lewat:
- View Source browser (sebelum JS jalan)
- `curl` / download file
- Repository GitHub itu sendiri

Proteksi client-side hanya menghambat user awam, **bukan** enkripsi sungguhan.
Jangan taruh data sensitif (password, API key) di frontend.

### 4. Perbaikan lain
- Hapus tag `<body>` dobel
- Hapus dependensi CSS/JS eksternal lock pihak ketiga

---

## Cara upload ke GitHub Pages

1. Download ZIP ini
2. Extract
3. Upload / replace file di repo `hafinzah`:
   - `index.html`
   - `style.css`
   - `script.js`
   - `favicon.svg`  ← **file baru**
4. Commit & push
5. Tunggu 1–2 menit, hard refresh (Ctrl+Shift+R)

---

## File yang diubah / baru

| File | Status |
|------|--------|
| index.html | diubah |
| style.css | diubah |
| script.js | diubah |
| favicon.svg | **baru** |
| logo-mark.svg | referensi (opsional) |
