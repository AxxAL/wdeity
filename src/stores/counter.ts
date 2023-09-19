import { List, type Item } from "@/types";
import { defineStore } from "pinia";
import { ref } from "vue";

export const itemStore = defineStore("itemStore", () => {
  const items = ref(new List<Item>());

  function all(): Item[] {
    return items.value.All;
  }

});