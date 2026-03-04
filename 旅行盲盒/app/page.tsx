"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type City = {
  id: string;
  name: string;
  country: string;
  lat: number;
  lng: number;
  image: string;
};

const CITIES: City[] = [
  {
    id: "tokyo",
    name: "东京 · 霓虹夜街",
    country: "日本",
    lat: 35.6762,
    lng: 139.6503,
    image:
      "https://images.unsplash.com/photo-1505066836043-9f90b0c1c97e?auto=format&fit=crop&w=1600&q=80"
  },
  {
    id: "kyoto",
    name: "京都 · 清晨小巷",
    country: "日本",
    lat: 35.0116,
    lng: 135.7681,
    image:
      "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=1600&q=80"
  },
  {
    id: "iceland",
    name: "雷克雅未克 · 极光之夜",
    country: "冰岛",
    lat: 64.1466,
    lng: -21.9426,
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80"
  },
  {
    id: "barcelona",
    name: "巴塞罗那 · 海边黄昏",
    country: "西班牙",
    lat: 41.3851,
    lng: 2.1734,
    image:
      "https://images.unsplash.com/photo-1526397751294-331021109d37?auto=format&fit=crop&w=1600&q=80"
  },
  {
    id: "chiangmai",
    name: "清迈 · 雨季山城",
    country: "泰国",
    lat: 18.7883,
    lng: 98.9853,
    image:
      "https://images.unsplash.com/photo-1533035350251-aa8b800f2cc1?auto=format&fit=crop&w=1600&q=80"
  },
  {
    id: "prague",
    name: "布拉格 · 老城夜色",
    country: "捷克",
    lat: 50.0755,
    lng: 14.4378,
    image:
      "https://images.unsplash.com/photo-1431274172761-fca41d930114?auto=format&fit=crop&w=1600&q=80"
  },
  {
    id: "sapporo",
    name: "札幌 · 冬夜街景",
    country: "日本",
    lat: 43.0618,
    lng: 141.3545,
    image:
      "https://images.unsplash.com/photo-1510251197878-a2e6d2cb590c?auto=format&fit=crop&w=1600&q=80"
  },
  {
    id: "venice",
    name: "威尼斯 · 清晨运河",
    country: "意大利",
    lat: 45.4408,
    lng: 12.3155,
    image:
      "https://images.unsplash.com/photo-1504274066651-8d31a536b11a?auto=format&fit=crop&w=1600&q=80"
  },
  {
    id: "seoul",
    name: "首尔 · 汉江夜骑",
    country: "韩国",
    lat: 37.5665,
    lng: 126.978,
    image:
      "https://images.unsplash.com/photo-1517154421773-0529f29ea451?auto=format&fit=crop&w=1600&q=80"
  },
  {
    id: "lisbon",
    name: "里斯本 · 山城电车",
    country: "葡萄牙",
    lat: 38.7223,
    lng: -9.1393,
    image:
      "https://images.unsplash.com/photo-1516466723877-e4ec1d736c8a?auto=format&fit=crop&w=1600&q=80"
  },
  {
    id: "marrakesh",
    name: "马拉喀什 · 沙漠星空",
    country: "摩洛哥",
    lat: 31.6295,
    lng: -7.9811,
    image:
      "https://images.unsplash.com/photo-1504274066651-8d33ef31b11b?auto=format&fit=crop&w=1600&q=80"
  },
  {
    id: "paris",
    name: "巴黎 · 塞纳河畔",
    country: "法国",
    lat: 48.8566,
    lng: 2.3522,
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1600&q=80"
  },
  {
    id: "newyork",
    name: "纽约 · 曼哈顿夜",
    country: "美国",
    lat: 40.7128,
    lng: -74.006,
    image:
      "https://images.unsplash.com/photo-1488747279002-c8523379faaa?auto=format&fit=crop&w=1600&q=80"
  },
  {
    id: "sydney",
    name: "悉尼 · 港湾日落",
    country: "澳大利亚",
    lat: -33.8688,
    lng: 151.2093,
    image:
      "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1600&q=80"
  },
  {
    id: "bali",
    name: "巴厘岛 · 海边晚风",
    country: "印尼",
    lat: -8.4095,
    lng: 115.1889,
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3fd?auto=format&fit=crop&w=1600&q=80"
  },
  {
    id: "amsterdam",
    name: "阿姆斯特丹 · 运河黄昏",
    country: "荷兰",
    lat: 52.3676,
    lng: 4.9041,
    image:
      "https://images.unsplash.com/photo-1529927066849-66e1abc70a44?auto=format&fit=crop&w=1600&q=80"
  },
  {
    id: "london",
    name: "伦敦 · 泰晤士河畔",
    country: "英国",
    lat: 51.5074,
    lng: -0.1278,
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1600&q=80"
  },
  {
    id: "rome",
    name: "罗马 · 黄昏古城",
    country: "意大利",
    lat: 41.9028,
    lng: 12.4964,
    image:
      "https://images.unsplash.com/photo-1526481280695-3c687fd543c0?auto=format&fit=crop&w=1600&q=80"
  },
  {
    id: "hongkong",
    name: "香港 · 太平山夜景",
    country: "中国",
    lat: 22.3193,
    lng: 114.1694,
    image:
      "https://images.unsplash.com/photo-1521292270410-a8c53642e9d0?auto=format&fit=crop&w=1600&q=80"
  },
  {
    id: "vancouver",
    name: "温哥华 · 海湾与山",
    country: "加拿大",
    lat: 49.2827,
    lng: -123.1207,
    image:
      "https://images.unsplash.com/photo-1501466044931-62695aada8e9?auto=format&fit=crop&w=1600&q=80"
  }
];

