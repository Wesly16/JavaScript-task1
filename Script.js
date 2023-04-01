// soal 1

for (let i = 1; i <= 100; i++) {
  console.log("User ke-" + i);
}
// soal 2
for (i = 0; i <= 10; i++) {
  //jika kondisi ini aktif atau tidak diberi komentar,
  // maka perulangan yang ditampilkan akan dimulai dari perulangan ke 1
  // if(i ===0){
  //     continue;
  // }
  let nilai = i * 2;
  console.log("Ini hasil perulangan ke " + i + " : " + nilai);
}
// Soal 3

for (let i = 0; i <= 20; i++) {
  if (i % 2 == 0) {
    console.log(i + " adalah bilangan genap");
  } else if (i % 2 == 1) {
    console.log(i + " adalah bilangan ganjil");
  }
}

// soal 4
let ask;
let count = 0;
while (true) {
  let ask = confirm("apakah anda ingin mengulang?");
  if (ask) {
    count++;
  } else {
    alert("anda sudah mengulang sebanyak " + count++);
    break;
  }
}

// soal 5
let Answer = "";
while (Answer !== "Impact Byte") {
  Answer = prompt("Sebutkan kepanjangan dari nama IB?");

  if (Answer === "Impact Byte") {
    alert("Selamat, jawaban kamu benar!");
  } else {
    alert("Silakan coba lagi.");
  }
}
