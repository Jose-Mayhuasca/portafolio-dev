<template>
    <section class="navbarSection ">
        <div class="conteinerNavbar">
            <Menubar :model="items" class="navbar regular superSmall" />
        </div>
    </section>
</template>

<script setup>
import { ref, watch } from "vue";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();

const items = ref([
    {
        label: 'Inicio',
        icon: 'pi pi-home',
        path: '/',
        command: () => {
            router.push('/');
        }
    },
    {
        label: 'Sobre Mi',
        icon: 'pi pi-star',
        path: '/sobre-mi',
        command: () => {
            router.push('/sobre-mi');
        }
    },
    {
        label: 'Proyectos',
        icon: 'pi pi-search',
        path: '/proyectos',
        command: () => {
            router.push('/proyectos');
        }
    },
    {
        label: 'Contáctame',
        icon: 'pi pi-envelope',
        path: '/contactame',
        command: () => {
            router.push('/contactame');
        }
    }
]);

const updateActiveState = () => {
    const currentPath = route.path;
    items.value.forEach(item => {
        // Lógica de coincidencia:
        // Para home ('/'), debe ser coincidencia exacta.
        // Para otras rutas, usamos startsWith para cubrir sub-rutas (ej: /proyectos/detalle)
        const isActive = item.path === '/'
            ? currentPath === '/'
            : currentPath.startsWith(item.path);

        item.class = isActive ? 'active-route' : '';
    });
};

// Observar cambios en la ruta
watch(
    () => route.path,
    () => {
        updateActiveState();
    },
    { immediate: true }
);
</script>
