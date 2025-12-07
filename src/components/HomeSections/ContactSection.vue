<template>
    <section class="contactSection">
        <div class="conteiner">
            <!-- <div class="title colorBlue bold slide-in-left"> -->
            <div class="title colorBlue bold">
                <h2>Contáctame</h2>
            </div>
            <!-- <div class="content slide-in-right"> -->
            <div class="content">
                <div class="videoConteiner">
                    <video autoplay loop muted class="video">
                        <source src="/src/assets/videos/bgContactHome.mp4" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div class="optionsContainer colorWhite semiBold">
                    <div class="option double" @click="openGmail" rel="noopener noreferrer">
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
                    <div class="option" @click="openLinkedin" rel="noopener noreferrer">
                        <div class="icon">
                            <i class="pi pi-linkedin"></i>
                        </div>
                        <div class="text">
                            <p class="superSmall">LinkedIn</p>
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
