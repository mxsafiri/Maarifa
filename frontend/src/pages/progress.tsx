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
      <div className="space-y-8 dark:bg-gray-900">
        {/* Header */}
        <div>
          <motion.h1 
            className="text-4xl font-bold tracking-tight dark:text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Your Progress
          </motion.h1>
          <motion.p 
            className="mt-2 text-lg text-gray-400 dark:text-gray-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Track your learning journey and achievements.
          </motion.p>
        </div>

        {/* Stats */}
        <motion.div 
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {stats.map((stat) => (
            <div key={stat.name} className="card dark:bg-gray-800 dark:text-white">
              <div className="flex items-center p-6">
                <div className={`rounded-xl bg-gradient-to-br ${stat.color} p-2 opacity-80`}>
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-400 dark:text-gray-200">{stat.name}</p>
                  <p className="mt-1 text-2xl font-semibold">{stat.value}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Course Progress */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-2xl font-bold dark:text-white">Course Progress</h2>
          <div className="space-y-4">
            {courses.map((course) => (
              <div key={course.id} className="card overflow-hidden dark:bg-gray-800 dark:text-white">
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">{course.name}</h3>
                    <span className="text-lg font-semibold">{course.progress}%</span>
                  </div>
                  <div className="mt-4">
                    <div className="h-2 rounded-full bg-gray-700 dark:bg-gray-600">
                      <div
                        className={`h-2 rounded-full bg-gradient-to-r ${course.color}`}
                        style={{ width: `${course.progress}%` }}
                      />
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-between text-sm text-gray-400 dark:text-gray-200">
                    <div className="flex items-center">
                      <BookOpenIcon className="mr-1.5 h-4 w-4" />
                      {course.completedLessons}/{course.totalLessons} lessons
                    </div>
                    <div className="flex items-center">
                      <ClockIcon className="mr-1.5 h-4 w-4" />
                      {course.timeSpent}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold dark:text-white">Achievements</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {achievements.map((achievement) => (
              <div
                key={achievement.id}
                className={`card ${
                  achievement.earned ? 'opacity-100' : 'opacity-50'
                } dark:bg-gray-800 dark:text-white`}
              >
                <div className="p-6">
                  <div className={`inline-flex rounded-xl bg-gradient-to-br ${achievement.color} p-2 opacity-80`}>
                    <achievement.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">{achievement.name}</h3>
                  <p className="mt-2 text-sm text-gray-400 dark:text-gray-200">
                    {achievement.description}
                  </p>
                  {achievement.earned && (
                    <div className="mt-4">
                      <span className="inline-flex items-center rounded-full bg-green-500/10 px-2 py-1 text-xs font-medium text-green-500">
                        Earned
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </Layout>
  )
}
