<template>
    <section class="presentationSection">
        <div class="conteiner">
            <div class="content">
                <div class="title boldItalic slide-in-blurred-left">
                    <h2>¡Hola! Soy José Mayhuasca</h2>
                </div>
                <div class="description paragraph regular slide-in-left">
                    <p style="margin-bottom: 1rem;">
                        Interfaces claras. Código limpio. Resultados reales.
                        Soluciones pensadas para escalar, funcionar y sorprender.
                    </p>
                    <p>
                        ¿Listo para trabajar con alguien que cuida cada detalle y transforma ideas en experiencias
                        digitales sólidas?
                    </p>
                </div>
                <div class="buttons paragraph slide-in-left-btn">
                    <Button label="¡Conoce más!" class="cta" icon="pi pi-arrow-right" iconPos="right"
                        @click.prevent="goTo('/sobre-mi')" />
                    <Button label="Contáctame" class="secondary" icon="pi pi-envelope" iconPos="right"
                        @click.prevent="goTo('/contactame')" />
                </div>
            </div>
            <div class="videoConteiner slide-in-right">
                <video autoplay loop muted class="video">
                    <source src="/src/assets/videos/bgPresentationHome.mp4" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    </section>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();

const goTo = (page) => {
    router.push(page);
};
</script>