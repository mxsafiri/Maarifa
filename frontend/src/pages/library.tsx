import Layout from '@/components/layout/Layout'
import { motion } from 'framer-motion'
import { useState } from 'react'
import {
  BookOpenIcon,
  AcademicCapIcon,
  BeakerIcon,
  CodeBracketIcon,
  GlobeAltIcon,
  ChartBarIcon,
} from '@heroicons/react/24/outline'

const categories = [
  { name: 'All Courses', icon: BookOpenIcon, count: 48 },
  { name: 'Programming', icon: CodeBracketIcon, count: 16 },
  { name: 'Data Science', icon: ChartBarIcon, count: 12 },
  { name: 'AI & ML', icon: BeakerIcon, count: 8 },
  { name: 'Web Development', icon: GlobeAltIcon, count: 8 },
  { name: 'Computer Science', icon: AcademicCapIcon, count: 4 },
]

const courses = [
  {
    id: 1,
    title: 'Introduction to Python Programming',
    description: 'Learn the fundamentals of Python programming language',
    category: 'Programming',
    level: 'Beginner',
    duration: '6 weeks',
    enrolled: 1234,
    rating: 4.8,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 2,
    title: 'Machine Learning Fundamentals',
    description: 'Understanding the basics of machine learning algorithms',
    category: 'AI & ML',
    level: 'Intermediate',
    duration: '8 weeks',
    enrolled: 856,
    rating: 4.9,
    color: 'from-purple-500 to-indigo-500',
  },
  {
    id: 3,
    title: 'Data Analysis with Python',
    description: 'Master data analysis using Python and popular libraries',
    category: 'Data Science',
    level: 'Intermediate',
    duration: '10 weeks',
    enrolled: 987,
    rating: 4.7,
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: 4,
    title: 'Full Stack Web Development',
    description: 'Build modern web applications from front to back',
    category: 'Web Development',
    level: 'Advanced',
    duration: '12 weeks',
    enrolled: 654,
    rating: 4.6,
    color: 'from-orange-500 to-pink-500',
  },
]

export default function Library() {
  const [selectedCategory, setSelectedCategory] = useState('All Courses')

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
            Course Library
          </motion.h1>
          <motion.p 
            className="mt-2 text-lg text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Explore our comprehensive collection of courses and start learning today.
          </motion.p>
        </div>

        {/* Categories */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex flex-wrap gap-4">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`flex items-center space-x-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  selectedCategory === category.name
                    ? 'bg-[#3B82F6] text-white'
                    : 'bg-[#22252D] text-gray-400 hover:bg-[#2D3748] hover:text-white'
                }`}
              >
                <category.icon className="h-5 w-5" />
                <span>{category.name}</span>
                <span className="ml-2 rounded-full bg-white/10 px-2 py-0.5 text-xs">
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Course Grid */}
        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {courses
            .filter(
              (course) =>
                selectedCategory === 'All Courses' || course.category === selectedCategory
            )
            .map((course) => (
              <div key={course.id} className="card group cursor-pointer">
                <div className={`h-2 rounded-t-lg bg-gradient-to-r ${course.color}`} />
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-[#3B82F6] bg-opacity-10 px-3 py-1 text-sm font-medium text-[#3B82F6]">
                      {course.category}
                    </span>
                    <span className="flex items-center text-yellow-500">
                      ★ {course.rating}
                    </span>
                  </div>
                  <h3 className="mt-4 text-xl font-semibold group-hover:text-[#3B82F6]">
                    {course.title}
                  </h3>
                  <p className="mt-2 text-gray-400">{course.description}</p>
                  <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-gray-400">
                    <div className="flex items-center">
                      <AcademicCapIcon className="mr-1.5 h-4 w-4" />
                      {course.level}
                    </div>
                    <div className="flex items-center">
                      <ClockIcon className="mr-1.5 h-4 w-4" />
                      {course.duration}
                    </div>
                    <div className="flex items-center">
                      <UsersIcon className="mr-1.5 h-4 w-4" />
                      {course.enrolled.toLocaleString()} enrolled
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </motion.div>
      </div>
    </Layout>
  )
}
