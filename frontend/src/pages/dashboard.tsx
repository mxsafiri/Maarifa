import Layout from '@/components/layout/Layout'
import { motion } from 'framer-motion'
import {
  UsersIcon,
  BookOpenIcon,
  ClockIcon,
  ChartBarIcon,
} from '@heroicons/react/24/outline'

const stats = [
  {
    name: 'Active Students',
    value: '248',
    change: '+12',
    changeType: 'increase',
    subtext: 'new this week',
    icon: UsersIcon,
    iconColor: 'text-blue-500',
  },
  {
    name: 'Lessons Today',
    value: '8',
    change: '3',
    changeType: 'neutral',
    subtext: 'completed',
    icon: BookOpenIcon,
    iconColor: 'text-green-500',
  },
  {
    name: 'Average Progress',
    value: '85%',
    change: '+5%',
    changeType: 'increase',
    subtext: 'from last week',
    icon: ChartBarIcon,
    iconColor: 'text-yellow-500',
  },
  {
    name: 'Time Engaged',
    value: '4.2h',
    change: '+1.1h',
    changeType: 'increase',
    subtext: 'Average per student',
    icon: ClockIcon,
    iconColor: 'text-purple-500',
  },
]

const recentActivities = [
  {
    id: 1,
    title: 'Colors and Shapes',
    time: '10:00 AM',
    students: 12,
    completion: 85,
    type: 'lesson',
  },
  {
    id: 2,
    title: 'Weekly Progress Goals Met',
    time: '9:30 AM',
    students: 8,
    completion: 100,
    type: 'achievement',
  },
  {
    id: 3,
    title: 'Reading Fundamentals',
    time: 'Yesterday',
    students: 15,
    completion: 92,
    type: 'lesson',
  },
]

const upcomingLessons = [
  {
    id: 1,
    title: 'Numbers Fun',
    time: '2:00 PM',
    enrolled: 18,
    subject: 'Mathematics',
  },
  {
    id: 2,
    title: 'Story Time',
    time: '3:30 PM',
    enrolled: 22,
    subject: 'Language & Literacy',
  },
  {
    id: 3,
    title: 'Art Expression',
    time: 'Tomorrow, 10:00 AM',
    enrolled: 16,
    subject: 'Art & Creativity',
  },
]

export default function Dashboard() {
  return (
    <Layout>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <motion.h1 
            className="text-4xl font-bold tracking-tight text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Welcome Back
          </motion.h1>
          <motion.p 
            className="mt-2 text-lg text-gray-400"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Your daily overview of student progress and upcoming activities
          </motion.p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.name}
              className="card overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <stat.icon className={`h-6 w-6 ${stat.iconColor}`} aria-hidden="true" />
                  </div>
                  <div className="ml-4 flex-1">
                    <div className="flex items-baseline">
                      <p className="text-2xl font-semibold text-white">{stat.value}</p>
                      <p className={`ml-2 text-sm font-medium ${
                        stat.changeType === 'increase' ? 'text-green-500' : 
                        stat.changeType === 'decrease' ? 'text-red-500' : 
                        'text-gray-400'
                      }`}>
                        {stat.change}
                      </p>
                    </div>
                    <p className="text-sm text-gray-400">{stat.name}</p>
                    <p className="mt-1 text-xs text-gray-500">{stat.subtext}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Recent Activities and Upcoming Lessons */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Recent Activities */}
          <motion.div
            className="card"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="p-6">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-medium text-white">Recent Activities</h2>
                <button className="text-sm text-blue-500 hover:text-blue-400">View all</button>
              </div>
              <div className="mt-6 flow-root">
                <ul role="list" className="-mb-8">
                  {recentActivities.map((activity, activityIdx) => (
                    <li key={activity.id}>
                      <div className="relative pb-8">
                        {activityIdx !== recentActivities.length - 1 ? (
                          <span
                            className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-[#2D3748]"
                            aria-hidden="true"
                          />
                        ) : null}
                        <div className="relative flex items-center space-x-3">
                          <div>
                            <span className={`flex h-8 w-8 items-center justify-center rounded-full ${
                              activity.type === 'lesson' ? 'bg-blue-500/20 text-blue-500' :
                              'bg-yellow-500/20 text-yellow-500'
                            }`}>
                              {activity.type === 'lesson' ? (
                                <BookOpenIcon className="h-5 w-5" />
                              ) : (
                                <ChartBarIcon className="h-5 w-5" />
                              )}
                            </span>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <p className="text-sm font-medium text-white">{activity.title}</p>
                              <p className="text-xs text-gray-500">{activity.time}</p>
                            </div>
                            <div className="mt-1 flex items-center space-x-4">
                              <span className="text-xs text-gray-400">
                                {activity.students} students
                              </span>
                              <div className="flex-1">
                                <div className="progress-bar">
                                  <div 
                                    className="progress-bar-fill"
                                    style={{ width: `${activity.completion}%` }}
                                  />
                                </div>
                              </div>
                              <span className="text-xs text-gray-400">
                                {activity.completion}%
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Upcoming Lessons */}
          <motion.div
            className="card"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="p-6">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-medium text-white">Upcoming Lessons</h2>
                <button className="text-sm text-blue-500 hover:text-blue-400">View all</button>
              </div>
              <div className="mt-6 space-y-4">
                {upcomingLessons.map((lesson) => (
                  <div
                    key={lesson.id}
                    className="flex items-center justify-between rounded-lg bg-[#22252D] p-4 transition-colors hover:bg-[#2D3748]"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="bg-blue-500/20 text-blue-500 p-2 rounded-lg">
                        <BookOpenIcon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white">{lesson.title}</p>
                        <div className="mt-1 flex items-center space-x-2 text-xs text-gray-400">
                          <span>{lesson.time}</span>
                          <span>•</span>
                          <span>{lesson.enrolled} enrolled</span>
                          <span>•</span>
                          <span>{lesson.subject}</span>
                        </div>
                      </div>
                    </div>
                    <button className="button-primary text-sm">Start</button>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  )
}
