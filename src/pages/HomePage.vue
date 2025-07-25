<script setup lang="ts">
import NavbarSection from '../components/HomeSections/NavbarSection.vue';
import HeroSection from '../components/HomeSections/HeroSection.vue';
import PresentationSection from '../components/HomeSections/PresentationSection.vue';
import AboutMeSection from '../components/HomeSections/AboutMeSection.vue';
import TecnologiesSection from '../components/HomeSections/TecnologiesSection.vue';
import ProjectsSection from '../components/HomeSections/ProjectsSection.vue';
import ContactSection from '../components/HomeSections/ContactSection.vue';
import FooterSection from '../components/HomeSections/FooterSection.vue';

</script>

<template>
    <NavbarSection />
    <div style="display: flex; flex-direction: column; gap: 7.875rem;">
        <HeroSection />
        <PresentationSection />
        <AboutMeSection />
        <TecnologiesSection />
        <ProjectsSection />
        <ContactSection />
        <FooterSection />
    </div>
</template>
