import { motion } from 'framer-motion'
import Layout from '@/components/layout/Layout'
import {
  AcademicCapIcon,
  BeakerIcon,
  ChartBarIcon,
  CodeBracketIcon,
  LightBulbIcon,
  RocketLaunchIcon,
} from '@heroicons/react/24/outline'

const currentPaths = [
  {
    id: 1,
    name: 'AI & Machine Learning',
    progress: 65,
    completed: 13,
    total: 20,
    icon: BeakerIcon,
    color: 'from-purple-500 to-indigo-500',
  },
  {
    id: 2,
    name: 'Web Development',
    progress: 80,
    completed: 16,
    total: 20,
    icon: CodeBracketIcon,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 3,
    name: 'Data Science',
    progress: 45,
    completed: 9,
    total: 20,
    icon: ChartBarIcon,
    color: 'from-green-500 to-emerald-500',
  },
]

const recommendedPaths = [
  {
    id: 1,
    name: 'Cloud Architecture',
    description: 'Master cloud infrastructure and deployment',
    duration: '12 weeks',
    level: 'Advanced',
    students: '2.5k+',
    icon: RocketLaunchIcon,
  },
  {
    id: 2,
    name: 'Blockchain Development',
    description: 'Build decentralized applications and smart contracts',
    duration: '10 weeks',
    level: 'Intermediate',
    students: '1.8k+',
    icon: LightBulbIcon,
  },
  {
    id: 3,
    name: 'DevOps Engineering',
    description: 'Learn CI/CD, containerization, and automation',
    duration: '14 weeks',
    level: 'Advanced',
    students: '3k+',
    icon: AcademicCapIcon,
  },
]

export default function LearningPath() {
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
            Your Learning Journey
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-2 text-gray-600 dark:text-gray-400"
          >
            Track your progress and discover new learning paths tailored for you.
          </motion.p>
        </div>

        {/* Current Learning Paths */}
        <section>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            Current Learning Paths
          </motion.h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {currentPaths.map((path, index) => (
              <motion.div
                key={path.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="group overflow-hidden rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-900/5 transition-all hover:shadow-md dark:bg-gray-800 dark:ring-gray-800"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`rounded-xl bg-gradient-to-br ${path.color} p-3`}
                  >
                    <path.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {path.name}
                    </h3>
                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                      {path.completed} of {path.total} modules completed
                    </p>
                  </div>
                </div>
                <div className="mt-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">
                      Progress
                    </span>
                    <span className="font-medium text-gray-900 dark:text-white">
                      {path.progress}%
                    </span>
                  </div>
                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-gray-100 dark:bg-gray-700">
                    <div
                      className={`h-full rounded-full bg-gradient-to-r ${path.color}`}
                      style={{ width: `${path.progress}%` }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Recommended Paths */}
        <section>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            Recommended for You
          </motion.h2>
          <div className="grid gap-6 lg:grid-cols-3">
            {recommendedPaths.map((path, index) => (
              <motion.div
                key={path.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="group overflow-hidden rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-900/5 transition-all hover:shadow-md dark:bg-gray-800 dark:ring-gray-800"
              >
                <div className="flex items-center gap-4">
                  <div className="rounded-xl bg-primary-50 p-3 dark:bg-primary-900/20">
                    <path.icon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {path.name}
                    </h3>
                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                      {path.description}
                    </p>
                  </div>
                </div>
                <div className="mt-6 flex flex-wrap gap-4">
                  <span className="inline-flex items-center rounded-full bg-primary-50 px-2 py-1 text-xs font-medium text-primary-700 ring-1 ring-inset ring-primary-700/10 dark:bg-primary-900/20 dark:text-primary-400 dark:ring-primary-400/20">
                    {path.duration}
                  </span>
                  <span className="inline-flex items-center rounded-full bg-primary-50 px-2 py-1 text-xs font-medium text-primary-700 ring-1 ring-inset ring-primary-700/10 dark:bg-primary-900/20 dark:text-primary-400 dark:ring-primary-400/20">
                    {path.level}
                  </span>
                  <span className="inline-flex items-center rounded-full bg-primary-50 px-2 py-1 text-xs font-medium text-primary-700 ring-1 ring-inset ring-primary-700/10 dark:bg-primary-900/20 dark:text-primary-400 dark:ring-primary-400/20">
                    {path.students} students
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  )
}
