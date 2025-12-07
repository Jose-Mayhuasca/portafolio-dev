<template>
    <section class="technologiesSection">
        <div class="container">
            <div class="bold colorBlue">
                <h2>Stack de Tecnologías</h2>
            </div>
            <div class="technologies-container">
                <div class="technologies">
                    <div v-for="(tech, index) in technologies" :key="index" class="technology">
                        <component :is="getIconComponent(tech.icon)" class="icon-svg" />
                        <span class="paragraph">{{ tech.name }}</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, defineAsyncComponent, computed } from 'vue';

const getIconComponent = (name) => {
    return defineAsyncComponent(() => import(`../../assets/icons/${name}.vue`));
}

const technologies = ref([
    { name: 'HTML', icon: 'html' },
    { name: 'CSS', icon: 'css-icon' },
    { name: 'JavaScript', icon: 'js-icon' },
    { name: 'TypeScript', icon: 'typescript-icon' },
    { name: 'Vue.js', icon: 'vue-icon' },
    { name: 'PrimeVue', icon: 'primevue-icon' },
    { name: 'Sass', icon: 'sass-icon' },
    { name: 'Tailwind', icon: 'tailwind-icon' },
    { name: 'SQL Server', icon: 'sqlserver-icon' },
    { name: 'Git', icon: 'git-icon' },
    { name: 'GitHub', icon: 'github-icon' },
    { name: 'Npm', icon: 'npm-icon' },
    // { name: 'Vite', icon: 'vite-icon' }
]);

// const doubledTechnologies = computed(() => {
//     return [...technologies.value, ...technologies.value];
// });
</script>