<template>
    <section class="footerSection">
        <!-- <div class="conteiner slide-in-bck-center"> -->
        <div class="container">
            <!-- <div class="phrase colorWhite">
                <h4 class="mediumItalic">
                    Transformo ideas en <br> experiencias interactivas.
                </h4>
                <h4 class="mediumItalic">
                    No solo escribo código. <br> Construyo lo que vendrá.
                </h4>
            </div> -->
            <div class="logo">
                <img src="/src/assets/images/img_footer_logo.webp" alt="Logo José Mayhuasca Pérez" />
            </div>
            <div class="data small regular">
                <p class="paragraph semiBold">Email</p>
                <div class="inline">
                    <i class="pi pi-envelope"></i>
                    <p>mayhuascaperezjose@gmail.com</p>
                </div>
                <p class="paragraph semiBold">Teléfono</p>
                <div class="inline">
                    <i class="pi pi-phone"></i>
                    <p>+51 951 703 662</p>
                </div>
            </div>

            <div class="links">
                <div class="navigationLinks small regular">
                    <!-- <div class="title paragraph regular">
                        <span>Navegación</span>
                    </div> -->
                    <ol>
                        <li>
                            <a @click.prevent="goTo('/')">Inicio</a>
                        </li>
                        <li>
                            <a @click.prevent="goTo('/sobre-mi')">Sobre mí</a>
                        </li>
                        <li>
                            <a @click.prevent="goTo('/proyectos')">Proyectos</a>
                        </li>
                        <li>
                            <a @click.prevent="goTo('/contactame')">Contacto</a>
                        </li>
                    </ol>
                    <!-- <div class="items small regular">
                    </div> -->
                </div>
                <div class="followmeLinks">
                    <div class="title paragraph semiBold">
                        <span>Sígueme</span>
                    </div>
                    <div class="items small regular">
                        <a class="pi pi-linkedin" href="https://www.linkedin.com/in/josedmayhuasca/"
                            rel="noopener noreferrer" target="_blank"></a>
                        <a class="pi pi-instagram" href="https://www.instagram.com/josedmayhuasca/"
                            rel="noopener noreferrer" target="_blank"></a>
                        <!-- <ol>
                            <li>
                                <a href="https://www.linkedin.com/in/josedmayhuasca/" rel="noopener noreferrer"
                                    target="_blank"></a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/josedmayhuasca/" rel="noopener noreferrer"
                                    target="_blank"></a>
                            </li>
                        </ol> -->
                    </div>
                </div>
            </div>
            <!-- <div class="content">
                <div class="linksConteiner">
                </div>
            </div> -->
        </div>
        <div class="line"></div>
        <!-- <div class="copyright">
            <p class="paragraph regular">
                Copyright © José Mayhuasca Pérez 2025. <br class="break">Todos los derechos reservados.
            </p>
        </div> -->
    </section>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();

const goTo = (page) => {
    router.push(page);
};
</script>