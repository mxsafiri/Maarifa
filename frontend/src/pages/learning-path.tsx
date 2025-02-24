import Layout from '@/components/layout/Layout'
import { motion } from 'framer-motion'
import {
  AcademicCapIcon,
  BeakerIcon,
  CodeBracketIcon,
  RocketLaunchIcon,
  CheckCircleIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline'

const paths = [
  {
    id: 1,
    title: 'Computer Science Fundamentals',
    description: 'Master the core concepts of computer science and programming',
    icon: CodeBracketIcon,
    color: 'from-blue-500 to-cyan-500',
    progress: 75,
    modules: [
      { name: 'Introduction to Programming', completed: true },
      { name: 'Data Structures', completed: true },
      { name: 'Algorithms', completed: true },
      { name: 'Software Design', completed: false },
    ],
  },
  {
    id: 2,
    title: 'Artificial Intelligence',
    description: 'Explore the fascinating world of AI and machine learning',
    icon: BeakerIcon,
    color: 'from-purple-500 to-indigo-500',
    progress: 45,
    modules: [
      { name: 'Machine Learning Basics', completed: true },
      { name: 'Neural Networks', completed: true },
      { name: 'Deep Learning', completed: false },
      { name: 'AI Ethics', completed: false },
    ],
  },
  {
    id: 3,
    title: 'Web Development',
    description: 'Build modern web applications from front to back',
    icon: RocketLaunchIcon,
    color: 'from-green-500 to-emerald-500',
    progress: 90,
    modules: [
      { name: 'HTML & CSS', completed: true },
      { name: 'JavaScript', completed: true },
      { name: 'React & Next.js', completed: true },
      { name: 'Backend Development', completed: false },
    ],
  },
]

const recommendations = [
  {
    id: 1,
    title: 'Advanced Machine Learning',
    description: 'Take your AI knowledge to the next level',
    icon: BeakerIcon,
    color: 'from-orange-500 to-pink-500',
    duration: '12 weeks',
    level: 'Advanced',
  },
  {
    id: 2,
    title: 'Cloud Computing',
    description: 'Master modern cloud infrastructure',
    icon: AcademicCapIcon,
    color: 'from-yellow-500 to-orange-500',
    duration: '8 weeks',
    level: 'Intermediate',
  },
]

export default function LearningPath() {
  return (
    <Layout>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="py-24 text-center">
          <motion.h1
            className="text-5xl font-semibold tracking-tight sm:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Your Learning Journey
          </motion.h1>
          <motion.p
            className="mx-auto mt-6 max-w-2xl text-xl text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Track your progress and discover new opportunities to grow your skills.
          </motion.p>
        </div>

        {/* Current Paths */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl font-semibold">Current Learning Paths</h2>
          <div className="grid gap-8 lg:grid-cols-2">
            {paths.map((path) => (
              <div
                key={path.id}
                className="group relative overflow-hidden rounded-3xl bg-gray-50 p-8 dark:bg-gray-800/50"
              >
                <div className="flex items-center justify-between">
                  <div className={`rounded-xl bg-gradient-to-br ${path.color} p-2 opacity-80`}>
                    <path.icon className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-lg font-semibold">{path.progress}%</span>
                </div>
                <h3 className="mt-6 text-2xl font-semibold">{path.title}</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  {path.description}
                </p>
                <div className="mt-6 space-y-3">
                  {path.modules.map((module, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 text-sm"
                    >
                      <CheckCircleIcon
                        className={`h-5 w-5 ${
                          module.completed
                            ? 'text-green-500'
                            : 'text-gray-300 dark:text-gray-600'
                        }`}
                      />
                      <span
                        className={
                          module.completed
                            ? ''
                            : 'text-gray-400 dark:text-gray-500'
                        }
                      >
                        {module.name}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <div className="h-2 rounded-full bg-gray-200 dark:bg-gray-700">
                    <div
                      className={`h-2 rounded-full bg-gradient-to-r ${path.color}`}
                      style={{ width: `${path.progress}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Recommended Paths */}
        <motion.div
          className="mt-24 space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-3xl font-semibold">Recommended for You</h2>
          <div className="grid gap-8 sm:grid-cols-2">
            {recommendations.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-3xl bg-gray-50 p-8 dark:bg-gray-800/50"
              >
                <div className={`rounded-xl bg-gradient-to-br ${item.color} p-2 opacity-80`}>
                  <item.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mt-6 text-2xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>
                <div className="mt-6 flex items-center space-x-4 text-sm text-gray-500">
                  <span>{item.duration}</span>
                  <span>•</span>
                  <span>{item.level}</span>
                </div>
                <a
                  href={`/path/${item.id}`}
                  className="mt-8 inline-flex items-center text-primary hover:underline"
                >
                  Start learning <ArrowRightIcon className="ml-2 h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </Layout>
  )
}
