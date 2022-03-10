// React & Next.js Imports
import router from 'next/router'
import { useRouter } from 'next/router'
import { useState, useEffect, useContext } from 'react'

// next-theme
import { useTheme } from 'next-themes'

const Index = () => {
  const { theme, setTheme } = useTheme()
  const router = useRouter()

  // Redirect to /cover
  useEffect(() => {
    router.replace('/cover')
  })

  return null
}

Index.theme = 'light'
export default Index
