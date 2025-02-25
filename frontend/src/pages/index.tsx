import { motion } from 'framer-motion'
import Head from 'next/head'
import Hero from '@/components/ui/Hero'
import Card from '@/components/ui/Card'
import FeatureCard from '@/components/ui/FeatureCard'
import {
  AcademicCapIcon,
  UserGroupIcon,
  ChartBarIcon,
  RocketLaunchIcon,
} from '@heroicons/react/24/outline'

export default function Home() {
  return (
    <>
      <Head>
        <title>Indaba AI - Olympic Values Education Programme</title>
        <meta
          name="description"
          content="Empowering educators and students through Olympic values and education"
        />
      </Head>

      <Hero
        title="Inspiring every kind of educator"
        subtitle="Everyone has their own way of teaching and learning. Indaba AI empowers every kind of educator — and every kind of student — to learn, create, and define their own success through Olympic values."
        image="/images/hero-teacher.jpg"
      />

      <div className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-display font-bold text-gray-900 dark:text-white sm:text-4xl"
            >
              Empower your teaching journey
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400"
            >
              Access over 600 Olympic-themed activities and resources designed to inspire and educate
            </motion.p>
          </div>

          <div className="mt-20">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <Card
                title="K-12 Learning"
                subtitle="Ignite the creativity in every student"
                image="/images/k12-learning.jpg"
                color="pink"
                link="/k12"
              />
              <Card
                title="Higher Education"
                subtitle="Teach. Innovate. Inspire. Every which way."
                image="/images/higher-ed.jpg"
                color="green"
                link="/higher-education"
              />
              <Card
                title="Success Stories"
                subtitle="See how educators are making a difference"
                image="/images/success-stories.jpg"
                color="blue"
                link="/success-stories"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="py-24 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <FeatureCard
              title="Activity Management"
              description="Create, customize, and track Olympic-themed activities"
              icon={<AcademicCapIcon className="w-6 h-6" />}
              stats={[
                { label: 'Activities', value: '600+' },
                { label: 'Languages', value: '10+' },
              ]}
            />
            <FeatureCard
              title="Student Engagement"
              description="Monitor progress and celebrate achievements"
              icon={<UserGroupIcon className="w-6 h-6" />}
              stats={[
                { label: 'Students Reached', value: '12M+' },
                { label: 'Avg. Engagement', value: '85%' },
              ]}
            />
            <FeatureCard
              title="Analytics Dashboard"
              description="Track impact and measure learning outcomes"
              icon={<ChartBarIcon className="w-6 h-6" />}
              stats={[
                { label: 'Data Points', value: '1M+' },
                { label: 'Insights Generated', value: '50K+' },
              ]}
            />
            <FeatureCard
              title="Olympic Integration"
              description="Connect with the global Olympic community"
              icon={<RocketLaunchIcon className="w-6 h-6" />}
              stats={[
                { label: 'Countries', value: '60+' },
                { label: 'Partners', value: '100+' },
              ]}
            />
          </div>
        </div>
      </div>
    </>
  )
}
