'use client'
import { useState } from 'react'
import { ModalContext } from '@/contexts'
import { Navbar, Footer, Modal } from '@/components'



export default function LoginLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const [isOpen, setIsOpen] = useState(false)

  const closeModal = () => {
    setIsOpen(false)
  }

  const openModal = () => {
    setIsOpen(true)
  }

  return (
    <>
        <ModalContext.Provider value={{ isOpen, openModal, closeModal }}>
          <Navbar />
          <Modal />
          {children}
          <Footer />
        </ModalContext.Provider>
    </>

  )
}
