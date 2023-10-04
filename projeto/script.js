// Obtém o caminho da URL atual
var path = window.location.pathname;

// Pega o nome do arquivo da URL atual (por exemplo, "index.html" ou "about.html")
var page = path.split("/").pop();

// Remove a extensão do arquivo (por exemplo, ".html") se houver
page = page.replace(/\.[^/.]+$/, "");

// Itera pelos links do navbar para encontrar o link correspondente à página atual
var links = document.querySelectorAll('.navbar li a');
for (var i = 0; i < links.length; i++) {
  var link = links[i];
  var href = link.getAttribute('href').split("/").pop().replace(/\.[^/.]+$/, "");
  if (href === page) {
    link.classList.add('selected');
    break; // Para quando o link for encontrado
  }
}

// Adicione esta parte de código no seu arquivo JavaScript ou na seção <script> do seu HTML

window.addEventListener("scroll", function() {
  var header = document.querySelector("header");
  header.classList.toggle("scrolled", window.scrollY > 0);
});

