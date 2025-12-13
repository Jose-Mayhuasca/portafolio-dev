<template>
    <section class="projectsSection">
        <div class="conteiner">
            <!-- <div class="title colorBlue boldItalic slide-in-left"> -->
            <div class="title colorBlue bold">
                <h2>Proyectos</h2>
            </div>
            <!-- <div class="content slide-in-right"> -->
            <div class="content">
                <Carousel :value="projects" :numVisible="3" :numScroll="1" :responsiveOptions="responsiveOptions"
                    circular>
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
                                <!-- <template #footer>
                                    <Button fluid label="Ver Proyecto" />
                                </template> -->
                                <template #footer>
                                    <Button v-if="data.link" fluid label="Ver Proyecto"
                                        @click="() => openLink(data.link)" />
                                    <Button v-else fluid label="Ver Detalles" @click="visible = true" />
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
import img1 from '@/assets/images/img_projects_gallery_1.jpg'
import img2 from '@/assets/images/img_home_ProjectSection_2.jpg'
import img3 from '@/assets/images/img_home_ProjectSection_3.avif'

const router = useRouter();

const projects = ref([
    {
        id: 1,
        image: img1,
        title: 'Sistema Web para Gestion en Albergue de mascotas',
        technologies: ['Vue.js', 'C#', 'PostgreSQL', 'PrimeVue', 'JavaScript', 'HTML', 'Sass', 'TailwindCSS'],
        description: 'Solución tecnológica diseñada para optimizar la operatividad del albergue. Automatiza el proceso de adopción, permitiendo al equipo enfocarse en el cuidado animal.',
        link: 'https://alberguesanfrancisco.vercel.app/'
    },
    {
        id: 2,
        image: img2,
        title: 'Sistema Web para Gestionar Voluntariados',
        technologies: ['Vue.js', 'C#', 'SQL Server', 'Azure', 'HTML', 'CSS', 'JavaScript', 'TailwindCSS'],
        description: 'Sistema web integral que simplifica la logística del voluntariado. Ofrece dashboards interactivos para coordinadores y un portal de autogestión para los voluntarios, facilitando la comunicación y la organización de eventos.',
        link: 'https://www.mycausaviva.tech/'
    },
    {
        id: 3,
        title: 'Sistema Web CMS para Aula Virtual',
        image: img3,
        technologies: ['Vue.js', 'C#', 'SQL Server', 'PrimeVue', 'JavaScript', 'HTML', 'Sass', 'TailwindCSS '],
        description: 'Sistema de administración de contenidos (CMS) educativo. Permite el control total del catálogo de cursos (silabo, costos y promociones), la gestión de la plana docente y la conciliación financiera mediante un módulo de verificación de comprobantes de pago.'
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

function openLink(urlrequested) {
    const url = urlrequested;
    window.open(url, '_blank');
}

const goTo = (page) => {
    router.push(page)
};
</script>