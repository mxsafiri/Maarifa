import Layout from '@/components/layout/Layout'
import { ArrowUpIcon, BookOpenIcon, UserGroupIcon, AcademicCapIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'

const stats = [
  { id: 1, name: 'Courses Completed', stat: '8', icon: AcademicCapIcon, change: '+4.75%', changeType: 'positive' },
  { id: 2, name: 'Learning Hours', stat: '24.5', icon: BookOpenIcon, change: '+54.02%', changeType: 'positive' },
  { id: 3, name: 'Community Points', stat: '1,280', icon: UserGroupIcon, change: '+112.01%', changeType: 'positive' },
]

const recommendedCourses = [
  {
    id: 1,
    title: 'Introduction to AI',
    description: 'Learn the basics of Artificial Intelligence and Machine Learning',
    progress: 0,
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
  {
    id: 2,
    title: 'Digital Literacy',
    description: 'Master essential digital skills for the modern world',
    progress: 25,
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
  {
    id: 3,
    title: 'Creative Problem Solving',
    description: 'Develop critical thinking and problem-solving skills',
    progress: 60,
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
]

export default function Dashboard() {
  return (
    <Layout>
      <div className="space-y-8">
        {/* Welcome Section */}
        <div className="sm:flex sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Welcome back, John!</h1>
            <p className="mt-2 text-lg text-gray-600">Continue your learning journey where you left off.</p>
          </div>
        </div>

        {/* Stats */}
        <div>
          <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {stats.map((item) => (
              <motion.div
                key={item.id}
                className="relative overflow-hidden rounded-lg bg-white px-4 pb-12 pt-5 shadow sm:px-6 sm:pt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: item.id * 0.1 }}
              >
                <dt>
                  <div className="absolute rounded-md bg-indigo-500 p-3">
                    <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  <p className="ml-16 truncate text-sm font-medium text-gray-500">{item.name}</p>
                </dt>
                <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
                  <p className="text-2xl font-semibold text-gray-900">{item.stat}</p>
                  <p
                    className={`ml-2 flex items-baseline text-sm font-semibold ${
                      item.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                    }`}
                  >
                    {item.changeType === 'positive' ? (
                      <ArrowUpIcon className="h-5 w-5 flex-shrink-0 self-center text-green-500" aria-hidden="true" />
                    ) : null}
                    <span className="sr-only">{item.changeType === 'positive' ? 'Increased' : 'Decreased'} by</span>
                    {item.change}
                  </p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>

        {/* Recommended Courses */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Recommended for You</h2>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {recommendedCourses.map((course) => (
              <motion.div
                key={course.id}
                className="relative flex flex-col overflow-hidden rounded-lg bg-white shadow transition-shadow hover:shadow-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: course.id * 0.1 }}
              >
                <div className="flex-shrink-0">
                  <img className="h-48 w-full object-cover" src={course.image} alt="" />
                </div>
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900">{course.title}</h3>
                    <p className="mt-3 text-base text-gray-500">{course.description}</p>
                  </div>
                  <div className="mt-6">
                    <div className="relative">
                      <div className="overflow-hidden rounded-full bg-gray-200">
                        <div
                          className="h-2 rounded-full bg-indigo-600"
                          style={{ width: `${course.progress}%` }}
                        />
                      </div>
                      <div className="mt-2 flex items-center justify-between text-sm">
                        <p className="text-gray-500">Progress</p>
                        <p className="font-medium text-indigo-600">{course.progress}%</p>
                      </div>
                    </div>
                    <button className="mt-4 w-full rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                      {course.progress === 0 ? 'Start Course' : 'Continue Learning'}
                    </button>
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
