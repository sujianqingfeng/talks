<template>
  <div class="w-full h-full flex flex-col items-center justify-center">
    <div class="w-full h-full">
      <canvas ref="chartCanvas" class="w-full h-full"></canvas>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useSlideContext } from '@slidev/client'
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  LineController,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  LineController,
  Title,
  Tooltip,
  Legend
)

const chartCanvas = ref(null)
let chart = null

// 获取 slidev 的点击上下文
const { $clicks } = useSlideContext()

// 生成数据点
const generateData = (useLog = false) => {
  const documentCounts = []
  const rarityScores = []
  
  for (let i = 1; i <= 100; i++) {
    documentCounts.push(i)
    if (useLog) {
      // 使用对数变换，使曲线更平滑
      rarityScores.push(Math.log(1000 / i))
    } else {
      // 原始反比关系，更陡峭 - 使用更大的倍数来增加对比度
      rarityScores.push(1000 / i)
    }
  }
  
  return { documentCounts, rarityScores }
}

// 更新图表数据
const updateChart = (useLog = false) => {
  if (!chart) return
  
  const { documentCounts, rarityScores } = generateData(useLog)
  
  chart.data.datasets[0].data = rarityScores
  // 移除标题更新
  chart.data.datasets[0].borderColor = useLog ? 'rgb(34, 197, 94)' : 'rgb(236, 72, 153)'
  chart.data.datasets[0].backgroundColor = useLog ? 'rgba(34, 197, 94, 0.1)' : 'rgba(236, 72, 153, 0.1)'
  chart.data.datasets[0].borderWidth = useLog ? 4 : 3
  chart.data.datasets[0].tension = useLog ? 0.3 : 0.1
  
  // 重新设置 Y 轴范围以适应新数据
  chart.options.scales.y.beginAtZero = true
  
  chart.update('active')
}

onMounted(() => {
  const ctx = chartCanvas.value.getContext('2d')
  
  const { documentCounts, rarityScores } = generateData(false)
  
  chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: documentCounts,
      datasets: [{
        label: '稀有度',
        data: rarityScores,
        borderColor: 'rgb(236, 72, 153)',
        backgroundColor: 'rgba(236, 72, 153, 0.1)',
        borderWidth: 3,
        fill: true,
        tension: 0.1,
        pointRadius: 0,
        pointHoverRadius: 0,
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      animation: {
        duration: 1500,
        easing: 'easeInOutQuart'
      },
      plugins: {
        title: {
          display: false
        },
        legend: {
          display: false
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              return `文档数: ${context.parsed.x}, 稀有度: ${context.parsed.y.toFixed(2)}`
            }
          }
        }
      },
      scales: {
        x: {
          title: {
            display: true,
            text: '含有这个词语的文档数',
            font: {
              size: 16,
              weight: 'bold'
            },
            color: '#374151'
          },
          grid: {
            display: false
          },
          ticks: {
            display: false
          }
        },
        y: {
          title: {
            display: true,
            text: '稀有度',
            font: {
              size: 16,
              weight: 'bold'
            },
            color: '#374151'
          },
          grid: {
            display: false
          },
          ticks: {
            display: false
          }
        }
      },
      interaction: {
        intersect: false,
        mode: 'index'
      }
    }
  })
})

// 监听点击变化
watch($clicks, (newClicks) => {
  if (newClicks >= 1) {
    updateChart(true) // 使用对数变换
  } else {
    updateChart(false) // 使用原始数据
  }
}, { immediate: false })
</script> 