"use client"

import { motion } from "framer-motion"
import { Button } from "../Components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "../Components/ui/avatar"
import { CalendarIcon, Clock } from "lucide-react"

export default function Blog({title, content}:any) {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <motion.article 
        className="max-w-5xl mx-auto space-y-8 bg-card p-8 rounded-lg text-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration:1 }}
      >
        <motion.img
          alt="AI-powered healthcare"
          className="w-full aspect-video object-cover rounded-lg"
          height="400"
          src="/2.jpeg"
          width="800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration:1, delay: 0.2 }}
        />
        <div className="space-y-4">
          <motion.h1
            className="text-4xl font-bold tracking-tighter sm:text-5xl text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration:1, delay: 0.3 }}
          >
            {title}
          </motion.h1>
          <motion.div
            className="flex items-center justify-center space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration:1, delay: 0.4 }}
          >
            <Avatar>
              <AvatarImage alt="Dr. Emily Chen" src="/placeholder-avatar.jpg" />
              <AvatarFallback>EC</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">Dr. Emily Chen</p>
              <p className="text-sm text-muted-foreground">AI in Healthcare Specialist</p>
            </div>
          </motion.div>
          <motion.div
            className="flex items-center justify-center space-x-4 text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration:1, delay: 0.5 }}
          >
            <span className="flex items-center">
              <CalendarIcon className="mr-1 h-4 w-4" />
              May 20, 2023
            </span>
            <span className="flex items-center">
              <Clock className="mr-1 h-4 w-4" />
              15 min read
            </span>
          </motion.div>
        </div>
        <motion.div
          className="prose prose-gray dark:prose-invert max-w-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration:1, delay: 0.6 }}
        >
          <p>{content}</p>
        </motion.div>
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration:1, delay: 0.7 }}
        >
          <Button className="mt-4" variant="outline">
            Share This Article
          </Button>
        </motion.div>
      </motion.article>
    </div>
  )
}