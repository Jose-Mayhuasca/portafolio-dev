<template>
    <section class="navbarSection ">
        <div class="conteinerNavbar">
            <Menubar :model="items" class="navbar regular superSmall" />
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

// const activeSection = ref('presentationSection');

// const smoothScroll = (id) => {
//     const target = document.querySelector(id);
//     const navbarHeight = document.querySelector('.conteinerNavbar').offsetHeight;
//     if (target) {
//         window.scrollTo({
//             top: target.offsetTop - navbarHeight,
//             behavior: 'smooth'
//         });
//     }
// };

// const updateActiveSection = (sectionId) => {
//     activeSection.value = sectionId;
//     // Actualizar las clases activas en el DOM
//     updateMenuItemClasses();
// };

// const updateMenuItemClasses = () => {
//     // Remover todas las clases activas
//     document.querySelectorAll('.p-menubar-item-content').forEach(item => {
//         item.classList.remove('active');
//     });

//     // Agregar clase activa al item correspondiente
//     const menuItems = document.querySelectorAll('.p-menubar-item-content');
//     const sectionIndex = getSectionIndex(activeSection.value);

//     if (menuItems[sectionIndex]) {
//         menuItems[sectionIndex].classList.add('active');
//     }
// };

// const getSectionIndex = (sectionId) => {
//     const sections = {
//         'presentationSection': 0,
//         'aboutMeSection': 1,
//         'projectsSection': 2,
//         'contactSection': 3
//     };
//     return sections[sectionId] || 0;
// };

const items = ref([
    {
        label: 'Inicio',
        icon: 'pi pi-home',
        command: () => {
            router.push('/');
        }
    },
    {
        label: 'Sobre Mi',
        icon: 'pi pi-star',
        command: () => {
            router.push('/sobre-mi');
        }
    },
    {
        label: 'Proyectos',
        icon: 'pi pi-search',
        command: () => {
            router.push('/proyectos');
        }
    },
    {
        label: 'Contáctame',
        icon: 'pi pi-envelope',
        command: () => {
            router.push('/contactame');
        }
    }
]);

// let observer = null;

// onMounted(() => {
//     // Configurar Intersection Observer para detectar secciones visibles
//     const observerOptions = {
//         root: null,
//         rootMargin: '-20% 0px -60% 0px',
//         threshold: 0
//     };

//     observer = new IntersectionObserver((entries) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 const sectionId = entry.target.id;
//                 updateActiveSection(sectionId);
//             }
//         });
//     }, observerOptions);

//     // Observar todas las secciones
//     const sections = document.querySelectorAll('#presentationSection, #aboutMeSection, #projectsSection, #contactSection');
//     sections.forEach(section => {
//         if (section) {
//             observer.observe(section);
//         }
//     });

//     // Establecer el estado inicial después de que el DOM esté listo
//     setTimeout(() => {
//         updateMenuItemClasses();
//     }, 100);
// });

// onUnmounted(() => {
//     if (observer) {
//         observer.disconnect();
//     }
// });
</script>
