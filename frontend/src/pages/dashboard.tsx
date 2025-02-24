import { motion } from 'framer-motion'
import Layout from '@/components/layout/Layout'
import {
  AcademicCapIcon,
  ChartBarIcon,
  ClockIcon,
  StarIcon,
} from '@heroicons/react/24/outline'

const stats = [
  {
    name: 'Active Courses',
    value: '3',
    icon: AcademicCapIcon,
    change: '+2 this month',
    changeType: 'positive',
  },
  {
    name: 'Hours Learned',
    value: '24.5',
    icon: ClockIcon,
    change: '+5.2 this week',
    changeType: 'positive',
  },
  {
    name: 'Completion Rate',
    value: '92%',
    icon: ChartBarIcon,
    change: '+4% this month',
    changeType: 'positive',
  },
  {
    name: 'Achievement Score',
    value: '850',
    icon: StarIcon,
    change: '+120 points',
    changeType: 'positive',
  },
]

const activeCourses = [
  {
    id: 1,
    name: 'Introduction to AI',
    progress: 75,
    image: '/images/courses/ai-intro.jpg',
    category: 'Artificial Intelligence',
    timeLeft: '2 weeks left',
  },
  {
    id: 2,
    name: 'Machine Learning Fundamentals',
    progress: 45,
    image: '/images/courses/ml-basics.jpg',
    category: 'Machine Learning',
    timeLeft: '4 weeks left',
  },
  {
    id: 3,
    name: 'Data Science Essentials',
    progress: 90,
    image: '/images/courses/data-science.jpg',
    category: 'Data Science',
    timeLeft: '1 week left',
  },
]

const recommendations = [
  {
    id: 1,
    name: 'Deep Learning Specialization',
    description: 'Master deep learning concepts and neural networks',
    image: '/images/courses/deep-learning.jpg',
    category: 'Deep Learning',
    duration: '12 weeks',
  },
  {
    id: 2,
    name: 'Natural Language Processing',
    description: 'Learn to process and analyze text data',
    image: '/images/courses/nlp.jpg',
    category: 'NLP',
    duration: '8 weeks',
  },
]

export default function Dashboard() {
  return (
    <Layout>
      <div className="space-y-8">
        {/* Stats */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <motion.div
              key={stat.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-900/5 dark:bg-gray-800 dark:ring-gray-800"
            >
              <div className="flex items-center gap-4">
                <div className="rounded-lg bg-primary-50 p-3 dark:bg-primary-900/20">
                  <stat.icon className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <p className="text-sm font-medium leading-6 text-gray-600 dark:text-gray-400">
                    {stat.name}
                  </p>
                  <p className="mt-2 flex items-baseline gap-x-2">
                    <span className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                      {stat.value}
                    </span>
                  </p>
                </div>
              </div>
              <div className="mt-3">
                <div className="flex items-center gap-x-2 text-sm text-green-600 dark:text-green-400">
                  <span>{stat.change}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Active Courses */}
        <div>
          <h2 className="mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
            Active Courses
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {activeCourses.map((course) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="group overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-gray-900/5 transition-all hover:shadow-md dark:bg-gray-800 dark:ring-gray-800"
              >
                <div className="aspect-w-16 aspect-h-9 relative">
                  <div className="absolute inset-0 bg-gray-100 dark:bg-gray-700">
                    {/* Course image would go here */}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {course.name}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    {course.category}
                  </p>
                  <div className="mt-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-400">
                        Progress
                      </span>
                      <span className="font-medium text-gray-900 dark:text-white">
                        {course.progress}%
                      </span>
                    </div>
                    <div className="mt-2 h-2 rounded-full bg-gray-100 dark:bg-gray-700">
                      <div
                        className="h-2 rounded-full bg-primary-500"
                        style={{ width: `${course.progress}%` }}
                      />
                    </div>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                      {course.timeLeft}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Recommended Courses */}
        <div>
          <h2 className="mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
            Recommended for You
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {recommendations.map((course) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="group overflow-hidden rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-900/5 transition-all hover:shadow-md dark:bg-gray-800 dark:ring-gray-800"
              >
                <div className="flex gap-6">
                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-700">
                    {/* Course image would go here */}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {course.name}
                    </h3>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                      {course.description}
                    </p>
                    <div className="mt-4 flex items-center gap-4">
                      <span className="inline-flex items-center rounded-full bg-primary-50 px-2 py-1 text-xs font-medium text-primary-700 ring-1 ring-inset ring-primary-700/10 dark:bg-primary-900/20 dark:text-primary-400 dark:ring-primary-400/20">
                        {course.category}
                      </span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {course.duration}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}
