

/*function fuja(){
    var botaoNao = document.getElementById("nao");

    var larguraJanela = window.innerWidth;
    var alturaJanela = window.innerHeight;
    
    var maxX = larguraJanela - botaoNao.offsetWidth;
    var maxY = alturaJanela - botaoNao.offsetHeight;

    var aleatorioX = Math.floor(Math.random() * maxX);
    var aleatorioY = Math.floor(Math.random() * maxY);

    botaoNao.style.position = "absolute";
    botaoNao.style.left = aleatorioX + "px";
    botaoNao.style.top = aleatorioY + "px"; 
} 
///////////////////////////////////
    <meta http-equiv="X-UA-Compatible" content="IE=edge">  
///////////////////////////////////

    /* <script>
        document.addEventListener("DOMContentLoaded", function() {
            var simButton = document.getElementById("sim");
            simButton.addEventListener("click", function() {
                window.location.href = "https://www.youtube.com/watch?v=hB991gO9UbQ";
            });
            
            var naoButton = document.getElementById("nao");

            naoButton.addEventListener("mouseover", function(){
                moverBotao();
            });
            document.addEventListener("mousemove", function(event) {
                var mouseX = event.clientX;
                var mouseY = event.clientY;

                var buttonRect = naoButton.getBoundingClientRect();
                var buttonX = buttonRect.left + buttonRect.width / 2;
                var buttonY = buttonRect.top + buttonRect.height / 2;

                var distance = Math.sqrt(Math.pow(mouseX - buttonX, 2) + Math.pow(mouseY - buttonY, 2));

                if (distance < 50) { // Adjust this value as needed
                    moverBotao();
                }
            });
            //button (NO) goes random
            function moverBotao(){
            
            var larguraJanela = window.innerWidth;
            var alturaJanela = window.innerHeight;

            var maxX = larguraJanela - naoButton.offsetWidth;
            var maxY = alturaJanela - naoButton.offsetHeight;

            var aleatorioX = Math.floor(Math.random() * maxX);
            var aleatorioY = Math.floor(Math.random() * maxY);

            naoButton.style.position = "absolute";
            naoButton.style.left = aleatorioX + "px";
            naoButton.style.top = aleatorioY + "px";
        });

        //my page opens at the top of the page
        function scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
        window.onload = scrollToTop;
    </script>
</body>
</html>
*/