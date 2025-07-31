<template>
    <section class="projectsSection">
        <div class="conteiner">
            <div class="title colorBlue boldItalic slide-in-left">
                <h2>Proyectos</h2>
            </div>
            <div class="content slide-in-right">
                <Carousel :value="projects" :numVisible="3" :numScroll="1" :responsiveOptions="responsiveOptions"
                    circular>
                    <template #item="{ data }">
                        <div class="project-item">
                            <Card class="card">
                                <template #header>
                                    <img alt="project image" :src="data.image" class="cardImage" />
                                </template>
                                <template #title>
                                    <span class="paragraph medium cardTitle">{{ data.title }}</span>
                                </template>
                            </Card>
                        </div>
                    </template>
                </Carousel>
            </div>
            <div class="button paragraph">
                <Button label="Ver más" class="cta" icon="pi pi-arrow-right" iconPos="right" />
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'
import img1 from '@/assets/images/imgProject1.jpg'
import img2 from '@/assets/images/imgProject2.jpg'
import img3 from '@/assets/images/imgProject3.jpg'

const projects = ref([
    {
        id: 1,
        title: 'Sitio Web Informativo para Negocio',
        image: img1,
        description: 'Desarrollo de sitio web corporativo con diseño responsive y optimización SEO',
        technologies: ['Vue.js', 'CSS3', 'JavaScript']
    },
    {
        id: 2,
        title: 'Sistema Web para Gestionar Voluntariados',
        image: img2,
        description: 'Plataforma web para coordinación y gestión de actividades de voluntariado',
        technologies: ['Vue.js', 'Node.js', 'MySQL']
    },
    {
        id: 3,
        title: 'Sistema Web para Aula Virtual',
        image: img3,
        description: 'Sistema de gestión de aprendizaje con funcionalidades interactivas',
        technologies: ['Vue.js', 'Express.js', 'MongoDB']
    }
])

const responsiveOptions = ref([
    {
        breakpoint: '480px',
        numVisible: 1,
        numScroll: 1
    }
])
</script>