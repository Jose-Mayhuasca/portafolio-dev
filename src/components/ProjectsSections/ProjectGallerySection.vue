<template>
    <section class="projectGallerySection">
        <div class="projectGalleryContainer">
            <div class="title">
                <h2 class="bold colorBlue">Galeria de Proyectos</h2>
            </div>
            <div class="gridContainer colorWhite">
                <!-- <div class="item" style="grid-column: span 2;">
                    <img src="/src/assets/images/imgProject2.jpg" alt="Proyecto 1" class="imageBg">
                    <h4>Sistema Web para Gestion de Voluntariado</h4>
                </div>
                <div class="item">
                    <img src="/src/assets/images/imgProject1.jpg" alt="Proyecto 2" class="imageBg">
                    <h4>Sitio Web Institucional para Empresa</h4>
                </div>
                <div class="item">
                    <h4>Sitio Web para ... </h4>
                </div>
                <div class="item" style="grid-column: span 2;">
                    <img src="/src/assets/images/imgProject3.jpg" alt="Proyecto 3" class="imageBg">
                    <h4>Sistema Web para Aula Virtual</h4>
                </div> -->
                <Card v-for="project in projects" :key="project.id" class="card">
                    <template #header>
                        <div :style="{ backgroundImage: `url(${project.image})` }" class="cardImage"></div>
                    </template>
                    <template #title>
                        <span class="paragraph semiBold cardTitle">{{ project.title }}</span>
                    </template>
                    <template #content>
                        <div class="technologies">
                            <div class="item" v-for="item in project.technologies" :key="item">
                                <span class="superSmall regular">{{ item }}</span>
                            </div>
                        </div>
                        <span class="superSmall light cardDescription">{{ project.description }}</span>
                    </template>
                    <template #footer>
                        <Button v-if="project.link" fluid label="Ver Proyecto" @click="() => openLink(project.link)" />
                        <Button v-else fluid label="Ver Detalles" @click="visible = true" />
                    </template>
                </Card>
            </div>
        </div>

        <Dialog v-model:visible="visible" modal header="Visualización No Disponible">
            <p>El contenido visual y el acceso a este proyecto están protegidos por derechos de propiedad y
                confidencialidad.</p>
            <p>
                La descripción en mi portafolio refleja fielmente las tecnologías y metodologías que apliqué. Estoy
                disponible
                para profundizar en los aspectos de ingeniería y lógica de negocio de este proyecto durante nuestra
                conversación.
            </p>
            <div class="buttonsContainer">
                <Button label="Contactar" class="primary" @click="goContactMe()"></Button>
                <Button label="Cerrar" class="secondary" @click="visible = false"></Button>
            </div>
        </Dialog>

    </section>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import img1 from '@/assets/images/img_projects_gallery_1.jpg'
import img2 from '@/assets/images/img_home_ProjectSection_2.jpg'
import img3 from '@/assets/images/img_home_ProjectSection_3.avif'
import img4 from '@/assets/images/img_projects_gallery_4.jpg'
import img5 from '@/assets/images/img_home_ProjectSection_1.avif'

const visible = ref(false);
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
        title: 'Sitio Web Institucional',
        image: img4,
        technologies: ['Vue.js', 'PrimeVue', 'JavaScript', 'HTML', 'Sass'],
        description: 'Web institucional moderna, rápida y responsiva. Estructurada para comunicar claramente la propuesta de valor de la agencia, con secciones dinámicas de servicios y un blog optimizado.'
    },
    {
        id: 5,
        title: 'Sitio Web Informativo para Restaurante',
        image: img5,
        technologies: ['Vue.js', 'PrimeVue', 'TypeScript', 'HTML', 'Sass'],
        description: 'Landing page moderna y altamente performante para el sector gastronómico. Combina animaciones fluidas con CSS nativo y la reactividad de Vue 3 para destacar la identidad visual de la marca.'
    }
])

function openLink(urlrequested) {
    const url = urlrequested;
    window.open(url, '_blank');
}

const goContactMe = () => {
    visible.value = false;
    router.push('/contactame');
}

</script>