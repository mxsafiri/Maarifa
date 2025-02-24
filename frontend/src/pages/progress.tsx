import Layout from '@/components/layout/Layout'
import { motion } from 'framer-motion'
import {
  ArrowTrendingUpIcon,
  ClockIcon,
  FireIcon,
  TrophyIcon,
  BookOpenIcon,
  AcademicCapIcon,
  ChartBarIcon,
} from '@heroicons/react/24/outline'

const stats = [
  { name: 'Learning Streak', value: '15 days', icon: FireIcon, change: '+5', changeType: 'positive' },
  { name: 'Hours Learned', value: '45.2', icon: ClockIcon, change: '+12.3', changeType: 'positive' },
  { name: 'Skills Mastered', value: '8', icon: TrophyIcon, change: '+2', changeType: 'positive' },
  { name: 'Course Completion', value: '85%', icon: BookOpenIcon, change: '+15%', changeType: 'positive' },
]

const skillProgress = [
  { name: 'Digital Literacy', progress: 90, level: 'Advanced' },
  { name: 'Machine Learning', progress: 60, level: 'Intermediate' },
  { name: 'Problem Solving', progress: 75, level: 'Advanced' },
  { name: 'Data Analysis', progress: 45, level: 'Beginner' },
]

const recentActivities = [
  {
    id: 1,
    title: 'Completed "Introduction to AI" module',
    date: '2 hours ago',
    type: 'completion',
    points: 100,
  },
  {
    id: 2,
    title: 'Achieved "Quick Learner" badge',
    date: '1 day ago',
    type: 'achievement',
    points: 50,
  },
  {
    id: 3,
    title: 'Started "Data Science Basics" course',
    date: '2 days ago',
    type: 'started',
    points: 0,
  },
]

const learningInsights = [
  {
    title: 'Peak Learning Hours',
    description: 'You learn best between 9 AM and 11 AM',
    icon: ChartBarIcon,
  },
  {
    title: 'Preferred Learning Style',
    description: 'Visual and hands-on learning works best for you',
    icon: AcademicCapIcon,
  },
  {
    title: 'Recommended Focus',
    description: 'Consider spending more time on practical exercises',
    icon: ArrowTrendingUpIcon,
  },
]

export default function Progress() {
  return (
    <Layout>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">Learning Progress</h1>
          <p className="mt-2 text-lg text-gray-600">
            Track your learning journey and see your growth
          </p>
        </div>

        {/* Stats */}
        <div>
          <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((item, index) => (
              <motion.div
                key={item.name}
                className="relative overflow-hidden rounded-lg bg-white px-4 pb-12 pt-5 shadow sm:px-6 sm:pt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <dt>
                  <div className="absolute rounded-md bg-indigo-500 p-3">
                    <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  <p className="ml-16 truncate text-sm font-medium text-gray-500">{item.name}</p>
                </dt>
                <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
                  <p className="text-2xl font-semibold text-gray-900">{item.value}</p>
                  <p
                    className={`ml-2 flex items-baseline text-sm font-semibold ${
                      item.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                    }`}
                  >
                    {item.change}
                  </p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>

        {/* Skill Progress */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="rounded-lg bg-white p-6 shadow">
            <h2 className="text-lg font-medium text-gray-900">Skill Progress</h2>
            <div className="mt-6 space-y-6">
              {skillProgress.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-900">{skill.name}</p>
                      <p className="text-sm text-gray-500">{skill.level}</p>
                    </div>
                    <span className="text-sm font-medium text-gray-900">{skill.progress}%</span>
                  </div>
                  <div className="mt-2">
                    <div className="overflow-hidden rounded-full bg-gray-200">
                      <div
                        className="h-2 rounded-full bg-indigo-600"
                        style={{ width: `${skill.progress}%` }}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Recent Activities */}
          <div className="rounded-lg bg-white p-6 shadow">
            <h2 className="text-lg font-medium text-gray-900">Recent Activities</h2>
            <div className="mt-6 flow-root">
              <ul role="list" className="-mb-8">
                {recentActivities.map((activity, index) => (
                  <motion.li
                    key={activity.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="relative pb-8">
                      {index !== recentActivities.length - 1 ? (
                        <span
                          className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200"
                          aria-hidden="true"
                        />
                      ) : null}
                      <div className="relative flex space-x-3">
                        <div>
                          <span
                            className={`flex h-8 w-8 items-center justify-center rounded-full ${
                              activity.type === 'completion'
                                ? 'bg-green-500'
                                : activity.type === 'achievement'
                                ? 'bg-yellow-500'
                                : 'bg-blue-500'
                            } ring-8 ring-white`}
                          >
                            <TrophyIcon className="h-5 w-5 text-white" aria-hidden="true" />
                          </span>
                        </div>
                        <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                          <div>
                            <p className="text-sm text-gray-500">{activity.title}</p>
                          </div>
                          <div className="whitespace-nowrap text-right text-sm text-gray-500">
                            <span>{activity.date}</span>
                            {activity.points > 0 && (
                              <span className="ml-2 text-green-600">+{activity.points} pts</span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* AI Learning Insights */}
        <div className="rounded-lg bg-white p-6 shadow">
          <h2 className="text-lg font-medium text-gray-900">AI Learning Insights</h2>
          <p className="mt-1 text-sm text-gray-500">
            Personalized insights based on your learning patterns
          </p>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {learningInsights.map((insight, index) => (
              <motion.div
                key={insight.title}
                className="rounded-lg border border-gray-200 p-6"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-50">
                  <insight.icon className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="mt-4 text-base font-medium text-gray-900">{insight.title}</h3>
                <p className="mt-2 text-sm text-gray-500">{insight.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}
