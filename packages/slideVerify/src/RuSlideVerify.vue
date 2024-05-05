<template>
  <!-- 容器初始背景 -->
  <div ref="dragContainer" id="ru-slide-dragContainer">
    <div ref="dragBg" id="ru-slide-dragBg" :style="{
      'width': `${configOption.dragOffset}px`
    }"></div>
    <div id="ru-slide-dragText">{{ configOption.dragText }}</div>
    <div 
      ref="dragHandler" 
      id="ru-slide-dragHandler" 
      class="ru-slide-dragHandlerBg"
      @mousedown.native="onDragHandlerMouseDown"
      @mousemove.native="onDragHandlerMouseMove"
      @mouseup.native="onDragHandlerMouseUp"

      :style="{
        'background-image' : `url(${configOption.bgImg})` ,
        'left': `${configOption.dragOffset}px`
      }"
      ></div>
  </div> 
</template>

<script setup>
import { ref, onMounted, onUnmounted, reactive } from 'vue'
const props = defineProps({
  defBgImg: {
    type: String,
		default: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAAAXNSR0IArs4c6QAAAS1JREFUOE+l1MFKw0AQBuB/9iB9FaF48yr4EK6XeIkH8aDQmfGgl5ReFGp60YN4aCHUS/s0sehLCD5BYSXBrElrtUlyWRiGjw3z79D9KHaAGyhrhO9vmiQTB+ySMWEQBO9F/XWxcCCa73W7tqitnjSMh30iEwF0p8zXWUOSJEcEzAh4gzG2QNM07ZMx0V8oZUCBOofRlYi0QXOwjBLwKCwXTVEPllHAPSvrWRO0AlZRmihzWBddAyuow4uKBHXQX8EVdK4ieUzK099ZLg9tGH5kdT99YPw/CJop8/Ea2OkcWGs/twKLGBEwFZaTVr/sg04Ya09O62BZ74bY0JMyn9fFKqC/mXMPKnrZBPPgz3t2sbJqUywH/QAIt9KTmzZYDm5aXwD2y5sma95mfX0BYJMJSn0uKqkAAAAASUVORK5CYII='
  },
  succBgImg: {
    type: String,
		default: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAATRJREFUOE9jZKAQMKLr91wfoMzEyJjNyPDPk+E/owZYnvH/jf8MTNv//f8/dXvghrvIelAM8FkXmMrA+H8WXkf9Z0zbErR+NkwN3ACiNMN0IRkCNgDkbGYGhjuEgkNbWpTh6tPXYGV/GRhUQN4BG+C9IbCP8f//QnwGqEkIM0RZ6DKsPn0VbMh/Rsb+rQHri8AG+Gzwvw4PMCymKIoKgjXfevEWbAAsYLcEbNSEGLA+4D+yPg1JEYYbz9+AhWSE+BiiLXQZ7r3+gNAMVbwlcAMjhgGhptoMGpLCDPMOX2D4++8f2ObH7z5haAaZgTAAzQsgQ2QEeRn+/PvP8OLjF6yaQWkD7gVsgQgyBATgfkYLG5RAJDYakc1AiUZwQBKTCnElJJg4UYbgSsowQyjKTISSMjZ5AEgPmhGvWfhnAAAAAElFTkSuQmCC'
  },
  defBgColor: {
    type: String,
		default: '#e8e8e8'
  },
  succBgColor: {
    type: String,
		default: '#7ac23c'
  },
})
defineOptions({
  name: "RuSlideVerify"
})

const dragContainer = ref(null)
const dragBg = ref(null)
const dragHandler = ref(null)

const configOption = reactive({
  dragText: "",
  bgImg: '',
  dragOffset: 10
})

const initDrag = () => {
  // maxHandleOffset.value = dragContainer.value.clientWidth - dragHandler.value.clientWidth
  configOption.dragText = "向右拖动"
  configOption.bgImg = props.succBgImg
}

const onDragHandlerMouseDown = (e) => {

}

const onDragHandlerMouseMove = (e) => {

}

const onDragHandlerMouseUp = () => {
  console.log("抬起了")
}

onMounted(() => {
  initDrag()
})

</script>

<style scoped>
#ru-slide-dragContainer {
  position: relative;
  display: inline-block;
  background: v-bind('props.defBgColor');
  width: 300px;
  height: 33px;
  border: 2px solid v-bind('props.defBgColor');
}

#ru-slide-dragBg{
  position: absolute;
  background-color: v-bind('props.succBgColor');
  width: 0px;
  height: 100%;
}
#ru-slide-dragText {
  position: absolute;
  width: 100%;
  height: 100%;
  text-align: center;
  line-height: 33px;
  user-select: none;
  --webkit-user-select: none;
}
#ru-slide-dragHandler {
  position: absolute;
  /* z-index: 100; */
  width: 40px;
  height: 100%;
  cursor: move;
}
.ru-slide-dragHandlerBg{
  background-color: #fff;
  background-repeat: no-repeat;
  background-position: center;
}

</style>