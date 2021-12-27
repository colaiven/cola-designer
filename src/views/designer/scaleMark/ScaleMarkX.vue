<template>
  <div style="width: 100%;height: 100%;">
    <table cellpadding="0" cellspacing="0" style="width: 100%;height: 100%">
      <tr>
        <td v-for="item in 24" :key="'scaleX'+item" :class="item === 1 ? 'bothBorder':'rightBorder'">
          <div style="height: 50%;"></div>
          <div style="width: 100%;height: 50%;">
            <table cellpadding="0" cellspacing="0" style="width: 100%;height: 100%;">
              <tr>
                <td class="rightBorder"/>
                <td class="rightBorder"/>
                <td class="rightBorder"/>
                <td class="rightBorder"/>
                <td style="border-right: 1px solid transparent"/>
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
  name: "ScaleMarkX"
}
</script>

<style scoped>
.rightBorder{border-right: 1px solid #2b3340;}
.bothBorder{border-left: 1px solid #2b3340;border-right: 1px solid #2b3340;}
</style>
