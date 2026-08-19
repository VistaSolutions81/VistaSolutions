"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, Sparkles } from "lucide-react";
import Image from "next/image";
import logo from "../../public/logo.png";
import Countdown from "./components/Countdown";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505] text-white">

      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div className="absolute left-1/2 top-[-200px] h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[150px]" />

        <div className="absolute bottom-[-250px] left-[-150px] h-[500px] w-[500px] rounded-full bg-purple-600/10 blur-[150px]" />

        <div className="absolute right-[-150px] top-[40%] h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[150px]" />

      </div>

      {/* Grid */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* ================= NAVBAR ================= */}

      <nav className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-6 py-7">

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-3"
        >

          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-black">
            <img  alt= "logi" src="logo.png" className="h-6 w-6.5" />
          </div>

          <span className="text-xl font-bold tracking-tight">
            VISTA<span className="text-blue-500"> SOLUTIONS</span>
          </span>

        </motion.div>


        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-400 sm:flex"
        >

          <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />

          Launching Soon

        </motion.div>

      </nav>


      {/* ================= HERO ================= */}

      <section className="relative z-10 flex min-h-[calc(100vh-100px)] items-center px-6 pb-20">

        <div className="mx-auto w-full max-w-5xl text-center">

          {/* Badge */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto mb-8 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-300"
          >

            <Sparkles size={15} />

            Something amazing is coming

          </motion.div>


          {/* Heading */}

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="mx-auto max-w-5xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl md:text-8xl"
          >

            We&apos;re building

            <br />

            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
              something extraordinary.
            </span>

          </motion.h1>


          {/* Description */}

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mx-auto mt-8 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg"
          >

            We&apos;re creating powerful digital experiences,
            modern software and intelligent solutions that help
            businesses grow.

          </motion.p>


          {/* ================= COUNTDOWN ================= */}

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mx-auto max-w-3xl"
          >

            <Countdown />

          </motion.div>


          {/* ================= EMAIL ================= */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mx-auto mt-12 max-w-lg"
          >

            <p className="mb-4 text-sm text-gray-500">
              Be the first to know when we launch.
            </p>


            <div className="flex flex-col gap-3 sm:flex-row">

              <div className="flex flex-1 items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 backdrop-blur-xl">

                <Mail
                  size={18}
                  className="text-gray-500"
                />

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-transparent text-sm text-white outline-none placeholder:text-gray-600"
                />

              </div>


              <button
                type="button"
                className="group flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-gray-200"
              >

                Notify Me

                <ArrowRight
                  size={17}
                  className="transition group-hover:translate-x-1"
                />

              </button>

            </div>

          </motion.div>


          {/* ================= SOCIAL LINKS ================= */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-12 flex justify-center gap-3"
          >

            <a
              href="#"
              className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-gray-500 transition hover:border-white/20 hover:text-white"
            >
              LinkedIn
            </a>

            <a
              href="#"
              className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-gray-500 transition hover:border-white/20 hover:text-white"
            >
              GitHub
            </a>

            <a
              href="#"
              className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-gray-500 transition hover:border-white/20 hover:text-white"
            >
              Instagram
            </a>

          </motion.div>


          {/* ================= FOOTER ================= */}

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-10 text-xs text-gray-700"
          >

            © 2026 VISTA SOLUTIONS. All rights reserved.

          </motion.p>

        </div>

      </section>

    </main>
  );
}