function obterFavicon() {
        // Link do site fornecido pelo usuário
        var siteLink = document.getElementById("siteLink").value;

        // Cria um elemento canvas
        var canvas = document.createElement("canvas");

        // Define o tamanho do canvas
        canvas.width = 42;
        canvas.height = 42;

        // Cria um contexto 2D para o canvas
        var context = canvas.getContext("2d");

        // Cria um elemento de imagem
        var img = new Image();

        // Define a URL do favicon do site com tamanho 42x42 pixels
        img.src = "https://www.google.com/s2/favicons?sz=64&domain=" + siteLink.replace("https://", "").replace("http://", "") + "&s=42";

        // Quando a imagem carregar, desenha-a no contexto 2D com um tamanho de 42x42 pixels
        img.onload = function() {
          context.drawImage(img, 0, 0, 42, 42);

          // Converte o canvas em um elemento de imagem
          var canvasImg = new Image();
          canvasImg.src = canvas.toDataURL("image/png");

          // Adiciona o elemento de imagem à página
          document.getElementById("favicon").appendChild(canvasImg);
        };
      }