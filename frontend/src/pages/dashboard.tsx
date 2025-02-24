import Layout from '@/components/layout/Layout'
import { motion } from 'framer-motion'
import {
  ClockIcon,
  AcademicCapIcon,
  ChartBarIcon,
  RocketLaunchIcon,
  ArrowRightIcon,
  PlayCircleIcon,
} from '@heroicons/react/24/outline'

const stats = [
  {
    name: 'Learning Hours',
    value: '32.5',
    icon: ClockIcon,
    color: 'from-blue-500 to-cyan-500',
    change: '+2.5 this week',
  },
  {
    name: 'Course Progress',
    value: '78%',
    icon: ChartBarIcon,
    color: 'from-green-500 to-emerald-500',
    change: '3 courses in progress',
  },
  {
    name: 'Current Level',
    value: 'Advanced',
    icon: AcademicCapIcon,
    color: 'from-purple-500 to-indigo-500',
    change: '2 skills mastered',
  },
]

const activeCourses = [
  {
    id: 1,
    title: 'Machine Learning Fundamentals',
    progress: 75,
    nextLesson: 'Neural Networks Architecture',
    duration: '45 min',
    color: 'from-purple-500 to-indigo-500',
  },
  {
    id: 2,
    title: 'Advanced Web Development',
    progress: 60,
    nextLesson: 'Server-Side Rendering',
    duration: '30 min',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 3,
    title: 'Data Science Essentials',
    progress: 40,
    nextLesson: 'Statistical Analysis',
    duration: '50 min',
    color: 'from-green-500 to-emerald-500',
  },
]

const recommendations = [
  {
    id: 1,
    title: 'Deep Learning Specialization',
    description: 'Master deep learning techniques and neural networks',
    image: '/images/deep-learning.jpg',
    duration: '12 weeks',
    level: 'Advanced',
  },
  {
    id: 2,
    title: 'Cloud Architecture',
    description: 'Design and implement scalable cloud solutions',
    image: '/images/cloud-architecture.jpg',
    duration: '8 weeks',
    level: 'Intermediate',
  },
]

export default function Dashboard() {
  return (
    <Layout>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="py-12">
          <motion.h1
            className="text-4xl font-semibold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Welcome back, Sarah
          </motion.h1>
          <motion.p
            className="mt-2 text-lg text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Pick up where you left off and continue your learning journey.
          </motion.p>
        </div>

        {/* Stats */}
        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {stats.map((stat) => (
            <div
              key={stat.name}
              className="rounded-3xl bg-gray-50 p-8 dark:bg-gray-800/50"
            >
              <div className="flex items-center">
                <div className={`rounded-xl bg-gradient-to-br ${stat.color} p-2 opacity-80`}>
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-400">{stat.name}</p>
                  <p className="mt-1 text-2xl font-semibold">{stat.value}</p>
                  <p className="mt-1 text-sm text-gray-400">{stat.change}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Active Courses */}
        <motion.div
          className="mt-12 space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">Active Courses</h2>
            <a
              href="/courses"
              className="text-sm text-primary hover:underline"
            >
              View all courses
            </a>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {activeCourses.map((course) => (
              <div
                key={course.id}
                className="group rounded-3xl bg-gray-50 p-8 dark:bg-gray-800/50"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">{course.title}</h3>
                  <span className="text-lg font-semibold">{course.progress}%</span>
                </div>
                <div className="mt-4">
                  <div className="h-2 rounded-full bg-gray-200 dark:bg-gray-700">
                    <div
                      className={`h-2 rounded-full bg-gradient-to-r ${course.color}`}
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>
                </div>
                <div className="mt-6">
                  <p className="text-sm text-gray-400">Next Lesson</p>
                  <p className="mt-1 font-medium">{course.nextLesson}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="flex items-center text-sm text-gray-400">
                      <ClockIcon className="mr-1.5 h-4 w-4" />
                      {course.duration}
                    </span>
                    <button className="flex items-center text-primary hover:underline">
                      Continue <PlayCircleIcon className="ml-1.5 h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Recommended Courses */}
        <motion.div
          className="mt-12 space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">Recommended for You</h2>
            <a
              href="/recommendations"
              className="text-sm text-primary hover:underline"
            >
              View all recommendations
            </a>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {recommendations.map((course) => (
              <div
                key={course.id}
                className="group relative overflow-hidden rounded-3xl bg-gray-50 dark:bg-gray-800/50"
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-semibold">{course.title}</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    {course.description}
                  </p>
                  <div className="mt-6 flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <span>{course.duration}</span>
                      <span>•</span>
                      <span>{course.level}</span>
                    </div>
                    <a
                      href={`/course/${course.id}`}
                      className="flex items-center text-primary hover:underline"
                    >
                      Learn more <ArrowRightIcon className="ml-1.5 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </Layout>
  )
}
