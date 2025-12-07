<template>
    <section class="heroSection">
        <div class="conteinerBg">
            <!-- <video autoplay loop muted class="backgroundVideo">
                <source src="/src/assets/videos/bgHeroHome.mp4" type="video/mp4">
                Tu navegador no soporta videos HTML5.
            </video> -->
            <!-- <img :src="img_home_HeroSection" alt=""> -->
            <div class="imagebg"></div>
            <div class="content slide-in-bottom">
                <!-- <div class="content"> -->
                <h1 class="regular colorWhite">Cada <span class="extraBold colorYellow">linea de codigo</span> cuenta.
                    <br><br class="break">
                    Cada
                    <span class="extraBold colorYellow">detalle</span> importa.
                </h1>
                <h4 class="colorWhite regular">Desarrollador web apasionado por crear experiencias <br> digitales
                    excepcionales y
                    funcionales.</h4>
            </div>
            <div class="button slide-in-bottom-delay">
                <!-- <div class="button"> -->
                <Button label="¡Impulsa tu idea!" class="cta" @click.prevent="goTo('/contactame')" />
            </div>
        </div>
    </section>
</template>

<script setup>
import { useRouter } from 'vue-router';
// import img_home_HeroSection from '@/assets/images/img_home_HeroSection.jpg';
const router = useRouter();

const goTo = (section) => {
    router.push(section);
};
</script>