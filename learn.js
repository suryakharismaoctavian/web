
    //membuat variabel
    let myNumber = 16;
    let myString = "Hello"
    let myBoolean = true
    const phi = 3.14

    //menampilkan informasi ke console
    console.log(myNumber)
    console.log(myString)
    console.log(myBoolean)
    console.log(phi)

    //menampilkan informasi dalam bentuk alert pada window
    window.alert("Angka favorit saya adalah :"+myNumber)
    window.alert('Angka favorit saya adalah :'+myNumber)
    window.alert(`Angka favorit saya adalah :${myNumber}`)
    
    //membuat variabel baru dan menerapkan operasi aritmatika
    let x = 8
let y = 4
console.log(x, y)
console.log('x + y =', x + y)
console.log('x - y =', x - y)
console.log('x * y =', x * y)
console.log('x / y =', x / y)
console.log('x % y =', x % y)
console.log('x++ =', x++)
console.log('++x =', ++x)
console.log('x-- =', x--)
console.log('--x =', --x)

//membuat variabel baru dan menampilkan di console
let a = 7
let b = 4
console.log(a, b)
console.log('a > b =', a > b)
console.log('a < b =', a < b)
console.log('a >= b =', a >= b)
console.log('a <= b =', a <= b)
console.log('a == b =', a == b)
console.log('a != b =', a != b)
console.log('a === b =', a === b)
console.log('a !== b =', a !== b)

//melakukan operasi sederhana dengan operator logika
console.log('true && true =', true && true)
console.log('true && false =', true && false)
console.log('false && true =', false && true)
console.log('false && false =', false && false)
console.log('true || true =', true || true)
console.log('true || false =', true || false)
console.log('false || true =', false || true)
console.log('false || false =', false || false)
console.log('!true =', !true)
console.log('!false =', !false)

//menambahkan fungsi pada luas persegi
function hitungLuasPersegi(sisi) {
    var luas = sisi * sisi
    return luas
}
var hasil_persegi = hitungLuasPersegi(15)
console.log('Luas Persegi = '+hasil_persegi);

//menambahkan fungsi pada luas segitiga
function hitungLuasSegitiga(alas, tinggi) {
    var luas = alas * tinggi
    return luas
}
var hasil_segitiga = hitungLuasSegitiga(5, 15)
console.log('Luas Segitiga = '+hasil_segitiga);

//menambahkan fungsi pada volume balok
function hitungVolumeBalok(panjang, lebar, tinggi) {
    var volume = panjang * lebar * tinggi
    return volume
}
var hasil_volumebalok = hitungVolumeBalok(15, 7, 9)
console.log('Volume Balok = '+hasil_volumebalok);

//array nama negara
var negara = ["Indonesia", "Vietnam", "Singapura", "Thailand"]

//mengakses array berdasarkan indeks
console.log(negara[0]);
console.log(negara[1]);
console.log(negara[2]);

//menambahkan metode push
negara.push("Filiphina")

//menambahkan metode pop
negara.pop()

//menambahkan metode unshift
negara.unshift("Kamboja")

//menambahkan metode shift
negara.shift()

//menambahkan metode sort
negara.sort()

//menambahkan metode reverse
negara.reverse()

//data pegawai
let pegawai = {
    ID: 1905101069,
    Nama_awal:"Surya Kharisma",
    Nama_akhir:"Octavian",
    Jabatan: "HRD",
    Nama_Lengkap: function () {
        return this.Nama_awal + " " + this.Nama_akhir;
    }
}

//menambahkan aksesoris dot notation
console.log(pegawai.ID);
console.log(pegawai.Nama_awal);
console.log(pegawai.Nama_akhir);
console.log(pegawai.Jabatan);
console.log(pegawai.Nama_Lengkap());

//menambahkan aksesoris bracket notation
console.log(pegawai["ID"]);
console.log(pegawai["Nama_awal"]);
console.log(pegawai["Nama_akhir"]);
console.log(pegawai["Jabatan"]);
console.log(pegawai["Nama_Lengkap"]());