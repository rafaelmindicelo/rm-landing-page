const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let nome = document.getElementById("nome").value;
  let email = document.getElementById("email").value;

  const data = {
    nome,
    email,
  };

  const convertData = JSON.stringify(data);

  localStorage.setItem("lead", convertData);

  let divContent = document.querySelector(".content");
  let loading = `<img id="loader" src="../assets/loader.gif"/>`;
  divContent.innerHTML = loading;

  setTimeout(() => {
    alert("Email cadastrado com sucesso!");
  }, 1000);

  setTimeout(() => {
    document.location.reload();
  }, 1000);
});
