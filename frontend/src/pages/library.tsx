import { useState } from 'react'
import Layout from '@/components/layout/Layout'
import { motion } from 'framer-motion'
import {
  VideoCameraIcon,
  DocumentTextIcon,
  PuzzlePieceIcon,
  MagnifyingGlassIcon,
  AdjustmentsHorizontalIcon,
} from '@heroicons/react/24/outline'

const categories = [
  { id: 'all', name: 'All Content' },
  { id: 'videos', name: 'Videos' },
  { id: 'articles', name: 'Articles' },
  { id: 'exercises', name: 'Exercises' },
]

const filters = [
  { id: 'difficulty', name: 'Difficulty', options: ['Beginner', 'Intermediate', 'Advanced'] },
  { id: 'duration', name: 'Duration', options: ['< 30 mins', '30-60 mins', '> 60 mins'] },
  { id: 'language', name: 'Language', options: ['English', 'Swahili', 'French'] },
]

const content = [
  {
    id: 1,
    title: 'Introduction to Machine Learning',
    description: 'Learn the fundamentals of machine learning and its applications',
    type: 'video',
    duration: '45 mins',
    difficulty: 'Beginner',
    language: 'English',
    thumbnail: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
  },
  {
    id: 2,
    title: 'Digital Literacy in the Modern Age',
    description: 'Essential digital skills for success in today\'s world',
    type: 'article',
    duration: '20 mins',
    difficulty: 'Beginner',
    language: 'English',
    thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
  },
  {
    id: 3,
    title: 'Problem-Solving Challenge',
    description: 'Test your problem-solving skills with real-world scenarios',
    type: 'exercise',
    duration: '60 mins',
    difficulty: 'Intermediate',
    language: 'English',
    thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
  },
  // Add more content items...
]

export default function Library() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [showFilters, setShowFilters] = useState(false)

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'video':
        return VideoCameraIcon
      case 'article':
        return DocumentTextIcon
      case 'exercise':
        return PuzzlePieceIcon
      default:
        return DocumentTextIcon
    }
  }

  const filteredContent = content.filter(item => {
    if (selectedCategory !== 'all' && item.type !== selectedCategory) return false
    if (searchQuery && !item.title.toLowerCase().includes(searchQuery.toLowerCase())) return false
    return true
  })

  return (
    <Layout>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">Content Library</h1>
          <p className="mt-2 text-lg text-gray-600">
            Explore our collection of educational content
          </p>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
          <div className="flex flex-1 items-center max-w-lg">
            <div className="relative flex-1">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
              <input
                type="text"
                className="block w-full rounded-md border-0 py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Search content..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <button
              type="button"
              className="ml-4 flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              onClick={() => setShowFilters(!showFilters)}
            >
              <AdjustmentsHorizontalIcon className="h-5 w-5 text-gray-400" />
              <span className="ml-2">Filters</span>
            </button>
          </div>

          <div className="flex items-center space-x-4">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`rounded-full px-4 py-1 text-sm font-medium ${
                  selectedCategory === category.id
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Filters Panel */}
        {showFilters && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="rounded-lg bg-white p-6 shadow"
          >
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              {filters.map((filter) => (
                <div key={filter.id}>
                  <h3 className="text-sm font-medium text-gray-900">{filter.name}</h3>
                  <div className="mt-2 space-y-2">
                    {filter.options.map((option) => (
                      <div key={option} className="flex items-center">
                        <input
                          id={`${filter.id}-${option}`}
                          name={`${filter.id}[]`}
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                        <label
                          htmlFor={`${filter.id}-${option}`}
                          className="ml-3 text-sm text-gray-600"
                        >
                          {option}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Content Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredContent.map((item, index) => {
            const Icon = getTypeIcon(item.type)
            return (
              <motion.div
                key={item.id}
                className="flex flex-col overflow-hidden rounded-lg bg-white shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="relative flex-shrink-0">
                  <img
                    className="h-48 w-full object-cover"
                    src={item.thumbnail}
                    alt=""
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                    <div className="flex items-center space-x-2 text-white">
                      <Icon className="h-5 w-5" />
                      <span className="text-sm font-medium capitalize">{item.type}</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                    <p className="mt-3 text-base text-gray-500">{item.description}</p>
                  </div>
                  <div className="mt-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span>{item.duration}</span>
                        <span>•</span>
                        <span>{item.difficulty}</span>
                      </div>
                      <span className="inline-flex items-center rounded-full bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700">
                        {item.language}
                      </span>
                    </div>
                    <button className="mt-4 w-full rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                      Start Learning
                    </button>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}
