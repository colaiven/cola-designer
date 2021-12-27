<template>
  <div style="width: 100%;height: 100%;">
    <table cellpadding="0" cellspacing="0" style="width: 100%;height: 100%">
      <tr v-for="item in 12" :key="'scaleY'+item">
        <td :class="item === 1 ? 'bothBorder':'bottomBorder'">
          <div style="width: 50%;height: 100%;float: left"></div>
          <div style="width: 50%;height: 100%;float: right;">
            <table cellpadding="0" cellspacing="0" style="width: 100%;height: 100%">
              <tr v-for="item in 4" :key="item">
                <td class="bottomBorder"></td>
              </tr>
              <tr>
                <td style="border-bottom: 1px solid transparent"></td>
              </tr>
            </table>
          </div>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "ScaleMarkY"
}
</script>

<style scoped>
.bothBorder{border-bottom: 1px solid #2b3340;border-top: 1px solid #2b3340;}
.bottomBorder{border-bottom: 1px solid #2b3340;}
</style>
