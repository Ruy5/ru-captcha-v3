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
  <!-- {{ configOption }} -->
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
  dragOffset: 0,
  clientX: 0,
  down: false,
  pass: false
})

const initDrag = () => {
  // maxHandleOffset.value = dragContainer.value.clientWidth - dragHandler.value.clientWidth
  configOption.dragText = "向右拖动"
  configOption.bgImg = props.defBgImg
  configOption.pass = false
  configOption.dragOffset = 0
}

// 按下
const onDragHandlerMouseDown = (e) => {
  if(configOption.pass) {
    return
  }
  configOption.dragOffset = 0
  configOption.clientX = e.clientX
  configOption.down = true
}

// 拖动
const onDragHandlerMouseMove = (e) => { 
  if(! configOption.down) {
    return
  }

  // 获取鼠标当前位置距离浏览器窗口左侧的距离
  const currentX = e.clientX
  // 计算鼠标当前位置相对于滑动容器左侧的距离
  const offset = (currentX - configOption.clientX) + configOption.dragOffset
  configOption.clientX = currentX
  // 确保滑块不超出容器范围
  if(offset > 0 && dragHandler.value.clientWidth + offset <= dragContainer.value.clientWidth) {
    configOption.dragOffset = offset
  }
  if(dragHandler.value.clientWidth + offset >= dragContainer.value.clientWidth) {
    onDragHandlerMouseUp()
  }

  // const containerRect = dragContainer.value.getBoundingClientRect()

  // console.log(`${containerRect.left} - ${containerRect.right} - ${containerRect.top} -${containerRect.bottom}`)
  // console.log(`${e.clientX} - ${e.clientX} - ${e.clientY} -${e.clientY}`)
  // // 检查鼠标是否超出容器的边界
  // if (
  //   e.clientX <= containerRect.left + 1  ||
  //   e.clientX >= containerRect.right - 1 ||
  //   e.clientY <= containerRect.top + 1 ||
  //   e.clientY >= containerRect.bottom - 1
  // ) {
  //   // 鼠标超出容器边界，执行相应操作
  //   onDragHandlerMouseUp()
  // }
}

// 抬起
const onDragHandlerMouseUp = () => {
  // 在这里可以进行验证逻辑，判断是否验证成功
  // 验证成功：修改相关样式和文本提示
  // 验证失败：回到初始状态
  console.log(configOption.dragOffset , dragContainer.value.clientWidth - dragHandler.value.clientWidth)
  if (configOption.dragOffset >= dragContainer.value.clientWidth - dragHandler.value.clientWidth) {
    configOption.dragText = "验证通过"
    configOption.bgImg = props.succBgImg
    configOption.pass = true
  } else {
    configOption.dragText = "向右拖动"
    configOption.bgImg = props.defBgImg
    configOption.dragOffset = 0
  }
  configOption.down = false
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