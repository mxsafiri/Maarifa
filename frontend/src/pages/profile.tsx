import Layout from '@/components/layout/Layout'
import { motion } from 'framer-motion'
import {
  UserCircleIcon,
  AcademicCapIcon,
  TrophyIcon,
  ChartBarIcon,
  CogIcon,
  BellIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline'

const achievements = [
  {
    id: 1,
    name: 'Quick Learner',
    description: 'Completed 5 courses in one month',
    date: 'Earned on Feb 15, 2025',
    icon: TrophyIcon,
    color: 'from-yellow-500 to-orange-500',
  },
  {
    id: 2,
    name: 'AI Master',
    description: 'Achieved excellence in AI specialization',
    date: 'Earned on Jan 30, 2025',
    icon: ChartBarIcon,
    color: 'from-purple-500 to-indigo-500',
  },
  {
    id: 3,
    name: 'Coding Expert',
    description: 'Completed advanced programming track',
    date: 'Earned on Jan 15, 2025',
    icon: AcademicCapIcon,
    color: 'from-blue-500 to-cyan-500',
  },
]

const settings = [
  {
    id: 'account',
    name: 'Account Settings',
    description: 'Manage your account details and preferences',
    icon: UserCircleIcon,
    href: '/settings/account',
  },
  {
    id: 'notifications',
    name: 'Notifications',
    description: 'Configure your notification preferences',
    icon: BellIcon,
    href: '/settings/notifications',
  },
  {
    id: 'privacy',
    name: 'Privacy & Security',
    description: 'Manage your privacy and security settings',
    icon: ShieldCheckIcon,
    href: '/settings/privacy',
  },
  {
    id: 'preferences',
    name: 'Learning Preferences',
    description: 'Customize your learning experience',
    icon: CogIcon,
    href: '/settings/preferences',
  },
]

export default function Profile() {
  return (
    <Layout>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="py-12">
          <div className="flex items-center space-x-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative h-32 w-32 overflow-hidden rounded-full bg-gray-100"
            >
              <img
                src="/images/profile.jpg"
                alt="Profile"
                className="h-full w-full object-cover"
              />
            </motion.div>
            <div>
              <motion.h1
                className="text-4xl font-semibold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Sarah Johnson
              </motion.h1>
              <motion.p
                className="mt-2 text-lg text-gray-400"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                AI & Machine Learning Enthusiast
              </motion.p>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold">Recent Achievements</h2>
          <div className="grid gap-6 lg:grid-cols-3">
            {achievements.map((achievement) => (
              <div
                key={achievement.id}
                className="rounded-3xl bg-gray-50 p-8 dark:bg-gray-800/50"
              >
                <div className={`inline-flex rounded-xl bg-gradient-to-br ${achievement.color} p-2 opacity-80`}>
                  <achievement.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mt-6 text-lg font-semibold">{achievement.name}</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  {achievement.description}
                </p>
                <p className="mt-4 text-sm text-gray-400">{achievement.date}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Settings */}
        <motion.div
          className="mt-12 space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h2 className="text-2xl font-semibold">Settings</h2>
          <div className="grid gap-6 lg:grid-cols-2">
            {settings.map((setting) => (
              <a
                key={setting.id}
                href={setting.href}
                className="group rounded-3xl bg-gray-50 p-8 transition hover:bg-gray-100 dark:bg-gray-800/50 dark:hover:bg-gray-700/50"
              >
                <div className="flex items-center space-x-4">
                  <div className="rounded-xl bg-gray-200 p-2 dark:bg-gray-700">
                    <setting.icon className="h-6 w-6 text-gray-600 dark:text-gray-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold group-hover:text-primary">
                      {setting.name}
                    </h3>
                    <p className="mt-1 text-gray-600 dark:text-gray-400">
                      {setting.description}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </motion.div>

        {/* Danger Zone */}
        <motion.div
          className="mt-12 space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-2xl font-semibold text-red-500">Danger Zone</h2>
          <div className="rounded-3xl border-2 border-red-500/20 bg-red-500/5 p-8">
            <h3 className="text-lg font-semibold text-red-500">Delete Account</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Once you delete your account, there is no going back. Please be certain.
            </p>
            <button className="mt-6 rounded-lg bg-red-500 px-4 py-2 text-sm font-medium text-white hover:bg-red-600">
              Delete Account
            </button>
          </div>
        </motion.div>
      </div>
    </Layout>
  )
}
