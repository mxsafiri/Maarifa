import { useState } from 'react'
import Layout from '@/components/layout/Layout'
import { motion } from 'framer-motion'
import {
  VideoCameraIcon,
  DocumentTextIcon,
  PuzzlePieceIcon,
  MagnifyingGlassIcon,
  AdjustmentsHorizontalIcon,
  ClockIcon,
  UsersIcon,
  AcademicCapIcon,
} from '@heroicons/react/24/outline'

const categories = [
  { id: 'all', name: 'All Content' },
  { id: 'videos', name: 'Videos', icon: VideoCameraIcon },
  { id: 'articles', name: 'Articles', icon: DocumentTextIcon },
  { id: 'exercises', name: 'Exercises', icon: PuzzlePieceIcon },
]

const filters = [
  { id: 'difficulty', name: 'Difficulty', options: ['Beginner', 'Intermediate', 'Advanced'] },
  { id: 'duration', name: 'Duration', options: ['< 30 mins', '30-60 mins', '> 60 mins'] },
  { id: 'subject', name: 'Subject', options: ['Mathematics', 'Language', 'Science', 'Arts'] },
]

const content = [
  {
    id: 1,
    title: 'Introduction to Machine Learning',
    description: 'Learn the fundamentals of machine learning and its applications',
    type: 'video',
    duration: '45 mins',
    difficulty: 'Beginner',
    subject: 'Computer Science',
    enrolled: 248,
    rating: 4.8,
    thumbnail: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
  },
  {
    id: 2,
    title: 'Digital Literacy in the Modern Age',
    description: 'Essential digital skills for success in today\'s world',
    type: 'article',
    duration: '20 mins',
    difficulty: 'Beginner',
    subject: 'Technology',
    enrolled: 156,
    rating: 4.5,
    thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
  },
  {
    id: 3,
    title: 'Problem-Solving Challenge',
    description: 'Test your problem-solving skills with real-world scenarios',
    type: 'exercise',
    duration: '60 mins',
    difficulty: 'Intermediate',
    subject: 'Critical Thinking',
    enrolled: 189,
    rating: 4.9,
    thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
  },
]

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

export default function Library() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [showFilters, setShowFilters] = useState(false)

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
          <motion.h1 
            className="text-4xl font-bold tracking-tight text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Content Library
          </motion.h1>
          <motion.p 
            className="mt-2 text-lg text-gray-400"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Explore our collection of educational content
          </motion.p>
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
                className="block w-full rounded-lg bg-[#22252D] border border-[#2D3748] pl-10 pr-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent"
                placeholder="Search content..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <button
              type="button"
              className="ml-4 flex items-center rounded-lg bg-[#22252D] border border-[#2D3748] px-4 py-2 text-sm font-medium text-white hover:bg-[#2D3748] focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"
              onClick={() => setShowFilters(!showFilters)}
            >
              <AdjustmentsHorizontalIcon className="h-5 w-5 text-gray-400" />
              <span className="ml-2">Filters</span>
            </button>
          </div>

          <div className="flex items-center space-x-2 overflow-x-auto">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`flex items-center space-x-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-[#3B82F6] text-white'
                    : 'bg-[#22252D] text-gray-400 hover:bg-[#2D3748] hover:text-white'
                }`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.icon && <category.icon className="h-4 w-4" />}
                <span>{category.name}</span>
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
            className="rounded-lg bg-[#22252D] p-6 border border-[#2D3748]"
          >
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              {filters.map((filter) => (
                <div key={filter.id}>
                  <h3 className="text-sm font-medium text-white">{filter.name}</h3>
                  <div className="mt-2 space-y-2">
                    {filter.options.map((option) => (
                      <div key={option} className="flex items-center">
                        <input
                          id={`${filter.id}-${option}`}
                          name={`${filter.id}[]`}
                          type="checkbox"
                          className="h-4 w-4 rounded border-[#2D3748] bg-[#1A1D24] text-[#3B82F6] focus:ring-[#3B82F6] focus:ring-offset-[#22252D]"
                        />
                        <label
                          htmlFor={`${filter.id}-${option}`}
                          className="ml-3 text-sm text-gray-400"
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
                className="group card overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative aspect-video">
                  <img
                    className="h-full w-full object-cover"
                    src={item.thumbnail}
                    alt=""
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="flex items-center space-x-2 text-white">
                      <Icon className="h-5 w-5" />
                      <span className="text-sm font-medium capitalize">{item.type}</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col p-6">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white group-hover:text-[#3B82F6] transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-400">{item.description}</p>
                  </div>
                  <div className="mt-6 space-y-4">
                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <ClockIcon className="mr-1 h-4 w-4" />
                          <span>{item.duration}</span>
                        </div>
                        <div className="flex items-center">
                          <UsersIcon className="mr-1 h-4 w-4" />
                          <span>{item.enrolled}</span>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <AcademicCapIcon className="mr-1 h-4 w-4" />
                        <span>{item.difficulty}</span>
                      </div>
                    </div>
                    <button className="w-full rounded-lg bg-[#3B82F6] px-4 py-2 text-sm font-medium text-white hover:bg-[#2563EB] focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:ring-offset-2 focus:ring-offset-[#1A1D24]">
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
