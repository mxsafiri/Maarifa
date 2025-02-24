import Layout from '@/components/layout/Layout'
import { motion } from 'framer-motion'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

export default function Home() {
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
            Everyone has their own way of learning and expressing creativity. Maarifa's AI technology 
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
            <div className="aspect-[4/3] overflow-hidden rounded-2xl">
              <img
                src="/images/k12-learning.jpg"
                alt="K-12 Learning"
                className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
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
            <div className="aspect-[4/3] overflow-hidden rounded-2xl">
              <img
                src="/images/higher-ed.jpg"
                alt="Higher Education"
                className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
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
            <div className="aspect-[4/3] overflow-hidden rounded-2xl">
              <img
                src="/images/success.jpg"
                alt="Success Stories"
                className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
              />
            </div>
            <h3 className="mt-8 text-2xl font-semibold">
              Best in class. In class and beyond.
            </h3>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Real stories from educators and students using Maarifa.
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
            <div className="relative overflow-hidden rounded-3xl">
              <img
                src="/images/student-coding.jpg"
                alt="Student Coding"
                className="h-full w-full object-cover"
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
                Learn how educators are using Maarifa's AI tools to create impactful learning experiences.
              </p>
              <a href="/stories/teaching-skills" className="text-primary hover:underline">
                Read the story <ArrowRightIcon className="ml-2 inline-block h-4 w-4" />
              </a>
            </div>
            <div className="relative overflow-hidden rounded-3xl lg:order-1">
              <img
                src="/images/teacher-student.jpg"
                alt="Teacher and Student"
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  )
}
