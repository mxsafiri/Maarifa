import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  AcademicCapIcon,
  BeakerIcon,
  ChatBubbleLeftRightIcon,
  ChartBarIcon,
  UserGroupIcon,
  GlobeAltIcon,
  RocketLaunchIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline'

const features = [
  {
    name: 'AI-Powered Learning',
    description: 'Experience personalized learning paths tailored by advanced AI to match your unique style and pace.',
    icon: BeakerIcon,
    color: 'from-purple-500 to-indigo-500',
  },
  {
    name: 'Smart Mentorship',
    description: 'Get real-time guidance from AI mentors and connect with industry experts in your field.',
    icon: AcademicCapIcon,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'Global Community',
    description: 'Join a vibrant community of learners, collaborate on projects, and share knowledge globally.',
    icon: GlobeAltIcon,
    color: 'from-green-500 to-emerald-500',
  },
  {
    name: 'Interactive Learning',
    description: 'Engage with dynamic content, AR/VR experiences, and hands-on coding challenges.',
    icon: ChatBubbleLeftRightIcon,
    color: 'from-orange-500 to-pink-500',
  },
  {
    name: 'AI Analytics',
    description: 'Track your progress with advanced analytics and get personalized improvement suggestions.',
    icon: ChartBarIcon,
    color: 'from-yellow-500 to-orange-500',
  },
  {
    name: 'Peer Learning',
    description: 'Form study groups, participate in hackathons, and learn through collaboration.',
    icon: UserGroupIcon,
    color: 'from-red-500 to-pink-500',
  },
]

const stats = [
  { id: 1, name: 'Active Learners', value: '50K+' },
  { id: 2, name: 'Course Completion Rate', value: '94%' },
  { id: 3, name: 'Career Transitions', value: '15K+' },
  { id: 4, name: 'Countries Reached', value: '120+' },
]

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex items-center gap-x-12">
            <Link href="/" className="flex items-center space-x-2">
              <AcademicCapIcon className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold text-white">Maarifa AI</span>
            </Link>
            <div className="hidden lg:flex lg:gap-x-12">
              <Link href="/features" className="text-sm font-semibold text-gray-300 transition-colors hover:text-white">
                Features
              </Link>
              <Link href="/about" className="text-sm font-semibold text-gray-300 transition-colors hover:text-white">
                About
              </Link>
              <Link href="/pricing" className="text-sm font-semibold text-gray-300 transition-colors hover:text-white">
                Pricing
              </Link>
            </div>
          </div>
          <div className="hidden lg:flex">
            <Link href="/get-started" className="button-primary">
              Get Started
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <div className="relative isolate pt-24">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-purple-500 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>
        
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Transform Education with AI-Powered Learning
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Experience the future of education with Maarifa AI. Our platform delivers personalized learning experiences through advanced artificial intelligence, making quality education accessible to everyone.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link href="/get-started" className="button-primary">
                  Get started
                </Link>
                <Link href="/demo" className="button-secondary">
                  Live demo <span aria-hidden="true">→</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Everything you need to excel
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Our AI-powered platform provides all the tools and support you need to succeed in your learning journey.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-7xl">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <motion.div
                  key={feature.name}
                  className="card group cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className={`rounded-xl bg-gradient-to-br ${feature.color} p-2 opacity-80 group-hover:opacity-100`}>
                    <div className="rounded-lg bg-background p-5">
                      <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      <h3 className="mt-4 text-lg font-semibold text-white">{feature.name}</h3>
                      <p className="mt-2 text-gray-300">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Trusted by learners worldwide
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-300">
                Join thousands of students who have already transformed their learning journey with Maarifa AI.
              </p>
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl bg-white/5 text-center sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.id} className="flex flex-col p-8">
                  <dt className="text-sm leading-6 text-gray-300">{stat.name}</dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-white">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* CTA Section */}
        <div className="relative isolate mt-32 px-6 py-32 sm:mt-56 sm:py-40 lg:px-8">
          <div className="absolute inset-x-0 top-1/2 -z-10 flex -translate-y-1/2 transform-gpu justify-center overflow-hidden blur-3xl">
            <div className="aspect-[1155/678] w-[72.1875rem] flex-none bg-gradient-to-tr from-primary to-purple-500 opacity-20" />
          </div>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Start your learning journey today
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
              Join our community of learners and experience the future of education. Get started with a free trial today.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link href="/get-started" className="button-primary">
                Get started
              </Link>
              <Link href="/contact" className="button-secondary">
                Contact sales
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
