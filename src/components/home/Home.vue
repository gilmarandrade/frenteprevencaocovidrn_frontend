<template>
    <div class="home">
        <PageTitle icon="fa fa-home" main="Home" sub="Bem vindo a home" />
        <ul>
            <li>
                <router-link to="/googlesheets/idosos">Idosos Spreadsheet</router-link>
            </li>
            <li>
                <router-link to="/googlesheets/gerenciamento">Gerenciamento Spreadsheet</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import PageTitle from '../template/PageTitle'


export default {
    name: 'Home',
    components: { PageTitle },
}
</script>

<style>
    .stats {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }

</style>