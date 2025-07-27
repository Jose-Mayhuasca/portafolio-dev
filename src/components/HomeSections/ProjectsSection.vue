<template>
    <section class="projectsSection">
        <div class="conteiner">
            <div class="title colorBlue boldItalic slide-in-left">
                <h2>Proyectos</h2>
            </div>
            <div class="content slide-in-right">
                <Card class="card">
                    <template #header>
                        <img alt="user header" src="/src/assets/images/imgProject1.jpg" class="cardImage" />
                    </template>
                    <template #title>
                        <span class="paragraph medium cardTitle">Sitio Web Informativo para Negocio</span>
                    </template>
                </Card>
                <Card class="card">
                    <template #header>
                        <img alt="user header" src="/src/assets/images/imgProject2.jpg" class="cardImage" />
                    </template>
                    <template #title>
                        <span class="paragraph medium cardTitle">Sistema Web para Gestionar Voluntariados</span>
                    </template>
                </Card>
                <Card class="card">
                    <template #header>
                        <img alt="user header" src="/src/assets/images/imgProject3.jpg" class="cardImage" />
                    </template>
                    <template #title>
                        <span class="paragraph medium cardTitle">Sistema Web para Aula Virtual</span>
                    </template>
                </Card>
            </div>
            <div class="button paragraph">
                <Button label="Ver más" class="cta" icon="pi pi-arrow-right" iconPos="right" />
            </div>
        </div>
    </section>
</template>