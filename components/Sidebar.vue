<template>
    <div class="space-y-4 py-4 flex-col flex h-full bg-white shadow-sm border-r">
        <div class="px-3 py-4 flex-1">
            <nuxt-link class="flex items-center pl-3 mr-4 mb-14" to="/">
                <div class="relative h-8 w-8 mr-4">
                    <img src="../public/logo.svg" alt="Logo">
                </div>
                <h1 class="text-2xl font-bold">MultiGenX</h1>
            </nuxt-link>
            <div class="space-y-1">
                <nuxt-link v-for="item in dashboardLink"
                            :key="item.link"
                            :to="item.link"
                            class="text-sm group text-primary flex p-3 w-full justify-start font-medium cursor-pointer rounded-lg transition hover:bg-muted"
                            :class="{'bg-muted': currentRoute.path === item.link}">
                <div class="flex items-center flex-1">
                    <Icon :name="item.icon" :class="`h-5 w-5 mr-3 ${item.color}`" />
                    {{ item.label }}
                </div>
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    const currentRoute = useRoute();
</script>

<style scoped>

</style>