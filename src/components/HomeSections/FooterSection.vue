<template>
    <section class="footerSection">
        <div class="conteiner slide-in-bck-center">
            <div class="phrase colorWhite">
                <h4 class="mediumItalic">
                    Transformo ideas en <br> experiencias interactivas.
                </h4>
                <h4 class="mediumItalic">
                    No solo escribo código. <br> Construyo lo que vendrá.
                </h4>
            </div>
            <div class="content">
                <div class="data paragraph medium">
                    <p>
                        +51 951 703 662
                        <br>
                        mayhuascaperezjose@gmail.com
                    </p>
                </div>
                <div class="linksConteiner">
                    <div class="navigationLinks">
                        <div class="title paragraph regular">
                            <span>Navegación</span>
                        </div>
                        <div class="items small regular colorGrey">
                            <ol>
                                <li>
                                    <a href="#home" @click.prevent="smoothScroll('#presentationSection')">Inicio</a>
                                </li>
                                <li>
                                    <a href="#about" @click.prevent="smoothScroll('#aboutMeSection')">Sobre mí</a>
                                </li>
                                <li>
                                    <a href="#projects" @click.prevent="smoothScroll('#projectsSection')">Proyectos</a>
                                </li>
                                <li>
                                    <a href="#contact" @click.prevent="smoothScroll('#contactSection')">Contacto</a>
                                </li>
                            </ol>
                        </div>
                    </div>
                    <div class="followmeLinks">
                        <div class="title paragraph regular">
                            <span>Sígueme</span>
                        </div>
                        <div class="items small regular colorGrey">
                            <ol>
                                <li>
                                    <a href="https://www.linkedin.com/in/josedmayhuasca/" rel="noopener noreferrer"
                                        target="_blank">LinkedIn</a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/josedmayhuasca/" rel="noopener noreferrer"
                                        target="_blank">Instagram</a>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="copyright">
            <p class="small regular">
                © 2025 José Mayhuasca Pérez. <br class="break">Todos los derechos reservados.
            </p>
        </div>
    </section>
</template>

<script setup>
const smoothScroll = (id) => {
    const target = document.querySelector(id);
    const navbarHeight = document.querySelector('.conteinerNavbar').offsetHeight;
    if (target) {
        window.scrollTo({
            top: target.offsetTop - navbarHeight,
            behavior: 'smooth'
        });
    }
};
</script>