import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  AcademicCapIcon,
  BeakerIcon,
  ChatBubbleLeftRightIcon,
  ChartBarIcon,
  UserGroupIcon,
  GlobeAltIcon,
} from '@heroicons/react/24/outline'

const features = [
  {
    name: 'AI-Powered Learning',
    description: 'Personalized learning paths adapted to your unique style and pace.',
    icon: BeakerIcon,
  },
  {
    name: 'Expert Mentorship',
    description: 'Connect with AI mentors and human experts in your field of study.',
    icon: AcademicCapIcon,
  },
  {
    name: 'Global Community',
    description: 'Join a worldwide network of learners and educators.',
    icon: GlobeAltIcon,
  },
  {
    name: 'Interactive Content',
    description: 'Engage with dynamic, multimedia learning materials.',
    icon: ChatBubbleLeftRightIcon,
  },
  {
    name: 'Progress Tracking',
    description: 'Monitor your growth with detailed analytics and insights.',
    icon: ChartBarIcon,
  },
  {
    name: 'Collaborative Learning',
    description: 'Learn together with peers through group projects and discussions.',
    icon: UserGroupIcon,
  },
]

const testimonials = [
  {
    content: "Maarifa AI has transformed how my children learn. The personalized approach keeps them engaged and excited about education.",
    author: "Sarah M.",
    role: "Parent",
  },
  {
    content: "As a teacher, I've seen remarkable improvement in student engagement since implementing Maarifa AI in my classroom.",
    author: "John D.",
    role: "Educator",
  },
  {
    content: "The AI-powered mentorship has helped me achieve my learning goals faster than I ever thought possible.",
    author: "Michael K.",
    role: "Student",
  },
]

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="bg-white">
      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur-sm">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex items-center gap-x-12">
            <Link href="/" className="flex items-center space-x-2">
              <AcademicCapIcon className="h-8 w-8 text-indigo-600" />
              <span className="text-2xl font-bold text-gray-900">Maarifa AI</span>
            </Link>
            <div className="hidden lg:flex lg:gap-x-12">
              <Link href="/features" className="text-sm font-semibold leading-6 text-gray-900">
                Features
              </Link>
              <Link href="/about" className="text-sm font-semibold leading-6 text-gray-900">
                About
              </Link>
              <Link href="/pricing" className="text-sm font-semibold leading-6 text-gray-900">
                Pricing
              </Link>
            </div>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setIsMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
          <div className="hidden lg:flex">
            <Link
              href="/dashboard"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Get Started
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero section */}
      <div className="relative isolate pt-14">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <svg
            className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
            viewBox="0 0 1155 678"
          >
            <path
              fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
              fillOpacity=".3"
              d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
            />
            <defs>
              <linearGradient
                id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
                x1="1155.49"
                x2="-78.208"
                y1=".177"
                y2="474.645"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#9089FC" />
                <stop offset={1} stopColor="#FF80B5" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="py-24 sm:py-32 lg:pb-40">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <motion.h1
                className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Transform Education with AI-Powered Learning
              </motion.h1>
              <motion.p
                className="mt-6 text-lg leading-8 text-gray-600"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Maarifa AI delivers personalized learning experiences through advanced artificial intelligence,
                making quality education accessible to everyone.
              </motion.p>
              <motion.div
                className="mt-10 flex items-center justify-center gap-x-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Link
                  href="/dashboard"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get started
                </Link>
                <Link href="/about" className="text-sm font-semibold leading-6 text-gray-900">
                  Learn more <span aria-hidden="true">→</span>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Features section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">Learn Faster</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need to accelerate your learning
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our AI-powered platform adapts to your learning style, providing personalized content and guidance
              to help you achieve your educational goals.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.name}
                  className="flex flex-col"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    <feature.icon className="h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                    {feature.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </motion.div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Testimonials section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">Testimonials</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Loved by learners worldwide
            </p>
          </div>
          <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <motion.figure
                  key={index}
                  className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-900/5"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <blockquote className="text-gray-900">
                    <p>"{testimonial.content}"</p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-x-4">
                    <div>
                      <div className="font-semibold">{testimonial.author}</div>
                      <div className="text-gray-600">{testimonial.role}</div>
                    </div>
                  </figcaption>
                </motion.figure>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA section */}
      <div className="bg-white">
        <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
            <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Start your learning journey today
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
              Join thousands of learners who are already experiencing the future of education with Maarifa AI.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/dashboard"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Get started
              </Link>
              <Link href="/pricing" className="text-sm font-semibold leading-6 text-white">
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
