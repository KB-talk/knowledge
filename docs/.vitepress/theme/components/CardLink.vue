<template>
  <div 
    class="vp-card"
    :class="{ 'has-image-right': imageSrc && imagePosition === 'right' }"
    @click="navigate"
    :style="{
      '--vp-card-accent': color,
      '--vp-card-bg': background,
      '--vp-card-logo-hue': `${logoHue}deg`
    }"
  >
    <!-- Logo display (保持圆形样式) -->
    <div class="vp-card-logo" v-if="logo && !imageSrc">
      <img :src="logo" :alt="logoAlt || imageAlt" />
    </div>
    
    <div class="vp-card-content-wrapper">
      <div class="vp-card-content">
        <h3 v-if="$slots.title || title">
          <slot name="title">{{ title }}</slot>
        </h3>
        <p v-if="$slots.desc || description">
          <slot name="desc">{{ description }}</slot>
        </p>
        <div class="vp-card-footer">
          <span><slot name="footer">{{ footerText }}</slot></span>
          <svg class="vp-card-arrow" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </div>
      </div>

      <!-- 右侧图片 -->
      <div class="vp-card-image-right" v-if="imageSrc && imagePosition === 'right'">
        <img :src="imageSrc" :alt="imageAlt" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vitepress'

const props = defineProps({
  to: {
    type: String,
    required: true
  },
  title: String,
  description: String,
  footerText: {
    type: String,
    default: '点击查看'
  },
  color: {
    type: String,
    default: 'var(--vp-c-brand)'
  },
  background: {
    type: String,
    default: 'var(--vp-c-bg-soft)'
  },
  // 图片相关属性
  imageSrc: String,
  imageAlt: String,
  // Logo相关属性
  logo: String,
  logoAlt: String,
  logoHue: {
    type: [Number, String],
    default: 0
  },
  imagePosition: {
    type: String,
    default: 'top',
    validator: (value) => ['top', 'right', 'background'].includes(value)
  }
})

const router = useRouter()
const navigate = () => {
  if (props.to.startsWith('http')) {
    window.open(props.to)
  } else {
    router.go(props.to)
  }
}
</script>

<style scoped>
.vp-card {
  --vp-card-accent: var(--vp-c-brand);
  --vp-card-bg: var(--vp-c-bg-soft);
  --vp-card-logo-hue: 0deg;
  
  background: var(--vp-card-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 1.5rem;
  margin: 1rem 0;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
  position: relative;
  overflow: hidden;
}

/* 内容容器布局 */
.vp-card-content-wrapper {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

/* 右侧图片样式 */
.vp-card-image-right {
  flex: 0 0 120px;
  height: 120px;
  border-radius: 8px;
  overflow: hidden;
}

.vp-card-image-right img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* 当有右侧图片时调整内容宽度 */
.vp-card.has-image-right .vp-card-content {
  flex: 1;
}

/* Logo样式 (保持不变) */
.vp-card-logo {
  width: 48px;
  height: 48px;
  margin: 0 auto 1rem;
  border-radius: 50%;
  overflow: hidden;
  filter: hue-rotate(var(--vp-card-logo-hue));
  transition: transform 0.3s ease;
}

.vp-card-logo img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.vp-card:hover .vp-card-logo {
  transform: scale(1.1);
}

/* 背景图片样式 (保持不变) */
.vp-card[style*="--vp-card-bg-image: url("] {
  padding: 0;
  color: white;
}

.vp-card[style*="--vp-card-bg-image: url("] .vp-card-content {
  padding: 1.5rem;
  background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%);
  position: relative;
  z-index: 1;
}

.vp-card[style*="--vp-card-bg-image: url("]::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--vp-card-bg-image) center/cover;
  z-index: 0;
}

/* 顶部图片样式 (保留但默认不显示) */
.vp-card-image {
  display: none;
}

/* 公共样式 (保持不变) */
.vp-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background: var(--vp-card-accent);
  transform: scaleY(0);
  transform-origin: bottom;
  transition: transform 0.3s ease-out;
}

.vp-card:hover {
  border-color: var(--vp-card-accent);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  transform: translateY(-4px);
}

.vp-card:hover::before {
  transform: scaleY(1);
  transform-origin: top;
}

.vp-card-content h3 {
  margin: 0 0 0.5rem;
  color: var(--vp-c-text-1);
  font-size: 1.2rem;
  font-weight: 600;
}

.vp-card-content p {
  margin: 0;
  color: var(--vp-c-text-2);
  font-size: 0.95rem;
  line-height: 1.5;
}

.vp-card-footer {
  display: flex;
  align-items: center;
  margin-top: 1rem;
  color: var(--vp-card-accent);
  font-weight: 500;
  font-size: 0.9rem;
}

.vp-card-arrow {
  width: 16px;
  height: 16px;
  margin-left: 8px;
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  transition: transform 0.2s ease;
}

.vp-card:hover .vp-card-arrow {
  transform: translateX(3px);
}

/* 背景图片模式下的文字颜色 (保持不变) */
.vp-card[style*="--vp-card-bg-image: url("] .vp-card-content h3,
.vp-card[style*="--vp-card-bg-image: url("] .vp-card-content p,
.vp-card[style*="--vp-card-bg-image: url("] .vp-card-footer {
  color: white;
}
</style>