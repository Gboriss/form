<template>
  <div class="user-panel">
    <div class="user-panel__profile">
      John Doe
    </div>
    <b-avatar variant="primary" class="user-panel__user-photo"></b-avatar>
  </div>
</template>

export default {
    name: 'UserPanel',
}

<style lang="scss" scoped>
  .user-panel {
    display: flex;
    align-items: center;
    padding: 10px;
  }
  .user-panel__profile {
    margin: 0 10px;
  }
</style>