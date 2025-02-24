import Layout from '@/components/layout/Layout'
import { motion } from 'framer-motion'
import {
  BeakerIcon,
  BookOpenIcon,
  CheckCircleIcon,
  ClockIcon,
  StarIcon,
} from '@heroicons/react/24/outline'

const learningPath = [
  {
    id: 1,
    title: 'Foundations of Digital Literacy',
    description: 'Master the essential digital skills needed in today\'s world',
    duration: '4 weeks',
    difficulty: 'Beginner',
    progress: 100,
    status: 'completed',
    modules: [
      { name: 'Introduction to Computing', completed: true },
      { name: 'Internet and Web Basics', completed: true },
      { name: 'Digital Communication', completed: true },
      { name: 'Online Safety and Privacy', completed: true },
    ],
  },
  {
    id: 2,
    title: 'Introduction to AI and Machine Learning',
    description: 'Understand the basics of artificial intelligence and its applications',
    duration: '6 weeks',
    difficulty: 'Intermediate',
    progress: 65,
    status: 'in-progress',
    modules: [
      { name: 'What is Artificial Intelligence?', completed: true },
      { name: 'Machine Learning Fundamentals', completed: true },
      { name: 'Neural Networks Basics', completed: false },
      { name: 'AI Applications in Real World', completed: false },
    ],
  },
  {
    id: 3,
    title: 'Creative Problem Solving',
    description: 'Learn systematic approaches to solving complex problems',
    duration: '4 weeks',
    difficulty: 'Intermediate',
    progress: 0,
    status: 'not-started',
    modules: [
      { name: 'Problem-Solving Framework', completed: false },
      { name: 'Critical Thinking Skills', completed: false },
      { name: 'Design Thinking Process', completed: false },
      { name: 'Case Studies and Applications', completed: false },
    ],
  },
]

const recommendations = [
  {
    id: 1,
    title: 'Data Science Essentials',
    description: 'Based on your interest in AI and Machine Learning',
    icon: BeakerIcon,
  },
  {
    id: 2,
    title: 'Advanced Digital Skills',
    description: 'Recommended after completing Digital Literacy',
    icon: BookOpenIcon,
  },
  {
    id: 3,
    title: 'Innovation Management',
    description: 'Complements your problem-solving skills',
    icon: StarIcon,
  },
]

export default function LearningPath() {
  return (
    <Layout>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">Your Learning Path</h1>
          <p className="mt-2 text-lg text-gray-600">
            Personalized learning journey based on your goals and progress
          </p>
        </div>

        {/* Progress Overview */}
        <div className="rounded-lg bg-white p-6 shadow">
          <h2 className="text-xl font-semibold text-gray-900">Progress Overview</h2>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="flex items-center space-x-3 rounded-lg bg-gray-50 p-4">
              <div className="flex-shrink-0">
                <CheckCircleIcon className="h-6 w-6 text-green-500" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">Completed</p>
                <p className="text-2xl font-semibold text-gray-900">1</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 rounded-lg bg-gray-50 p-4">
              <div className="flex-shrink-0">
                <ClockIcon className="h-6 w-6 text-yellow-500" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">In Progress</p>
                <p className="text-2xl font-semibold text-gray-900">1</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 rounded-lg bg-gray-50 p-4">
              <div className="flex-shrink-0">
                <BookOpenIcon className="h-6 w-6 text-gray-500" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">Not Started</p>
                <p className="text-2xl font-semibold text-gray-900">1</p>
              </div>
            </div>
          </div>
        </div>

        {/* Course List */}
        <div className="space-y-6">
          {learningPath.map((course, index) => (
            <motion.div
              key={course.id}
              className="overflow-hidden rounded-lg bg-white shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="px-6 py-5">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900">{course.title}</h3>
                    <p className="mt-1 text-sm text-gray-500">{course.description}</p>
                    <div className="mt-4 flex items-center space-x-4">
                      <div className="flex items-center">
                        <ClockIcon className="h-5 w-5 text-gray-400" />
                        <span className="ml-2 text-sm text-gray-500">{course.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <StarIcon className="h-5 w-5 text-gray-400" />
                        <span className="ml-2 text-sm text-gray-500">{course.difficulty}</span>
                      </div>
                    </div>
                  </div>
                  <div className="ml-6 flex-shrink-0">
                    {course.status === 'completed' ? (
                      <span className="inline-flex items-center rounded-full bg-green-50 px-3 py-1 text-sm font-medium text-green-700">
                        Completed
                      </span>
                    ) : course.status === 'in-progress' ? (
                      <span className="inline-flex items-center rounded-full bg-yellow-50 px-3 py-1 text-sm font-medium text-yellow-700">
                        In Progress
                      </span>
                    ) : (
                      <span className="inline-flex items-center rounded-full bg-gray-50 px-3 py-1 text-sm font-medium text-gray-700">
                        Not Started
                      </span>
                    )}
                  </div>
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
                  <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {course.modules.map((module, moduleIndex) => (
                      <div
                        key={moduleIndex}
                        className="flex items-center space-x-3 rounded-lg border border-gray-200 p-3"
                      >
                        {module.completed ? (
                          <CheckCircleIcon className="h-5 w-5 text-green-500" />
                        ) : (
                          <div className="h-5 w-5 rounded-full border-2 border-gray-300" />
                        )}
                        <span className={`text-sm ${module.completed ? 'text-gray-500' : 'text-gray-700'}`}>
                          {module.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* AI Recommendations */}
        <div className="rounded-lg bg-white p-6 shadow">
          <h2 className="text-xl font-semibold text-gray-900">Recommended for You</h2>
          <p className="mt-1 text-sm text-gray-500">
            Based on your interests and learning progress
          </p>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {recommendations.map((recommendation, index) => (
              <motion.div
                key={recommendation.id}
                className="flex flex-col rounded-lg border border-gray-200 p-6"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-50">
                  <recommendation.icon className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">{recommendation.title}</h3>
                <p className="mt-2 text-sm text-gray-500">{recommendation.description}</p>
                <button className="mt-4 rounded-md bg-white px-3 py-2 text-sm font-semibold text-indigo-600 shadow-sm ring-1 ring-inset ring-indigo-200 hover:bg-indigo-50">
                  Learn more
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}
