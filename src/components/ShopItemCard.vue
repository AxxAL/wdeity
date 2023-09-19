<script setup lang="ts">
import { RouterLink } from 'vue-router'

defineProps<{
    item: {
        id: number,
        title: string,
        price: number,
        stock: {
            xlarge: number,
            large: number,
            medium: number,
            small: number
        }
    }
}>();

</script>

<template>
    <div class="card">
        <img class="card-img-top" src="/images/shop/wd_shirt1.png" style="border-radius: 12px;">
        <div class="card-body p-2">
            <h5 class="card-title typewriter-font">{{ item.title }}</h5>
            <p class="card-text typewriter-font">{{ item.price }} SEK</p>
        </div>
        <footer class="card-footer">
            <RouterLink to="#" class="card-footer-item typewriter-font">View</RouterLink>
            <RouterLink to="#" class="card-footer-item typewriter-font">Add to cart</RouterLink>
        </footer>
    </div>
</template>