document.addEventListener("click", e => {

    if(e.target.className == "ataque"){

        document.querySelector("body").style.boxShadow = "inset 0px 0px 30px 2px rgb(195, 12, 12)";

        setTimeout(() => {

            document.querySelector("body").style.boxShadow = "inset 0px 0px 0px 0px rgb(195, 12, 12)";
        }, 1500)
    }

    if(e.target.className == "defensa"){

        document.querySelector("body").style.boxShadow = "inset 0px 0px 30px 2px rgb(63, 63, 194)";

        setTimeout(() => {

            document.querySelector("body").style.boxShadow = "inset 0px 0px 0px 0px rgb(63, 63, 194)";
        }, 1500)
    }
});