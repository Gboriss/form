<template>
    <div class="logo">
        <div class="logo__background-circle"></div>
        <div class="logo__sub-circle">F</div>
        <div class="logo__brand">Fort</div>
        <div class="logo__substring">EComm</div>
    </div>
</template>

<script>
export default {
    name: 'Logo',
}
</script>
<style lang="scss" scoped>
.logo__background-circle {
    position: absolute;
    background: black;
    height: 80px;
    width: 80px;
    border-radius: 50%;
    margin-top: 15px;
    margin-left: 80px;
}
.logo__sub-circle {
    position: absolute;
    background: white;
    color: black;
    height: 22px;
    width: 22px;
    border-radius: 50%;
    text-align: center;
    font-weight: bold;
    margin-top: 22px;
    margin-left: 158px;
}
.logo__brand {
    position: relative;
    letter-spacing: 4px;
    font-size: 4em;
    font-weight: bold;
}
.logo__substring {
    position: absolute;
    margin-top: -30px;
    margin-left: 3px;
    font-size: 1.6em;
    font-weight: bold;
    color: aquamarine;
    letter-spacing: 1px;
}
</style>