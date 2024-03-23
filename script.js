const screen = document.querySelector(".text_numb");
const btns = document.querySelectorAll(".btn_por");

btns.forEach(boton => {
    boton.addEventListener("click", () => {
        const btnpress = boton.textContent;
        if (boton.id === "c") {
            screen.textContent = "0";
            return;
        }

        if (boton.id === "clear"){
            if (screen.textContent.length === 1 || screen.textContent === ":("){
                screen.textContent = "0";
            } else
            screen.textContent = screen.textContent.slice(0, -1);
            return;
        }

        if (boton.id === "igual"){
        try{
          screen.textContent = eval(screen.textContent);
        } catch {
            screen.textContent = ":(";
        }
          return;
        
        }
        if (screen.textContent === "0" || screen.textContent === ":("){
            screen.textContent = btnpress;
        } else 
        screen.textContent += btnpress;
    })
})