// 预留音效接口：后续可在这里接入实际音频播放逻辑
const useTravelSounds = () => {
  const playTick = () => {
    // TODO: 在这里接入“咔哒”滚动声
  };

  const playSuccess = () => {
    // TODO: 在这里接入“叮”的完成提示音
  };

  return { playTick, playSuccess };
};

export default function Home() {
  const [selectedCity, setSelectedCity] = useState<City | null>(null);
  const [displayCity, setDisplayCity] = useState<City | null>(CITIES[0] ?? null);
  const [isRolling, setIsRolling] = useState(false);
  const [ticker, setTicker] = useState(0);
  const { playTick, playSuccess } = useTravelSounds();

  const handleReveal = () => {
    if (isRolling) return;

    const target =
      CITIES[Math.floor(Math.random() * CITIES.length)] ?? CITIES[0];

    setIsRolling(true);

    const duration = 2000; // 2 秒滚动
    const minInterval = 60;
    const maxInterval = 150;

    const start = performance.now();
    let lastChange = start;
    let index = 0;

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const easing = 1 - Math.pow(1 - progress, 3); // ease-out
      const currentInterval =
        minInterval + (maxInterval - minInterval) * easing;

      if (now - lastChange >= currentInterval) {
        const nextCity = CITIES[index % CITIES.length];
        setDisplayCity(nextCity);
        setTicker((prev) => prev + 1);
        playTick();
        lastChange = now;
        index += 1;
      }

      if (elapsed < duration) {
        requestAnimationFrame(tick);
      } else {
        setDisplayCity(target);
        setSelectedCity(target);
        setIsRolling(false);
        playSuccess();
      }
    };

    requestAnimationFrame(tick);
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden text-slate-50">
      {/* 背景城市图：Ken Burns 效果 */}
      <AnimatePresence>
        {selectedCity && (
          <motion.div
            key={selectedCity.id}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.5, scale: 1.15 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 18, ease: "easeOut" }}
            className="pointer-events-none absolute inset-0 -z-30 bg-cover bg-center"
            style={{
              backgroundImage: `url(${selectedCity.image})`
            }}
          >
            <div className="absolute inset-0 bg-slate-950/70" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Animated mesh gradient background blobs：深紫 · 藏青 · 极光绿 */}
      <div className="pointer-events-none absolute inset-0 -z-20">
        {/* 深紫 mesh */}
        <div className="absolute -top-40 -left-32 h-96 w-96 rounded-full bg-[#4c1d95]/60 blur-3xl animate-mesh-slow" />
        {/* 极光绿 mesh */}
        <div className="absolute -bottom-48 -right-16 h-[28rem] w-[28rem] rounded-full bg-aurora-green/45 blur-3xl animate-mesh-slow" />
        {/* 藏青偏蓝 mesh */}
        <div className="absolute top-1/3 left-1/2 h-[26rem] w-[26rem] -translate-x-1/2 rounded-full bg-sky-500/35 blur-3xl animate-mesh-slow" />
        {/* 顶部柔光 */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(148,163,184,0.16),transparent_55%)]" />
        {/* 底部极光绿晕染 */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(74,222,128,0.22),transparent_55%)] mix-blend-screen" />
      </div>

      {/* Subtle grain */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-30 [background-image:radial-gradient(circle_at_1px_1px,#111_1px,transparent_0)] [background-size:18px_18px]" />

      {/* Center card */}
      <section className="relative z-10 flex w-full max-w-xl flex-col items-center px-4 py-10 sm:px-6 sm:py-14">
        <div className="relative w-full overflow-hidden rounded-3xl border border-white/5 bg-white/5 p-[1px]">
          {/* glow ring */}
          <div className="pointer-events-none absolute inset-0 -z-10 rounded-3xl bg-gradient-to-r from-aurora-green/25 via-sky-500/12 to-[#4c1d95]/25 blur-2xl" />

          <div className="relative h-full w-full rounded-[1.45rem] bg-slate-950/70 p-6 backdrop-blur-2xl sm:p-8">
            {/* inner light */}
            <div className="pointer-events-none absolute inset-0 rounded-[1.45rem] bg-[radial-gradient(circle_at_top,_rgba(148,163,184,0.16),transparent_55%)]" />

            <div className="relative flex flex-col gap-8">
              <header className="space-y-3 text-center">
                <p className="text-xs tracking-[0.35em] text-slate-400 uppercase">
                  TRAVEL MYSTERY BOX
                </p>
                <h1 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
                  随机旅行盲盒
                </h1>
                <p className="text-sm text-slate-400 sm:text-base">
                  按下按钮，看宇宙为你滚动出下一站城市。
                </p>
              </header>

              {/* Button + aura */}
              <div className="flex flex-col items-center gap-6">
                <div className="relative">
                  {/* soft halo */}
                  <motion.div
                    className="absolute -inset-7 rounded-full bg-emerald-400/15 blur-3xl"
                    animate={{ opacity: [0.25, 0.5, 0.25], scale: [0.95, 1.08, 0.95] }}
                    transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
                  />

                  {/* radial rays */}
                  <div className="pointer-events-none absolute inset-0">
                    <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_180deg_at_50%_50%,rgba(34,197,94,0.18),transparent_45%,rgba(56,189,248,0.1),transparent_75%,rgba(147,51,234,0.2),transparent_100%)] blur-xl opacity-60 transition duration-500 group-hover:opacity-90" />
                  </div>

                  <motion.button
                    whileHover={{ scale: isRolling ? 1 : 1.04 }}
                    whileTap={{ scale: isRolling ? 1 : 0.97 }}
                    onClick={handleReveal}
                    disabled={isRolling}
                    className="group relative flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-400 via-sky-400 to-purple-500 px-10 py-3.5 text-sm font-medium tracking-wide text-slate-950 shadow-[0_0_30px_rgba(16,185,129,0.55)] outline-none transition-all duration-300 hover:shadow-[0_0_45px_rgba(59,130,246,0.55)] focus-visible:ring-2 focus-visible:ring-emerald-400/80 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 disabled:cursor-not-allowed disabled:opacity-80"
                  >
                    {/* inner breathing light */}
                    <div className="absolute inset-[1px] rounded-full bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900" />
                    <span className="relative flex items-center gap-2">
                      <span className="inline-flex h-2 w-2 animate-pulse-soft rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(74,222,128,0.9)]" />
                      {isRolling ? "为你滚动城市中..." : "开启我的目的地"}
                    </span>
                    {/* breathing ring */}
                    <span className="pointer-events-none absolute -inset-[2px] rounded-full border border-emerald-400/40 opacity-70 [box-shadow:0_0_32px_rgba(16,185,129,0.55)] animate-breath" />
                  </motion.button>
                </div>

                <p className="max-w-xs text-center text-[0.72rem] text-slate-500 sm:text-xs">
                  内置 20 个城市场景，模拟真实的旅行盲盒抽取体验。
                </p>
              </div>

              {/* Slot-like rolling result */}
              <div className="min-h-[4.5rem] overflow-hidden text-center">
                <AnimatePresence mode="wait">
                  {displayCity ? (
                    <motion.div
                      key={`${displayCity.id}-${ticker}`}
                      initial={{ y: 24, opacity: 0, filter: "blur(6px)" }}
                      animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                      exit={{ y: -24, opacity: 0, filter: "blur(4px)" }}
                      transition={{ duration: 0.18, ease: "easeOut" }}
                      className="inline-flex flex-col items-center gap-2"
                    >
                      <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-[0.7rem] font-medium text-emerald-300">
                        {isRolling ? "为你滚动中" : "你的下一站"}
                      </span>
                      <p className="text-base font-medium text-slate-50 sm:text-lg">
                        {displayCity.name}
                      </p>
                      <p className="text-xs text-slate-400">
                        {displayCity.country} · {displayCity.lat.toFixed(2)}°,{" "}
                        {displayCity.lng.toFixed(2)}°
                      </p>
                    </motion.div>
                  ) : (
                    <motion.p
                      key="placeholder"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 0.75, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.3 }}
                      className="text-sm text-slate-500"
                    >
                      尚未抽取目的地，点击上方按钮试试。
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* Footer hint */}
              <footer className="flex items-center justify-between text-[0.7rem] text-slate-500">
                <span>老虎机式滚动 · 2 秒停留</span>
                <span>灵感用途 · 不做实际预订</span>
              </footer>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

