<script setup></script>

<template>
    <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/contact">Contact</router-link>
    </nav>
    <router-view v-slot="{ Component }">
        <keep-alive :exclude="['about']">
            <component :is="Component"></component>
        </keep-alive>
    </router-view>
</template>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

a {
    text-decoration: none;
}

nav {
    padding: 30px;
}

nav a {
    padding: 10px;
    font-weight: bold;
    color: #2c3e50;
}

nav a.router-link-exact-active {
    color: #42b983;
}
</style>
