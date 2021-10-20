window.addEventListener('load', function () {
    let burger = document.getElementById("burger");
    let menu = document.getElementById("menu");
    let menu_items = document.querySelectorAll("#menu a");

    burger.addEventListener("click", function () {
        if (menu.classList.contains("open")) {
            menu.classList.remove("open");
        } else {
            menu.classList.add("open");
        }
    })

    for (let i = 0; i < menu_items.length; i++) {
        menu_items[i].addEventListener("click", function () {
            menu.classList.remove("open");
        })
    }

    if (window.innerWidth > 768){
        const hero = document.getElementById("hero")

        let scrolling = window.pageYOffset;

        function parallaxeWallpaper(scrolling) {
            hero.style.backgroundPosition =
                "right " + scrolling * .4 + "px";

        }

        if (window.innerWidth > 768) {


            parallaxeWallpaper(scrolling); //Actualisation des positions au chargement de la page

            //Ecouteur d'events pour tous les effets au scroll

            document.addEventListener('scroll', (e) => {
                window.requestAnimationFrame(function () {
                    scrolling = window.pageYOffset;
                    parallaxeWallpaper(scrolling)
                });
            });

        }
    }
})