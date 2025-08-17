<template>
    <section class="contactSection">
        <div class="conteiner">
            <div class="title colorBlue boldItalic slide-in-left">
                <h2>Contáctame</h2>
            </div>
            <div class="content colorBgContact slide-in-right">
                <div class="videoConteiner">
                    <video autoplay loop muted class="video">
                        <source src="/src/assets/videos/bgContactHome.mp4" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                </div>
                <!-- <div class="formConteiner">
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

                </div> -->
                <div class="optionsContainer colorWhite semiBold">
                    <div class="option" @click="openGmail" rel="noopener noreferrer">
                        <div class="icon">
                            <i class="pi pi-at"></i>
                        </div>
                        <div class="text">
                            <a class="superSmall">E-mail</a>
                        </div>
                    </div>
                    <div class="option" @click="openWhatsapp" rel="noopener noreferrer">
                        <div class="icon">
                            <i class="pi pi-whatsapp"></i>
                        </div>
                        <div class="text">
                            <p class="superSmall">WhatsApp</p>
                        </div>
                    </div>
                    <div class="option" @click="openGithub" rel="noopener noreferrer">
                        <div class="icon">
                            <i class="pi pi-github"></i>
                        </div>
                        <div class="text">
                            <p class="superSmall">Github</p>
                        </div>
                    </div>
                    <div class="option" @click="openLinkedin" rel="noopener noreferrer">
                        <div class="icon">
                            <i class="pi pi-linkedin"></i>
                        </div>
                        <div class="text">
                            <p class="superSmall">LinkedIn</p>
                        </div>
                    </div>
                    <div class="option" @click="openInstagram" rel="noopener noreferrer">
                        <div class="icon">
                            <i class="pi pi-instagram"></i>
                        </div>
                        <div class="text">
                            <p class="superSmall">Instagram</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
function openGmail() {
    const email = 'mayhuascaperezjose@gmail.com';
    const subject = 'Contacto';
    const body = 'Hola José, me interesa tu trabajo.';
    const url = `https://mail.google.com/mail/?view=cm&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(url, '_blank');
}

function openWhatsapp() {
    const phoneNumber = '51951703662';
    const message = 'Hola José, me interesa tu trabajo.';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

function openGithub() {
    const url = 'https://github.com/Jose-Mayhuasca';
    window.open(url, '_blank');
}

function openLinkedin() {
    const url = 'https://www.linkedin.com/in/josedmayhuasca/';
    window.open(url, '_blank');
}

function openInstagram() {
    const url = 'https://www.instagram.com/josedmayhuasca/';
    window.open(url, '_blank');
}

</script>
