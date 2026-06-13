'use client'

// TODO: Replace placeholder video ID "dQw4w9WgXcQ" with the actual Minecraft Education video ID.
// Example: 'YOUR_VIDEO_ID' from https://www.youtube.com/watch?v=YOUR_VIDEO_ID

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Play } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { GlassPanel } from '@/components/ui/GlassPanel'

const VIDEO_ID = 'dQw4w9WgXcQ' // TODO: Replace with actual Minecraft Education video ID

export function VideoSection() {
  const [isLoaded, setIsLoaded] = useState(false)

  const thumbnailUrl = `https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg`
  const embedUrl = `https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0`

  return (
    <Section background="white" padding="lg">
      <Container size="lg">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
        >
          <span className="mb-3 inline-block font-heading text-sm font-semibold uppercase tracking-wider text-primary">
            Obejrzyj film
          </span>
          <h2 className="font-heading text-3xl font-bold text-text-primary sm:text-4xl">
            Jak wyglądają nasze zajęcia?
          </h2>
          <p className="mt-4 text-text-secondary max-w-lg mx-auto">
            Przekonaj się, jak Minecraft Education zamienia naukę programowania w
            ekscytującą przygodę.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <GlassPanel className="p-3 sm:p-4">
            {/* 16:9 responsive wrapper */}
            <div
              className="relative w-full overflow-hidden rounded-xl bg-primary-dark"
              style={{ paddingBottom: '56.25%' }}
            >
              {!isLoaded ? (
                /* Facade: thumbnail + play button */
                <button
                  onClick={() => setIsLoaded(true)}
                  className="absolute inset-0 w-full h-full group focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary focus-visible:ring-inset"
                  aria-label="Odtwórz film o zajęciach Bedrock Academy"
                >
                  {/* Thumbnail */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={thumbnailUrl}
                    alt="Miniatura filmu o zajęciach Bedrock Academy"
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/30 transition-colors group-hover:bg-black/40" />
                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-primary shadow-elevated transition-transform group-hover:scale-110">
                      <Play
                        size={28}
                        fill="white"
                        className="text-white ml-1"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                </button>
              ) : (
                /* Loaded iframe */
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src={embedUrl}
                  title="Film o zajęciach Bedrock Academy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                />
              )}
            </div>
          </GlassPanel>
        </motion.div>
      </Container>
    </Section>
  )
}
