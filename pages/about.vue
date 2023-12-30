<template>
    <div>
        <h2>About</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur recusandae sunt labore, aperiam hic amet
            pariatur odio saepe placeat, nesciunt quia exercitationem reiciendis. Cupiditate delectus distinctio quidem
            vero, quasi numquam.
        </p>
        <div>{{ data }}</div>
    </div>
</template>

<script setup>
const { data } = await useFetch('/api/currency/GBP')
</script>

<style scoped>
h2 {
    margin-bottom: 20px;
    font-size: 36px;
}


p {
    margin: 20px 0;
}</style>