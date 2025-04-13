import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-chrysalead-blue to-chrysalead-blue-dark text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <header className="flex justify-between items-center mb-16">
          <div className="flex items-center">
            <Image src="/logo.png" alt="Chrysalead Logo" width={200} height={60} className="h-12 w-auto" />
          </div>
        </header>

        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 py-12">
          <div className="lg:w-1/2 space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-montserrat">
              <span className="text-chrysalead-gold">Découvrez</span> votre type de personnalité MBTI
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              Mieux se connaître et optimiser ses interactions avec les autres grâce au MBTI
            </p>
            <div className="pt-4">
              <Link href="/test">
                <Button className="bg-chrysalead-gold hover:bg-chrysalead-gold-dark text-chrysalead-blue font-bold text-lg py-6 px-8 rounded-xl transition-all transform hover:scale-105">
                  Commencer le test
                </Button>
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-chrysalead-gold rounded-full opacity-20 blur-2xl"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-chrysalead-gold rounded-full opacity-20 blur-2xl"></div>
            <div className="relative z-10 bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
              <h2 className="text-2xl font-montserrat font-bold mb-6 text-chrysalead-gold">Pourquoi faire ce test ?</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-chrysalead-gold text-chrysalead-blue rounded-full p-1 mr-3 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p>Mieux comprendre vos préférences naturelles</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-chrysalead-gold text-chrysalead-blue rounded-full p-1 mr-3 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p>Améliorer votre communication avec les autres</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-chrysalead-gold text-chrysalead-blue rounded-full p-1 mr-3 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p>Identifier vos forces et axes de développement</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-chrysalead-gold text-chrysalead-blue rounded-full p-1 mr-3 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p>Optimiser vos interactions professionnelles et personnelles</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:border-chrysalead-gold/40 transition-all">
            <div className="bg-chrysalead-gold/20 p-3 rounded-full w-fit mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-chrysalead-gold"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 font-montserrat">Rapide et Précis</h3>
            <p className="text-white/90">
              Complétez le test en moins de 10 minutes et obtenez des résultats détaillés.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:border-chrysalead-gold/40 transition-all">
            <div className="bg-chrysalead-gold/20 p-3 rounded-full w-fit mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-chrysalead-gold"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 font-montserrat">Fiable et Validé</h3>
            <p className="text-white/90">Basé sur la méthodologie MBTI reconnue internationalement.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:border-chrysalead-gold/40 transition-all">
            <div className="bg-chrysalead-gold/20 p-3 rounded-full w-fit mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-chrysalead-gold"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 font-montserrat">Personnalisé</h3>
            <p className="text-white/90">Recevez des insights adaptés à votre profil de personnalité unique.</p>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-24 pt-8 border-t border-white/10 text-center text-white/60">
          <div className="flex justify-center mb-4">
            <Image src="/logo.png" alt="Chrysalead Logo" width={150} height={45} className="h-12 w-auto" />
          </div>
          <p>© {new Date().getFullYear()} Chrysalead. Tous droits réservés.</p>
          <p className="mt-2">Formation - Coaching - Conseil</p>
          <p className="mt-3 flex items-center justify-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-chrysalead-gold"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 8V5z"
              />
            </svg>
            <span className="text-white">+228 98924086</span>
          </p>
        </footer>
      </div>
    </div>
  )
}
