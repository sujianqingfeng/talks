---
title: Color
drawings:
  persist: false
transition: slide-left
overviewSnapshots: true
layout: cover
---

# 数字世界中的色彩表达


贺聂双 / <span text-3>AIS</span>   



---


<div class="flex gap-2">
  <div class="w-50 h-50 rounded-full bg-[red]"></div>
  <div class="w-50 h-50 rounded-full bg-[green]"></div>
  <div class="w-50 h-50 rounded-full bg-[blue]"></div>
</div>



---


<img src="/intersection.jpg" class="w-50" />


---
layout: center
---

# RGB颜色模型


---

<div class="flex justify-between">
  <div class="flex flex-col items-center">
    <div class="text-30">R</div>
    <div class="text-14">0-255</div>
    <div class="bg-[rgb(255,0,0)] p-2 text-10 text-white">rgb(255,0,0)</div>
  </div>

  <div class="flex flex-col items-center">
    <div class="text-30">G</div>
    <div class="text-14">0-255</div>
    <div class="bg-[rgb(0,255,0)] p-2 text-10 text-white  ">rgb(0,255,0)</div>
  </div>

  <div class="flex flex-col items-center">
    <div class="text-30">B</div>
    <div class="text-14">0-255</div>
    <div class="bg-[rgb(0,0,255)] p-2 text-10 text-white">rgb(0,0,255)</div>
  </div>
</div>




---
clicks: 4
---

<RandomColor :count="$clicks" />

<div>
 256 * 256 * 256 = 16,777,216
</div>

---
clicks: 3
---

# 十六进制


<div>

rgb(0,0,0) - rgb(255,255,255)

0x000000 - 0xffffff


<div>

<div>
  # <span v-mark="{ at: 1, color: '#234' }">FF</span>
  <span v-mark="{ at: 2, color: '#234' }">FF</span>
  <span v-mark="{ at: 3, color: '#234' }">FF</span>
</div>

<div>
 # <span>R </span>
  <span>G </span>
  <span>B </span>
</div>

</div>
</div>




---
clicks: 4
---

<Cover :count="$clicks" />


---

# Alpha 透明度


<div>
<div></div>
</div>




---

# hsl


---


# H



---
layout: center
---

# Thank you

