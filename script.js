// Adicione um evento de mouseover para mostrar o modal
document.getElementById("doorIcon").addEventListener("mouseover", function () {
  $("#loginModal").modal("show");
});

// Adicione um evento de mouseout para esconder o modal
document.getElementById("doorIcon").addEventListener("mouseout", function () {
  $("#loginModal").modal("hide");
});
