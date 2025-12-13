<template>
    <section class="preFooterSection">
        <div class="containerPreFooter">
            <div class="content">
                <h2 class="extraBold colorWhite">DE UNA IDEA A LA PANTALLA</h2>
                <h3 class="regular colorWhite">¿Hacemos tu proyecto <span
                        style="text-decoration: underline wavy turquoise;">realidad</span>?</h3>
                <Button @click="goToContact" label="Contáctame" class="cta bold" />
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