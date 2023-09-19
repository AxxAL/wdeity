<script setup lang="ts">
import ShopItemCard from '@/components/ShopItemCard.vue';
import type { Item } from "@/types";

const items: Item[] = [];

const itemCount = 13;
for (let i = 0; i < itemCount; i++) {
    items.push({
        id: 1,
        title: "T-shirt",
        price: 200,
        stock: {
            xlarge: 5,
            large: 10,
            medium: 10,
            small: 5
        }
    });
}
</script>
    
<template>
    <div class="p-6 mt-4 is-flex is-flex-direction-row is-justify-content-space-evenly is-flex-wrap-wrap">
        <ShopItemCard style="width: 20rem;" class="mb-4" v-for="item in items" :item="item" />
    </div>
</template>
    
<style>
html {
    background-color: hsl(0, 0%, 10%);
}
</style>