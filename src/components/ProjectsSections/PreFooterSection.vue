<template>
    <section class="preFooterSection">
        <div class="containerPreFooter">
            <div class="content">
                <h2 class="extraBold colorWhite">¿COLABORAMOS?</h2>
                <h3 class="regularItalic colorWhite">Mis proyectos son solo el comienzo. <br>
                    Juntos podemos crear soluciones digitales únicas, funcionales y con un diseño que marque la
                    diferencia.</h3>
                <Button @click="goToContact" label="Contáctame" class="cta regularItalic" />
            </div>
        </div>
    </section>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const goToContact = () => {
    router.push('/contactame');
};

</script>