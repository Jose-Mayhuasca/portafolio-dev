<template>
    <section class="projectsSection">
        <div class="conteiner">
            <!-- <div class="title colorBlue boldItalic slide-in-left"> -->
            <div class="title colorBlue bold">
                <h2>Proyectos</h2>
            </div>
            <!-- <div class="content slide-in-right"> -->
            <div class="content">
                <Carousel :value="projects" :numVisible="3" :numScroll="1" circular>
                    <template #item="{ data }">
                        <div class="project-item">
                            <!-- Card de proyecto normal -->
                            <Card v-if="!data.isCTA" class="card">
                                <template #header>
                                    <div :style="{ backgroundImage: `url(${data.image})` }" class="cardImage"></div>
                                </template>
                                <template #title>
                                    <span class="paragraph semiBold cardTitle">{{ data.title }}</span>
                                </template>
                                <template #content>
                                    <div class="technologies">
                                        <div class="item" v-for="item in data.technologies" :key="item">
                                            <span class="superSmall regular">{{ item }}</span>
                                        </div>
                                    </div>
                                    <span class="superSmall light cardDescription">{{ data.description }}</span>
                                </template>
                                <template #footer>
                                    <Button fluid label="Ver Proyecto" />
                                </template>
                            </Card>

                            <!-- Card CTA para ver todos los proyectos -->
                            <Card v-else class="card seeMore" @click.prevent="goTo('/proyectos')">
                                <!-- <template #title>
                                    <span class="paragraph semiBold cardTitle colorBlue">Ver Todos los Proyectos</span>
                                </template> -->
                                <template #content>
                                    <h2 class="black">Ver <span class="colorYellow">+</span> <br> Proyectos <br> <span
                                            class="colorYellow">→</span></h2>
                                </template>
                            </Card>
                        </div>
                    </template>
                </Carousel>
            </div>
            <!-- <div class="button paragraph">
                <Button label="Ver más" @click.prevent="goTo('/proyectos')" class="cta" icon="pi pi-arrow-right"
                    iconPos="right" />
            </div> -->
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import img1 from '@/assets/images/img_home_ProjectSection_1.avif'
import img2 from '@/assets/images/img_home_ProjectSection_2.jpg'
import img3 from '@/assets/images/img_home_ProjectSection_3.avif'

const router = useRouter();

const projects = ref([
    {
        id: 1,
        image: img1,
        title: 'Sitio Web Informativo para Restaurante',
        technologies: ['Vue.js', 'PrimeVue', 'TypeScript', 'JavaScript', 'HTML', 'Sass'],
        description: 'Landing page moderna y altamente performante para el sector gastronómico. Combina animaciones fluidas con CSS nativo y la reactividad de Vue 3 para destacar la identidad visual de la marca.',
    },
    {
        id: 2,
        image: img2,
        title: 'Sistema Web para Gestionar Voluntariados',
        description: 'Sistema web integral que simplifica la logística del voluntariado. Ofrece dashboards interactivos para coordinadores y un portal de autogestión para los voluntarios, facilitando la comunicación y la organización de eventos.',
        technologies: ['Vue.js', 'Node.js', 'MySQL']
    },
    {
        id: 3,
        title: 'Sistema Web para Aula Virtual',
        image: img3,
        description: 'Sistema de administración de contenidos (CMS) educativo. Permite el control total del catálogo de cursos (silabo, costos y promociones), la gestión de la plana docente y la conciliación financiera mediante un módulo de verificación de comprobantes de pago.',
        technologies: ['Vue.js', 'Express.js', 'MongoDB']
    },
    {
        id: 4,
        isCTA: true // Marca este elemento como la card CTA
    }
])

const responsiveOptions = ref([
    {
        breakpoint: '480px',
        numVisible: 1,
        numScroll: 1
    }
])

const goTo = (page) => {
    router.push(page)
};
</script>