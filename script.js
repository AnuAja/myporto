function toggleDetails(element) {
  // Mengambil elemen card-body yang berada tepat di bawah header yang diklik
  const body = element.nextElementSibling;
  
  // Melakukan toggle display (bisa diganti dengan animasi CSS)
  if (body.style.display === "block") {
    body.style.display = "none";
  } else {
    body.style.display = "block";
  }
}

