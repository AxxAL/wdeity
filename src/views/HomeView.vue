<script setup lang="ts">

</script>

<template>
    <div class="background-image">
        <div class="overhead is-flex is-flex-direction-column is-align-items-center">
            <img class="header-logo" src="/images/logo/logo.svg" alt="Band Logo">
            <div class="text-section px-6 is-flex is-flex-direction-column is-align-items-center">
                <h1 class="has-text-white is-size-1">Blessed be the souls of the wicked!</h1>
                <h2 class="has-text-white is-size-3">All hail the wretched deity!</h2>
                <p class="has-text-white has-text-centered is-size-5 px-6 pb-6">
                    Formed on a whim In the summer of 2022, the original members gathered from the dark depths and obscure corners of Stockholm and united to form what would become Wretched Deity.
                    Birthed from the south of Stockholm, now located in Uppsala, the 4-man ensammble smashes forth with their heavy, melodic, and dynamic songs inspired by classic death metal bands like Unleashed, Entombed and Dismember.
                </p>
            </div>
        </div>
    </div>
</template>

<style>
p, h1, h2 {
    font-family: "dearest";
}
.background-image {
    background-image: url("/images/photos/Uppsala_Soffa.jpg");
    background-size: cover;
    background-attachment: fixed;
}
.text-section {
    background-color: black;
    height: 600px;
}
</style>