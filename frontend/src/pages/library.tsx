import { motion } from 'framer-motion'
import Layout from '@/components/layout/Layout'
import {
  BeakerIcon,
  BookOpenIcon,
  ClockIcon,
  CodeBracketIcon,
  GlobeAltIcon,
  ChartBarIcon,
  UsersIcon,
} from '@heroicons/react/24/outline'

const categories = [
  {
    name: 'Computer Science',
    description: 'Programming, algorithms, and software engineering',
    icon: CodeBracketIcon,
    courses: 45,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'Data Science',
    description: 'Statistics, machine learning, and data visualization',
    icon: ChartBarIcon,
    courses: 38,
    color: 'from-green-500 to-emerald-500',
  },
  {
    name: 'Artificial Intelligence',
    description: 'Machine learning, neural networks, and deep learning',
    icon: BeakerIcon,
    courses: 32,
    color: 'from-purple-500 to-indigo-500',
  },
  {
    name: 'Web Development',
    description: 'Frontend, backend, and full-stack development',
    icon: GlobeAltIcon,
    courses: 56,
    color: 'from-pink-500 to-rose-500',
  },
]

const featuredCourses = [
  {
    id: 1,
    title: 'Machine Learning Fundamentals',
    category: 'Artificial Intelligence',
    duration: '8 weeks',
    level: 'Intermediate',
    students: '2.5k+',
    instructor: 'Dr. Sarah Johnson',
    rating: 4.8,
    image: '/images/courses/ml-fundamentals.jpg',
  },
  {
    id: 2,
    title: 'Full-Stack Web Development',
    category: 'Web Development',
    duration: '12 weeks',
    level: 'Advanced',
    students: '3k+',
    instructor: 'Alex Chen',
    rating: 4.9,
    image: '/images/courses/web-dev.jpg',
  },
  {
    id: 3,
    title: 'Data Science Essentials',
    category: 'Data Science',
    duration: '10 weeks',
    level: 'Beginner',
    students: '1.8k+',
    instructor: 'Dr. Michael Brown',
    rating: 4.7,
    image: '/images/courses/data-science.jpg',
  },
]

export default function Library() {
  return (
    <Layout>
      <div className="space-y-12">
        {/* Header */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-semibold text-gray-900 dark:text-white"
          >
            Course Library
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-2 text-gray-600 dark:text-gray-400"
          >
            Explore our comprehensive collection of courses and start learning
            today.
          </motion.p>
        </div>

        {/* Categories */}
        <section>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            Browse by Category
          </motion.h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="group overflow-hidden rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-900/5 transition-all hover:shadow-md dark:bg-gray-800 dark:ring-gray-800"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`rounded-xl bg-gradient-to-br ${category.color} p-3`}
                  >
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {category.name}
                    </h3>
                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                      {category.courses} courses
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                  {category.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Featured Courses */}
        <section>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            Featured Courses
          </motion.h2>
          <div className="grid gap-6 lg:grid-cols-3">
            {featuredCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="group overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-gray-900/5 transition-all hover:shadow-md dark:bg-gray-800 dark:ring-gray-800"
              >
                <div className="aspect-w-16 aspect-h-9 relative">
                  <div className="absolute inset-0 bg-gray-100 dark:bg-gray-700">
                    {/* Course image would go here */}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {course.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    by {course.instructor}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="inline-flex items-center rounded-full bg-primary-50 px-2 py-1 text-xs font-medium text-primary-700 ring-1 ring-inset ring-primary-700/10 dark:bg-primary-900/20 dark:text-primary-400 dark:ring-primary-400/20">
                      {course.category}
                    </span>
                    <span className="inline-flex items-center rounded-full bg-primary-50 px-2 py-1 text-xs font-medium text-primary-700 ring-1 ring-inset ring-primary-700/10 dark:bg-primary-900/20 dark:text-primary-400 dark:ring-primary-400/20">
                      {course.level}
                    </span>
                  </div>
                  <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4 dark:border-gray-700">
                    <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                      <ClockIcon className="h-4 w-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                      <UsersIcon className="h-4 w-4" />
                      <span>{course.students}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  )
}
