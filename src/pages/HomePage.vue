<script setup lang="ts">
import NavbarSection from '../components/HomeSections/NavbarSection.vue';
import HeroSection from '../components/HomeSections/HeroSection.vue';
import PresentationSection from '../components/HomeSections/PresentationSection.vue';
import AboutMeSection from '../components/HomeSections/AboutMeSection.vue';
import ProjectsSection from '../components/HomeSections/ProjectsSection.vue';
import ContactSection from '../components/HomeSections/ContactSection.vue';
import FooterSection from '../components/HomeSections/FooterSection.vue';
import TechnologiesSection from '../components/HomeSections/TechnologiesSection.vue';

</script>

<template>
    <NavbarSection />
    <div class="homepage">
        <HeroSection />
        <PresentationSection id="presentationSection" />
        <AboutMeSection id="aboutMeSection" />
        <TechnologiesSection />
        <ProjectsSection id="projectsSection" />
        <ContactSection id="contactSection" />
        <FooterSection />
    </div>
</template>

<style scoped>
.homepageContainer {
    width: 100%;
    height: auto;
}

.homepage {
    display: flex;
    flex-direction: column;
    gap: 7.875rem;
}
</style>
