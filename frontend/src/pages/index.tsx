import Layout from '@/components/layout/Layout'
import { motion } from 'framer-motion'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import { useState } from 'react'

const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`

const toBase64 = (str: string) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str)

export default function Home() {
  const [imageError, setImageError] = useState({
    k12: false,
    higherEd: false,
    success: false,
    coding: false,
    teaching: false,
  })

  return (
    <Layout>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="py-24 text-center">
          <motion.h1
            className="text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Inspiring every
            <br />
            kind of learner.
          </motion.h1>
          <motion.p
            className="mx-auto mt-6 max-w-2xl text-xl text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Everyone has their own way of learning and expressing creativity. Indaba's AI technology 
            and resources empower every kind of educator — and every kind of student — to learn, 
            create, and define their own success. Let's move education forward.
          </motion.p>
        </div>

        {/* Featured Cards */}
        <motion.div
          className="grid gap-8 pb-24 sm:grid-cols-2 lg:grid-cols-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {/* K-12 Card */}
          <div className="group relative overflow-hidden rounded-3xl bg-purple-100 p-8 dark:bg-purple-900/10">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl relative bg-gray-800">
              <Image
                src={imageError.k12 
                  ? "/images/fallback-k12.jpg" 
                  : "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200"}
                alt="K-12 Learning"
                fill
                className="object-cover transition duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                onError={() => setImageError(prev => ({ ...prev, k12: true }))}
                placeholder="blur"
                blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
              />
            </div>
            <h3 className="mt-8 text-2xl font-semibold">
              Ignite the creativity in every student.
            </h3>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Personalized learning paths and interactive content designed for K-12 students.
            </p>
            <a
              href="/k12"
              className="mt-6 inline-flex items-center text-primary hover:underline"
            >
              Learn more <ArrowRightIcon className="ml-2 h-4 w-4" />
            </a>
          </div>

          {/* Higher Education Card */}
          <div className="group relative overflow-hidden rounded-3xl bg-green-100 p-8 dark:bg-green-900/10">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl relative bg-gray-800">
              <Image
                src={imageError.higherEd 
                  ? "/images/fallback-higher-ed.jpg" 
                  : "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1200"}
                alt="Higher Education"
                fill
                className="object-cover transition duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                onError={() => setImageError(prev => ({ ...prev, higherEd: true }))}
                placeholder="blur"
                blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
              />
            </div>
            <h3 className="mt-8 text-2xl font-semibold">
              Teach. Innovate. Inspire.
            </h3>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Advanced tools and resources for higher education institutions.
            </p>
            <a
              href="/higher-education"
              className="mt-6 inline-flex items-center text-primary hover:underline"
            >
              Learn more <ArrowRightIcon className="ml-2 h-4 w-4" />
            </a>
          </div>

          {/* Success Stories Card */}
          <div className="group relative overflow-hidden rounded-3xl bg-blue-100 p-8 dark:bg-blue-900/10">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl relative bg-gray-800">
              <Image
                src={imageError.success 
                  ? "/images/fallback-success.jpg" 
                  : "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200"}
                alt="Success Stories"
                fill
                className="object-cover transition duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                onError={() => setImageError(prev => ({ ...prev, success: true }))}
                placeholder="blur"
                blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
              />
            </div>
            <h3 className="mt-8 text-2xl font-semibold">
              Best in class. In class and beyond.
            </h3>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Real stories from educators and students using Indaba.
            </p>
            <a
              href="/success-stories"
              className="mt-6 inline-flex items-center text-primary hover:underline"
            >
              Learn more <ArrowRightIcon className="ml-2 h-4 w-4" />
            </a>
          </div>
        </motion.div>

        {/* Featured Stories */}
        <div className="space-y-12 py-24">
          <motion.div
            className="grid gap-8 lg:grid-cols-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="relative overflow-hidden rounded-3xl aspect-[4/3] lg:aspect-[16/9] bg-gray-800">
              <Image
                src={imageError.coding 
                  ? "/images/fallback-featured-1.svg" 
                  : "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200"}
                alt="Student Coding"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                onError={() => setImageError(prev => ({ ...prev, coding: true }))}
                placeholder="blur"
                blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
              />
            </div>
            <div className="flex flex-col justify-center space-y-6 p-8">
              <h2 className="text-3xl font-semibold">
                For this student, app development and education go hand in hand.
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Swift Student Challenge winner uses AI technology to create educational apps that make a difference.
              </p>
              <a href="/stories/app-development" className="text-primary hover:underline">
                Read the story <ArrowRightIcon className="ml-2 inline-block h-4 w-4" />
              </a>
            </div>
          </motion.div>

          <motion.div
            className="grid gap-8 lg:grid-cols-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="flex flex-col justify-center space-y-6 p-8 lg:order-2">
              <h2 className="text-3xl font-semibold">
                Building apps that teach life-changing skills.
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Learn how educators are using Indaba's AI tools to create impactful learning experiences.
              </p>
              <a href="/stories/teaching-skills" className="text-primary hover:underline">
                Read the story <ArrowRightIcon className="ml-2 inline-block h-4 w-4" />
              </a>
            </div>
            <div className="relative overflow-hidden rounded-3xl aspect-[4/3] lg:aspect-[16/9] lg:order-1 bg-gray-800">
              <Image
                src={imageError.teaching 
                  ? "/images/fallback-featured-2.svg" 
                  : "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200"}
                alt="Teacher and Student"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                onError={() => setImageError(prev => ({ ...prev, teaching: true }))}
                placeholder="blur"
                blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  )
}
