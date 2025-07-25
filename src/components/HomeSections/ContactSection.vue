<script setup lang="ts">
import { Textarea } from 'primevue';

</script>

<template>
    <section class="contactSection">
        <div class="conteiner">
            <div class="title colorBlue boldItalic">
                <h2>Contactame</h2>
            </div>
            <div class="content">
                <div class="videoConteiner">
                    <video autoplay loop muted class="video">
                        <source src="/src/assets/videos/bgContactHome.mp4" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div class="formConteiner">
                    <div class="form paragraph medium">
                        <div class="name">
                            <label for="username">Nombre</label>
                            <InputText placeholder="Escribe tu nombre completo" class="regularItalic" />
                        </div>
                        <div class="email">
                            <label for="email">Email</label>
                            <InputText placeholder="Ejemplo@email.com" class="regularItalic" />
                        </div>
                        <div class="subject">
                            <label for="subject">Asunto</label>
                            <InputText placeholder="Escribe el asunto" class="regularItalic" />
                        </div>
                        <div class="message">
                            <label for="message">Mensaje</label>
                            <Textarea placeholder="Escribe tu mensaje" class="regularItalic" />
                        </div>
                    </div>
                    <div class="button paragraph">
                        <Button label="Enviar Mensaje" icon="pi pi-send" class="cta" />
                    </div>

                </div>
            </div>
        </div>
    </section>
</template>