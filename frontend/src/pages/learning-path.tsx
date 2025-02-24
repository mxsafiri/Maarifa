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
    iconColor: 'text-primary',
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
    iconColor: 'text-primary',
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
            className="text-4xl font-bold tracking-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Your Learning Path
          </motion.h1>
          <motion.p 
            className="mt-2 text-lg text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Track your progress and continue your learning journey
          </motion.p>
        </div>

        {/* Stats */}
        <motion.div 
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {learningStats.map((stat) => (
            <div key={stat.name} className="card">
              <div className="flex items-center">
                <div className={`rounded-lg p-2 ${stat.iconColor} bg-opacity-10`}>
                  <stat.icon className="h-6 w-6" />
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-400">{stat.name}</p>
                  <p className="mt-1 text-xl font-semibold">{stat.value}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Current Courses */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-2xl font-bold">Current Courses</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <div key={course.id} className="card group">
                <div className="flex h-full flex-col">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold">{course.title}</h3>
                    <p className="mt-2 text-sm text-gray-400">{course.description}</p>
                    <div className="mt-4 flex items-center gap-4">
                      <div className="flex items-center text-sm text-gray-400">
                        <ClockIcon className="mr-1.5 h-4 w-4" />
                        {course.duration}
                      </div>
                      <div className="flex items-center text-sm text-gray-400">
                        <BookOpenIcon className="mr-1.5 h-4 w-4" />
                        {course.lessons} lessons
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    {course.status === 'locked' ? (
                      <div className="flex items-center justify-between">
                        <span className="flex items-center text-sm text-gray-400">
                          <LockClosedIcon className="mr-1.5 h-4 w-4" />
                          Locked
                        </span>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-400">Progress</span>
                          <span className="font-medium">{course.progress}%</span>
                        </div>
                        <div className="h-2 rounded-full bg-gray-700">
                          <div
                            className="h-2 rounded-full bg-primary transition-all"
                            style={{ width: `${course.progress}%` }}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Recommendations */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold">Recommended Next Steps</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {recommendations.map((course) => (
              <div key={course.id} className="card group cursor-pointer">
                <div className="flex justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold group-hover:text-primary">
                      {course.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-400">{course.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {course.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full bg-card-hover px-3 py-1 text-xs text-gray-400"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="ml-4 flex flex-col items-end">
                    <div className="rounded-full bg-primary bg-opacity-10 px-3 py-1">
                      <span className="text-sm font-medium text-primary">
                        {course.match}% Match
                      </span>
                    </div>
                    <ArrowRightIcon className="mt-4 h-5 w-5 text-gray-400 transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </Layout>
  )
}
