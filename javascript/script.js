const buttons = document.querySelectorAll(".toggle-btn");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        const text = button.nextElementSibling;

        if(text.style.display === "block"){

            text.style.display = "none";
            button.textContent = "Mostrar Mais";

        }else{

            text.style.display = "block";
            button.textContent = "Mostrar Menos";

        }

    });

});
