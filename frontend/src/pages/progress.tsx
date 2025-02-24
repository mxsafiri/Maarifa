import Layout from '@/components/layout/Layout'
import { motion } from 'framer-motion'
import {
  ChartBarIcon,
  ClockIcon,
  AcademicCapIcon,
  TrophyIcon,
  RocketLaunchIcon,
  FireIcon,
  BookOpenIcon,
} from '@heroicons/react/24/outline'

const achievements = [
  {
    id: 1,
    name: 'Quick Learner',
    description: 'Completed 5 courses in one month',
    icon: RocketLaunchIcon,
    color: 'from-purple-500 to-indigo-500',
    earned: true,
  },
  {
    id: 2,
    name: 'Coding Master',
    description: 'Achieved 100% in all coding challenges',
    icon: TrophyIcon,
    color: 'from-yellow-500 to-orange-500',
    earned: true,
  },
  {
    id: 3,
    name: 'Consistent Learner',
    description: '30-day learning streak',
    icon: FireIcon,
    color: 'from-red-500 to-pink-500',
    earned: false,
  },
]

const courses = [
  {
    id: 1,
    name: 'Python Programming',
    progress: 85,
    totalLessons: 24,
    completedLessons: 20,
    timeSpent: '45h 30m',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 2,
    name: 'Machine Learning Basics',
    progress: 60,
    totalLessons: 32,
    completedLessons: 19,
    timeSpent: '28h 15m',
    color: 'from-purple-500 to-indigo-500',
  },
  {
    id: 3,
    name: 'Web Development',
    progress: 40,
    totalLessons: 40,
    completedLessons: 16,
    timeSpent: '20h 45m',
    color: 'from-green-500 to-emerald-500',
  },
]

const stats = [
  {
    name: 'Total Learning Hours',
    value: '94.5',
    icon: ClockIcon,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'Course Completion Rate',
    value: '85%',
    icon: ChartBarIcon,
    color: 'from-green-500 to-emerald-500',
  },
  {
    name: 'Current Level',
    value: 'Advanced',
    icon: AcademicCapIcon,
    color: 'from-purple-500 to-indigo-500',
  },
]

export default function Progress() {
  return (
    <Layout>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 dark:bg-gray-900">
        {/* Header */}
        <div className="py-8">
          <motion.h1 
            className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Your Learning Progress
          </motion.h1>
          <motion.p
            className="mt-2 text-lg text-gray-500 dark:text-gray-400"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Track your achievements and course progress
          </motion.p>
        </div>

        {/* Stats Overview */}
        <section className="py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className={`absolute inset-0 opacity-10 bg-gradient-to-br ${stat.color}`} />
                <div className="relative flex items-center space-x-4">
                  <stat.icon className={`h-10 w-10 bg-gradient-to-br ${stat.color} rounded-xl p-2 text-white`} />
                  <div>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{stat.name}</p>
                    <p className="text-2xl font-semibold text-gray-900 dark:text-white">{stat.value}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Course Progress */}
        <section className="py-8">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Active Courses</h2>
          <div className="space-y-6">
            {courses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 p-6 shadow-lg"
              >
                <div className={`absolute inset-0 opacity-5 bg-gradient-to-br ${course.color}`} />
                <div className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{course.name}</h3>
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      {course.completedLessons}/{course.totalLessons} lessons
                    </span>
                  </div>
                  <div className="relative pt-1">
                    <div className="flex mb-2 items-center justify-between">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
                          {course.progress}% Complete
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-semibold text-gray-500 dark:text-gray-400">
                          {course.timeSpent} spent
                        </span>
                      </div>
                    </div>
                    <div className="overflow-hidden h-2 mb-4 text-xs flex rounded-full bg-gray-100 dark:bg-gray-700">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${course.progress}%` }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                        className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r ${course.color}`}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Achievements */}
        <section className="py-8">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Recent Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative overflow-hidden rounded-2xl p-6 ${
                  achievement.earned 
                    ? 'bg-white dark:bg-gray-800' 
                    : 'bg-gray-50 dark:bg-gray-800/50'
                } shadow-lg`}
              >
                <div className={`absolute inset-0 opacity-10 bg-gradient-to-br ${achievement.color}`} />
                <div className="relative flex flex-col items-start">
                  <achievement.icon className={`h-8 w-8 bg-gradient-to-br ${achievement.color} rounded-lg p-1.5 text-white ${
                    !achievement.earned && 'opacity-50'
                  }`} />
                  <h3 className={`mt-4 text-lg font-semibold ${
                    achievement.earned 
                      ? 'text-gray-900 dark:text-white' 
                      : 'text-gray-500 dark:text-gray-400'
                  }`}>
                    {achievement.name}
                  </h3>
                  <p className={`mt-2 text-sm ${
                    achievement.earned 
                      ? 'text-gray-500 dark:text-gray-400' 
                      : 'text-gray-400 dark:text-gray-500'
                  }`}>
                    {achievement.description}
                  </p>
                  {!achievement.earned && (
                    <span className="mt-3 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
                      In Progress
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  )
}
