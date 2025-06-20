<script setup lang="ts">
import { ref, onBeforeUnmount } from 'vue';

defineProps({
  type: {
    type: String,
    default: 'primary'
  },
  size: {
    type: String,
    default: 'medium'
  }
});

const ripples = ref<{ x: number, y: number, id: number }[]>([]);
let nextId = 0;

function createRipple(event: MouseEvent) {
  const button = event.currentTarget as HTMLElement;
  const rect = button.getBoundingClientRect();
  
  // 计算点击位置相对于按钮的坐标
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  
  // 创建新的水波纹
  const id = nextId++;
  ripples.value.push({ x, y, id });
  
  // 水波纹动画结束后移除
  setTimeout(() => {
    ripples.value = ripples.value.filter(ripple => ripple.id !== id);
  }, 600); // 动画持续时间
}

// 组件卸载前清除所有水波纹
onBeforeUnmount(() => {
  ripples.value = [];
});
</script>

<template>
  <button 
    class="my-button" 
    :class="[`my-button--${type}`, `my-button--${size}`]"
    @click="createRipple"
  >
    <span class="button-content">
      <slot></slot>
    </span>
    
    <!-- 水波纹容器 -->
    <div class="ripple-container">
      <span 
        v-for="ripple in ripples" 
        :key="ripple.id"
        class="ripple"
        :style="{
          left: `${ripple.x}px`,
          top: `${ripple.y}px`
        }"
      ></span>
    </div>
  </button>
</template>

<style scoped>
.my-button {
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  font-weight: 500;
  position: relative;
  overflow: hidden;
  transition: background-color 0.3s;
}

.button-content {
  position: relative;
  z-index: 1;
}

.ripple-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
}

.ripple {
  position: absolute;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);
  width: 0;
  height: 0;
  animation: ripple-effect 0.6s ease-out;
}

@keyframes ripple-effect {
  0% {
    width: 0;
    height: 0;
    opacity: 0.5;
  }
  100% {
    width: 500px;
    height: 500px;
    opacity: 0;
  }
}

.my-button--primary {
  background-color: #3498db;
  color: white;
}

.my-button--secondary {
  background-color: #95a5a6;
  color: white;
}

.my-button--success {
  background-color: #2ecc71;
  color: white;
}

.my-button--danger {
  background-color: #e74c3c;
  color: white;
}

.my-button--small {
  padding: 4px 8px;
  font-size: 0.8rem;
}

.my-button--medium {
  padding: 8px 16px;
  font-size: 1rem;
}

.my-button--large {
  padding: 12px 24px;
  font-size: 1.2rem;
}
</style>

