<template>
<aside class="aside-menu">
    <div class="aside-menu__logo-container">
        <Logo class="aside-menu__logo" />
    </div>
    <b-nav class="aside-menu__nav" vertical>
        <div class="aside-menu__nav-title">Меню</div>
        <b-nav-item class="aside-menu__nav-item">Панель</b-nav-item>
        <b-nav-item class="aside-menu__nav-item">Расширения</b-nav-item>
        <b-nav-item class="aside-menu__nav-item">Дизайн</b-nav-item>
        <b-nav-item class="aside-menu__nav-item">Продажи</b-nav-item>
        <b-nav-item class="aside-menu__nav-item">Покупатели</b-nav-item>
        <b-nav-item class="aside-menu__nav-item">Маркетинг</b-nav-item>
        <b-nav-item class="aside-menu__nav-item last-sistem">Система</b-nav-item>

        <div class="aside-menu__nav-title">Поддержка</div>
        <b-nav-item class="aside-menu__nav-item">Нужна помощь?</b-nav-item>
        <b-nav-item class="aside-menu__nav-item">Контакты</b-nav-item>

        <div class="aside-menu__nav-title">Setting</div>
        <b-nav-item class="aside-menu__nav-item">Настройка</b-nav-item>
        <b-nav-item class="aside-menu__nav-item">Тема</b-nav-item>
        <b-nav-item class="aside-menu__nav-item">Выйти</b-nav-item>

    </b-nav>
</aside>
</template>

<script>
import Logo from './Logo'

export default {
    name: 'Nav',
    components: {
        Logo
    }
}
</script>

<style lang="scss" scoped>
.aside-menu {
    background: #1e2933;
    color: #fff;
    // height: 100vh;
}
.aside-menu__logo-container {
    display: flex;
    justify-content: center;
    padding: 20px 40px 30px 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.096);
}
.aside-menu__nav {
    padding: 20px 20px;
}
.aside-menu__nav-title {
    margin-left: 15px;
    padding: 20px 0;
    opacity: 0.5;
}
.last-sistem {
    margin-bottom: 60px;
}
.aside-menu__nav-item {
    // padding: 5px 0;

    .nav-link {
    color: whitesmoke;
    }

    &:hover {
    border-radius: 4px;
    background: rgba(255, 255, 255, 0.096);
    }
}
</style>