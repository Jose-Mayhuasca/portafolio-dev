<template>
    <section class="navbarSection">
        <div class="conteinerNavbar">
            <Menubar :model="items" class="navbar regular superSmall" />
        </div>
    </section>
</template>

<script setup>
import { ref } from "vue";

const items = ref([
    {
        label: 'Inicio',
        icon: 'pi pi-home'
    },
    {
        label: 'Sobre Mi',
        icon: 'pi pi-star'
    },
    {
        label: 'Proyectos',
        icon: 'pi pi-search'
    },
    {
        label: 'Contacto',
        icon: 'pi pi-envelope'
    }
]);
</script>
