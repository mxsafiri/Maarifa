import Layout from '@/components/layout/Layout'
import { motion } from 'framer-motion'
import {
  BookOpenIcon,
  AcademicCapIcon,
  ChartBarIcon,
  ClockIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  LockClosedIcon,
} from '@heroicons/react/24/outline'

const learningStats = [
  {
    name: 'Current Level',
    value: 'Intermediate',
    icon: AcademicCapIcon,
    iconColor: 'text-blue-500',
  },
  {
    name: 'Completed Courses',
    value: '12/20',
    icon: CheckCircleIcon,
    iconColor: 'text-green-500',
  },
  {
    name: 'Learning Hours',
    value: '45.5',
    icon: ClockIcon,
    iconColor: 'text-purple-500',
  },
  {
    name: 'Overall Progress',
    value: '60%',
    icon: ChartBarIcon,
    iconColor: 'text-yellow-500',
  },
]

const courses = [
  {
    id: 1,
    title: 'Introduction to Digital Literacy',
    description: 'Learn the fundamentals of using digital tools and technologies',
    duration: '4 weeks',
    lessons: 12,
    progress: 100,
    status: 'completed',
  },
  {
    id: 2,
    title: 'Basic Programming Concepts',
    description: 'Understanding the building blocks of programming',
    duration: '6 weeks',
    lessons: 15,
    progress: 65,
    status: 'in-progress',
  },
  {
    id: 3,
    title: 'Data Analysis Fundamentals',
    description: 'Learn to analyze and interpret data effectively',
    duration: '8 weeks',
    lessons: 20,
    progress: 0,
    status: 'locked',
  },
]

const recommendations = [
  {
    id: 1,
    title: 'Advanced Programming',
    description: 'Take your programming skills to the next level',
    match: 95,
    skills: ['Python', 'Problem Solving', 'Algorithms'],
  },
  {
    id: 2,
    title: 'Data Visualization',
    description: 'Create compelling visual representations of data',
    match: 88,
    skills: ['Statistics', 'Design', 'Analytics'],
  },
]

export default function LearningPath() {
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
            Your Learning Path
          </motion.h1>
          <motion.p 
            className="mt-2 text-lg text-gray-400"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Track your progress and continue your learning journey
          </motion.p>
        </div>

        {/* Learning Stats */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {learningStats.map((stat, index) => (
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
                  <div className="ml-4">
                    <p className="text-sm text-gray-400">{stat.name}</p>
                    <p className="mt-1 text-xl font-semibold text-white">{stat.value}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Current Courses */}
        <motion.div
          className="card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="p-6">
            <h2 className="text-lg font-medium text-white">Current Courses</h2>
            <div className="mt-6 space-y-6">
              {courses.map((course) => (
                <div
                  key={course.id}
                  className="rounded-lg bg-[#22252D] p-6 transition-all hover:bg-[#2D3748]"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center">
                        <h3 className="text-lg font-medium text-white">{course.title}</h3>
                        {course.status === 'completed' && (
                          <CheckCircleIcon className="ml-2 h-5 w-5 text-green-500" />
                        )}
                        {course.status === 'locked' && (
                          <LockClosedIcon className="ml-2 h-5 w-5 text-gray-500" />
                        )}
                      </div>
                      <p className="mt-1 text-sm text-gray-400">{course.description}</p>
                      <div className="mt-4 flex items-center space-x-4 text-sm text-gray-400">
                        <div className="flex items-center">
                          <ClockIcon className="mr-1 h-4 w-4" />
                          {course.duration}
                        </div>
                        <div className="flex items-center">
                          <BookOpenIcon className="mr-1 h-4 w-4" />
                          {course.lessons} lessons
                        </div>
                      </div>
                    </div>
                    {course.status !== 'locked' && (
                      <button className="button-primary">
                        {course.status === 'completed' ? 'Review' : 'Continue'}
                      </button>
                    )}
                  </div>
                  {course.status !== 'locked' && (
                    <div className="mt-4">
                      <div className="progress-bar">
                        <div 
                          className="progress-bar-fill"
                          style={{ width: `${course.progress}%` }}
                        />
                      </div>
                      <p className="mt-1 text-right text-sm text-gray-400">{course.progress}% Complete</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Recommended Courses */}
        <motion.div
          className="card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="p-6">
            <h2 className="text-lg font-medium text-white">Recommended for You</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {recommendations.map((course) => (
                <div
                  key={course.id}
                  className="group rounded-lg bg-[#22252D] p-6 transition-all hover:bg-[#2D3748]"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-medium text-white">{course.title}</h3>
                      <p className="mt-1 text-sm text-gray-400">{course.description}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {course.skills.map((skill) => (
                          <span
                            key={skill}
                            className="rounded-full bg-blue-500/20 px-2.5 py-0.5 text-xs font-medium text-blue-500"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-medium text-green-500">{course.match}% Match</span>
                    </div>
                  </div>
                  <button className="mt-4 flex w-full items-center justify-center space-x-2 rounded-lg border border-[#3B82F6] bg-[#3B82F6]/10 py-2 text-sm font-medium text-[#3B82F6] transition-colors hover:bg-[#3B82F6] hover:text-white">
                    <span>Start Learning</span>
                    <ArrowRightIcon className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </Layout>
  )
}
