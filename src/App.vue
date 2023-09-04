<template>
    <div class="body-container">
        <Header />

        <div class="container">
            <Main />
        </div>

        <Footer />
    </div>
</template>

<script lang="ts">
import Header from "./components/header.vue";
import Footer from "./components/footer.vue";
import Main from "./pages/main.vue";

export default {
    components: {
        Header,
        Footer,
        Main,
    },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Lexend:wght@200;400&display=swap");
@font-face {
    font-family: "Futura PT";
    src: url("./fonts/FuturaPT-Light.woff");
}

:root {
    --main-color: #110a1d;
    --main-blue: #478bf9;
}

body {
    margin: 0;
    padding: 0;

    background-color: var(--main-color);
    font-family: Lexend, sans-serif;
    font-weight: 200;

    .body-container {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
    }
}

.container {
    flex: 1;
    height: 100%;
    margin: 128px 140px 30px 140px;
}

@media (max-width: 1680px) {
    .container {
        margin: 128px 100px 30px 100px;
    }
}

@media (max-width: 1400px) {
    .container {
        margin: 128px 50px 30px 50px;
    }
}

@media (max-width: 1200px) {
    .container {
        margin: 128px 20px 30px 50px;
    }
}

@media (max-width: 767px) {
    .container {
        margin: 110px 20px 30px 20px;
    }
}
</style>
