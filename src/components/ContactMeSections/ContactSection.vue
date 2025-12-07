<template>
    <section class="contactSection">
        <div class="containerContact">
            <div class="title">
                <h2 class="bold colorBlue">Contacto Directo</h2>
            </div>
            <div class="content">
                <div class="gridContainer superSmall semiBol colorWhite">
                    <div @click="openGmail" rel="noopener noreferrer" class="item" style="grid-column: span 2;">
                        <i class="pi pi-at"></i>
                        <p>E-mail</p>
                    </div>
                    <div @click="openWhatsapp" rel="noopener noreferrer" class="item">
                        <i class="pi pi-whatsapp"></i>
                        <p>WhatsApp</p>
                    </div>
                    <div @click="openLinkedin" rel="noopener noreferrer" class="item">
                        <i class="pi pi-linkedin"></i>
                        <p>LinkedIn</p>
                    </div>
                    <div @click="openGithub" rel="noopener noreferrer" class="item">
                        <i class="pi pi-github"></i>
                        <p>GitHub</p>
                    </div>
                    <div @click="openInstagram" rel="noopener noreferrer" class="item">
                        <i class="pi pi-instagram"></i>
                        <p>Instagram</p>
                    </div>
                </div>
                <div class="phaseContainer colorWhite">
                    <h2 class="regularItalic">Cada gran proyecto empieza con una conversación.</h2>
                    <h2 class="regularItalic">Esta puede ser la primera.</h2>
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
