'use client'

import { useState } from 'react'
import { 
  Cloud, 
  Database, 
  Shield, 
  Users, 
  Building2, 
  ChevronDown, 
  ChevronUp,
  Target,
  Zap,
  Award,
  Briefcase,
  Code,
  Server,
  Brain,
  Lock,
  Lightbulb,
  Menu,
  X,
  ArrowRight,
  CheckCircle2,
  Linkedin,
  Mail
} from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  const [showEntreprises, setShowEntreprises] = useState(false)
  const [showCandidats, setShowCandidats] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <a href="#accueil" className="text-2xl font-bold text-primary-900">
                LCO<span className="text-primary-600">-Partners</span>
              </a>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#accueil" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">Accueil</a>
              <a href="#entreprises" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">Entreprises</a>
              <a href="#candidats" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">Candidats</a>
              <a href="#about" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">Qui sommes-nous</a>
              <a href="#contact" className="bg-primary-600 text-white px-5 py-2 rounded-lg hover:bg-primary-700 transition-colors font-medium">
                Contact
              </a>
            </div>

            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-4 py-4 space-y-3">
              <a href="#accueil" className="block text-gray-700 hover:text-primary-600 font-medium py-2" onClick={() => setMobileMenuOpen(false)}>Accueil</a>
              <a href="#entreprises" className="block text-gray-700 hover:text-primary-600 font-medium py-2" onClick={() => setMobileMenuOpen(false)}>Entreprises</a>
              <a href="#candidats" className="block text-gray-700 hover:text-primary-600 font-medium py-2" onClick={() => setMobileMenuOpen(false)}>Candidats</a>
              <a href="#about" className="block text-gray-700 hover:text-primary-600 font-medium py-2" onClick={() => setMobileMenuOpen(false)}>Qui sommes-nous</a>
              <a href="#contact" className="block bg-primary-600 text-white px-5 py-2 rounded-lg text-center font-medium" onClick={() => setMobileMenuOpen(false)}>Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="accueil" className="pt-16">
        <div className="gradient-bg text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Cabinet de chasse de têtes spécialisé <span className="text-primary-300">IT & Conseil</span>
              </h1>
              <p className="text-xl md:text-2xl text-primary-100 mb-8 leading-relaxed">
                Spécialisé dans les métiers du Conseil et du Système d&apos;Information : 
                <span className="font-semibold text-white"> Architecture IT, Cloud, DevOps, Data & Intelligence Artificielle.</span>
              </p>
              <p className="text-lg text-primary-200 mb-10 max-w-3xl">
                Notre objectif est simple : comprendre vos enjeux technologiques et vous mettre en relation avec les talents capables de concevoir, bâtir et faire évoluer votre Système d&apos;Information.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#entreprises" className="inline-flex items-center justify-center bg-white text-primary-900 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-colors">
                  Entreprises <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <a href="#candidats" className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  Candidats <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="bg-gray-50 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">20+</div>
                <div className="text-gray-600 mt-1">Années d&apos;expertise</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">IT & Conseil</div>
                <div className="text-gray-600 mt-1">Spécialisation</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">100%</div>
                <div className="text-gray-600 mt-1">Approche directe</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">Sur-mesure</div>
                <div className="text-gray-600 mt-1">Accompagnement</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nos accompagnements */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nos accompagnements</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Que vous soyez une entreprise à la recherche de talents ou un professionnel IT en quête de nouvelles opportunités
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Entreprises Card */}
            <div id="entreprises" className="bg-gradient-to-br from-primary-50 to-white rounded-2xl p-8 border border-primary-100 card-hover scroll-mt-24">
              <div className="flex items-center mb-6">
                <div className="bg-primary-600 p-3 rounded-xl">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 ml-4">Entreprises</h3>
              </div>
              <p className="text-gray-700 mb-6 text-lg">
                Vous recherchez un talent clé pour renforcer vos équipes ou sécuriser un projet stratégique ?
              </p>
              <p className="text-gray-600 mb-6">
                Nous identifions et approchons des profils techniques et stratégiques capables d&apos;accélérer vos projets de transformation.
              </p>
              <button 
                onClick={() => setShowEntreprises(!showEntreprises)}
                className="inline-flex items-center bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
              >
                Découvrir {showEntreprises ? <ChevronUp className="ml-2 w-5 h-5" /> : <ChevronDown className="ml-2 w-5 h-5" />}
              </button>

              {/* Expanded Content - Entreprises */}
              {showEntreprises && (
                <div className="mt-8 pt-8 border-t border-primary-200 animate-in fade-in duration-300">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">
                    Vous recherchez des experts capables d&apos;accélérer vos projets de transformation digitale ?
                  </h4>
                  <p className="text-gray-700 mb-6">
                    Nous approchons les meilleurs profils du marché pour concevoir, sécuriser et faire évoluer vos environnements IT.
                  </p>
                  <p className="text-gray-600 mb-6">
                    Les métiers de l&apos;architecture évoluent rapidement : Cloud, Data, DevOps, API, cybersécurité, modernisation applicative, pilotage de programmes complexes. Les entreprises ont aujourd&apos;hui besoin d&apos;experts hybrides, capables d&apos;intervenir à la fois sur les enjeux techniques, organisationnels et stratégiques.
                  </p>
                  <p className="text-primary-700 font-semibold mb-6">C&apos;est précisément là que nous intervenons.</p>
                  <p className="text-gray-600 mb-8">
                    Nous identifions, sélectionnons et approchons des consultants, experts, leaders techniques et managers à forte valeur ajoutée, capables d&apos;accompagner vos projets de transformation digitale et de garantir la réussite de vos programmes IT.
                  </p>

                  <div className="bg-white rounded-xl p-6 mb-8 border border-primary-100">
                    <h5 className="font-bold text-gray-900 mb-4 flex items-center">
                      <Target className="w-5 h-5 text-primary-600 mr-2" />
                      Notre rôle : vous connecter aux talents qui font la différence
                    </h5>
                    <p className="text-gray-600 mb-4">
                      Nous intervenons sur des recrutements complexes et exigeants, où la maîtrise des environnements IT modernes est essentielle.
                    </p>
                    <p className="font-medium text-gray-800 mb-3">Nos candidats sont capables de :</p>
                    <ul className="space-y-2">
                      {[
                        "concevoir et piloter des architectures et plateformes IT",
                        "accompagner les transformations Cloud, Data et DevOps",
                        "sécuriser et moderniser les systèmes existants",
                        "porter une vision technologique auprès des directions",
                        "accélérer la mise en œuvre de programmes stratégiques"
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <h5 className="text-xl font-bold text-gray-900 mb-6">Nos expertises</h5>
                  <div className="grid sm:grid-cols-2 gap-4 mb-8">
                    <ExpertiseCard 
                      icon={<Server className="w-6 h-6" />}
                      title="Architecture & Environnements IT"
                      description="Architecture d'entreprise, applicative, Cloud, Data Platforms, API & intégration, sécurité, microservices et modernisation des SI."
                    />
                    <ExpertiseCard 
                      icon={<Cloud className="w-6 h-6" />}
                      title="Cloud, DevOps & Plateformes"
                      description="Experts Cloud, DevOps/SRE, Platform Engineering, CI/CD, Infrastructure as Code, conteneurisation, FinOps, Tech Leads."
                    />
                    <ExpertiseCard 
                      icon={<Brain className="w-6 h-6" />}
                      title="Data, IA & Analytics"
                      description="Data Architects & Engineers, DataOps/MLOps, IA & LLM, BI & Analytics, gouvernance de la donnée, Data Leaders."
                    />
                    <ExpertiseCard 
                      icon={<Briefcase className="w-6 h-6" />}
                      title="Consulting & Pilotage"
                      description="Consultants IT/Digital, Program & Delivery Managers, PMO stratégiques, Leads techniques, Experts transformation SI."
                    />
                    <ExpertiseCard 
                      icon={<Shield className="w-6 h-6" />}
                      title="Cybersécurité"
                      description="Cloud Security, GRC/RSSI, Pentest, SecOps, architectures de sécurité et gouvernance des risques."
                      className="sm:col-span-2 sm:max-w-md sm:mx-auto"
                    />
                  </div>

                  <div className="bg-primary-900 text-white rounded-xl p-6">
                    <h5 className="font-bold text-lg mb-4">Pourquoi faire appel à LCO-Partners ?</h5>
                    <ul className="space-y-3">
                      {[
                        "Expertise rare du marché IT, Cloud, Data & Transformation",
                        "Approche directe systématique pour engager les meilleurs talents",
                        "Accompagnement de bout en bout : cadrage, ciblage, approche, sélection",
                        "Positionnement reconnu sur les recrutements exigeants et stratégiques"
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <Zap className="w-5 h-5 text-primary-300 mr-2 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {/* Candidats Card */}
            <div id="candidats" className="bg-gradient-to-br from-secondary-50 to-white rounded-2xl p-8 border border-secondary-100 card-hover scroll-mt-24">
              <div className="flex items-center mb-6">
                <div className="bg-secondary-700 p-3 rounded-xl">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 ml-4">Candidats</h3>
              </div>
              <p className="text-gray-700 mb-6 text-lg">
                Vous êtes consultant, expert ou manager IT et souhaitez évoluer vers des missions plus exigeantes ou un environnement qui valorise réellement votre expertise ?
              </p>
              <p className="text-gray-600 mb-6">
                Nous accompagnons des profils issus des meilleurs cabinets et environnements technologiques vers des trajectoires à forte valeur ajoutée.
              </p>
              <button 
                onClick={() => setShowCandidats(!showCandidats)}
                className="inline-flex items-center bg-secondary-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-secondary-800 transition-colors"
              >
                Découvrir {showCandidats ? <ChevronUp className="ml-2 w-5 h-5" /> : <ChevronDown className="ml-2 w-5 h-5" />}
              </button>

              {/* Expanded Content - Candidats */}
              {showCandidats && (
                <div className="mt-8 pt-8 border-t border-secondary-200 animate-in fade-in duration-300">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">
                    Vous êtes consultant en IT, Cloud, Data ou Transformation et souhaitez donner une nouvelle dimension à votre parcours ?
                  </h4>
                  <p className="text-gray-700 mb-6">
                    Chez LCO-Partners, nous accompagnons les consultants, experts et leaders techniques vers des environnements qui valorisent l&apos;expertise, l&apos;impact et la vision.
                  </p>
                  <p className="text-gray-600 mb-8">
                    Le monde du conseil évolue rapidement : hybridation des compétences, montée en puissance du Cloud, explosion des plateformes Data, exigences accrues en architecture, sécurité, DevOps et delivery. Les clients attendent désormais des profils capables de conjuguer vision stratégique, expertise technique et capacité d&apos;exécution.
                  </p>

                  <div className="bg-white rounded-xl p-6 mb-8 border border-secondary-100">
                    <h5 className="font-bold text-gray-900 mb-4 flex items-center">
                      <Award className="w-5 h-5 text-secondary-600 mr-2" />
                      Notre accompagnement
                    </h5>
                    <p className="text-gray-600 mb-4">
                      Nous travaillons exclusivement en approche directe, ce qui nous permet de vous proposer :
                    </p>
                    <ul className="space-y-2">
                      {[
                        "des missions à forte visibilité auprès des directions IT",
                        "des rôles où vos compétences en Architecture, Cloud, Data ou Produit sont réellement valorisées",
                        "des environnements innovants (Cloud natif, Data Platforms, IA/LLM, DevOps, SRE)",
                        "des postes combinant expertise, delivery et leadership",
                        "des opportunités rares, souvent non publiées"
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-secondary-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-white rounded-xl p-6 mb-8 border border-secondary-100">
                    <h5 className="font-bold text-gray-900 mb-4 flex items-center">
                      <Target className="w-5 h-5 text-secondary-600 mr-2" />
                      Notre objectif
                    </h5>
                    <p className="text-gray-600 mb-4">
                      Vous aider à rejoindre un environnement qui reconnaît votre exigence, vos compétences et votre capacité d&apos;impact, qu&apos;il s&apos;agisse :
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li>• d&apos;un cabinet de conseil de niche</li>
                      <li>• d&apos;une scale-up technologique</li>
                      <li>• d&apos;une DSI mature</li>
                      <li>• ou d&apos;un programme stratégique de transformation</li>
                    </ul>
                  </div>

                  <h5 className="text-xl font-bold text-gray-900 mb-6">Domaines accompagnés</h5>
                  <div className="grid sm:grid-cols-2 gap-4 mb-8">
                    <ExpertiseCard 
                      icon={<Server className="w-6 h-6" />}
                      title="Architecture & Systèmes"
                      description="Architecture IT, applicative, d'entreprise, Cloud (AWS, Azure, GCP), Data & API, modernisation des SI."
                      variant="secondary"
                    />
                    <ExpertiseCard 
                      icon={<Code className="w-6 h-6" />}
                      title="Cloud, DevOps & Ingénierie"
                      description="Cloud & Cloud Native, DevOps, SRE, Platform Engineering, Engineering Managers, Tech Leads, CI/CD, Kubernetes."
                      variant="secondary"
                    />
                    <ExpertiseCard 
                      icon={<Database className="w-6 h-6" />}
                      title="Data & IA"
                      description="Data Architects & Engineers, DataOps, MLOps, IA, LLM, NLP, gouvernance Data & Analytics avancés."
                      variant="secondary"
                    />
                    <ExpertiseCard 
                      icon={<Lightbulb className="w-6 h-6" />}
                      title="Conseil & Transformation"
                      description="Consultants IT/Digital, Program & Delivery Managers, Experts transformation SI & stratégie technologique."
                      variant="secondary"
                    />
                    <ExpertiseCard 
                      icon={<Lock className="w-6 h-6" />}
                      title="Cybersécurité"
                      description="Architectes sécurité, SecOps, Pentesters, Experts GRC/IAM & Cloud Security."
                      variant="secondary"
                      className="sm:col-span-2 sm:max-w-md sm:mx-auto"
                    />
                  </div>

                  <div className="bg-secondary-800 text-white rounded-xl p-6">
                    <h5 className="font-bold text-lg mb-4">Pourquoi passer par LCO-Partners ?</h5>
                    <ul className="space-y-3">
                      {[
                        "Expertise reconnue du marché du conseil IT",
                        "Accompagnement confidentiel, transparent et personnalisé",
                        "Opportunités sélectives valorisant votre background et votre potentiel",
                        "Positionnement clair sur les rôles à forte responsabilité",
                        "Accès privilégié à des projets stratégiques souvent hors marché"
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <Zap className="w-5 h-5 text-secondary-300 mr-2 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Qui sommes-nous */}
      <section id="about" className="py-20 bg-gray-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Qui sommes-nous</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Laurent Conqui */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <Image
                  src="/images/laurent-conqui.jpg"
                  alt="Laurent Conqui"
                  width={80}
                  height={80}
                  className="rounded-full object-cover shadow-lg"
                />
                <div className="ml-4">
                  <h3 className="text-2xl font-bold text-gray-900">Laurent Conqui</h3>
                  <p className="text-primary-600 font-medium">Président & Fondateur de LCO-Partners</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                Depuis plus de vingt ans, j&apos;accompagne des entreprises et des cabinets de conseil dans leurs projets de transformation IT.
              </p>
              <p className="text-gray-600 mb-4">
                Après un parcours au sein de grands cabinets tels que <span className="font-semibold">Wavestone</span> et <span className="font-semibold">Onepoint</span>, puis la cofondation de deux sociétés à forte dimension technologique, j&apos;ai créé LCO-Partners avec une conviction forte :
              </p>
              <p className="text-primary-700 font-semibold text-lg italic">
                &quot;La réussite d&apos;un projet dépend avant tout des talents qui le portent.&quot;
              </p>
            </div>

            {/* LCO-Partners */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-600 to-primary-900 rounded-full flex items-center justify-center">
                  <span className="text-white text-lg font-bold">LCO</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-2xl font-bold text-gray-900">LCO-Partners</h3>
                  <p className="text-primary-600 font-medium">Cabinet de chasse spécialisé IT & Conseil</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                LCO-Partners accompagne des environnements exigeants : cabinets de conseil technologiques, DSI modernes, scale-ups et programmes de transformation complexes.
              </p>
              <p className="text-gray-600">
                Nous identifions et sélectionnons des experts IT, Cloud, Data, DevOps, Cybersécurité et Transformation, capables d&apos;intervenir sur des enjeux critiques et stratégiques.
              </p>
            </div>
          </div>

          {/* Notre force */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-primary-900 text-white rounded-2xl p-8">
              <div className="flex items-center mb-4">
                <Code className="w-8 h-8 text-primary-300" />
                <h4 className="text-xl font-bold ml-3">Expertise technique</h4>
              </div>
              <p className="text-primary-100">
                Compréhension approfondie des architectures modernes, du Cloud, de la Data et des environnements DevOps.
              </p>
            </div>
            <div className="bg-secondary-800 text-white rounded-2xl p-8">
              <div className="flex items-center mb-4">
                <Users className="w-8 h-8 text-secondary-300" />
                <h4 className="text-xl font-bold ml-3">Expertise humaine</h4>
              </div>
              <p className="text-secondary-100">
                Évaluation fine de la posture, du leadership, de l&apos;adéquation culturelle et de la capacité d&apos;impact.
              </p>
            </div>
          </div>

          {/* Notre approche */}
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
            <h4 className="text-2xl font-bold text-gray-900 mb-6 text-center">Notre approche</h4>
            <p className="text-gray-700 text-center mb-8 max-w-3xl mx-auto">
              Nous travaillons exclusivement en approche directe, avec :
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-6 h-6 text-primary-600" />
                </div>
                <p className="font-medium text-gray-800">Une sélection rigoureuse des profils</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="w-6 h-6 text-primary-600" />
                </div>
                <p className="font-medium text-gray-800">Une compréhension précise des enjeux</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-primary-600" />
                </div>
                <p className="font-medium text-gray-800">Une démarche sur-mesure, confidentielle et engagée</p>
              </div>
            </div>
          </div>

          {/* Notre objectif */}
          <div className="text-center">
            <div className="inline-block bg-gradient-to-r from-primary-600 to-primary-800 text-white rounded-2xl p-8 max-w-3xl">
              <h4 className="text-2xl font-bold mb-4">Notre objectif</h4>
              <p className="text-xl text-primary-100">
                Créer les meilleures rencontres entre <span className="text-white font-semibold">entreprises d&apos;excellence</span> et <span className="text-white font-semibold">talents à forte valeur ajoutée</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 gradient-bg scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Prenons contact</h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Que vous soyez une entreprise à la recherche de talents ou un professionnel IT souhaitant évoluer, nous sommes à votre écoute.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:contact@lco-partners.fr" 
                className="inline-flex items-center justify-center bg-white text-primary-900 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
              >
                <Mail className="w-5 h-5 mr-2" />
                contact@lco-partners.fr
              </a>
              <a 
                href="https://www.linkedin.com/in/laurent-conqui/" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Partenaires */}
      <section className="py-16 bg-white border-t border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-10">Ils nous font confiance</h3>
          <div className="relative">
            <div className="flex animate-scroll gap-16 items-center">
              {/* Premier groupe */}
              <a href="https://www.groupeonepoint.com/fr/" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 hover:scale-110 transition-transform duration-300">
                <svg viewBox="0 0 180 40" className="h-10 w-auto">
                  <text x="0" y="30" fontFamily="Arial, sans-serif" fontSize="28" fontWeight="bold" fill="#2D3436">onepoint</text>
                  <circle cx="168" cy="24" r="6" fill="#00D4FF"/>
                </svg>
              </a>
              <a href="https://consulting.enioka.com/" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 hover:scale-110 transition-transform duration-300">
                <svg viewBox="0 0 160 55" className="h-14 w-auto">
                  <rect x="0" y="5" width="3" height="45" fill="#3D2314"/>
                  <text x="10" y="28" fontFamily="Georgia, serif" fontSize="24" fill="#E67E22">enioka</text>
                  <text x="10" y="48" fontFamily="Arial, sans-serif" fontSize="16" fill="#3D2314">consulting</text>
                </svg>
              </a>
              <a href="https://www.nexen.partners/" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 hover:scale-110 transition-transform duration-300">
                <svg viewBox="0 0 140 50" className="h-12 w-auto">
                  <rect x="0" y="0" width="140" height="50" rx="4" fill="#000000"/>
                  <path d="M10 35 L10 15 L20 15 L30 30 L30 15 L38 15 L38 35 L28 35 L18 20 L18 35 Z" fill="#FFFFFF"/>
                  <text x="42" y="32" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="bold" fill="#FFFFFF">EXEN</text>
                  <text x="42" y="44" fontFamily="Arial, sans-serif" fontSize="8" fill="#FFFFFF" letterSpacing="2">PARTNERS</text>
                </svg>
              </a>
              <a href="https://www.savane-consulting.com/" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 hover:scale-110 transition-transform duration-300">
                <svg viewBox="0 0 160 45" className="h-11 w-auto">
                  <rect x="0" y="0" width="160" height="45" rx="4" fill="#5D7B8A"/>
                  <text x="110" y="14" fontFamily="Arial, sans-serif" fontSize="10" fill="#FFFFFF">consulting</text>
                  <text x="10" y="34" fontFamily="Arial, sans-serif" fontSize="24" fill="#FFFFFF">savane</text>
                </svg>
              </a>
              {/* Duplication pour animation infinie */}
              <a href="https://www.groupeonepoint.com/fr/" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 hover:scale-110 transition-transform duration-300">
                <svg viewBox="0 0 180 40" className="h-10 w-auto">
                  <text x="0" y="30" fontFamily="Arial, sans-serif" fontSize="28" fontWeight="bold" fill="#2D3436">onepoint</text>
                  <circle cx="168" cy="24" r="6" fill="#00D4FF"/>
                </svg>
              </a>
              <a href="https://consulting.enioka.com/" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 hover:scale-110 transition-transform duration-300">
                <svg viewBox="0 0 160 55" className="h-14 w-auto">
                  <rect x="0" y="5" width="3" height="45" fill="#3D2314"/>
                  <text x="10" y="28" fontFamily="Georgia, serif" fontSize="24" fill="#E67E22">enioka</text>
                  <text x="10" y="48" fontFamily="Arial, sans-serif" fontSize="16" fill="#3D2314">consulting</text>
                </svg>
              </a>
              <a href="https://www.nexen.partners/" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 hover:scale-110 transition-transform duration-300">
                <svg viewBox="0 0 140 50" className="h-12 w-auto">
                  <rect x="0" y="0" width="140" height="50" rx="4" fill="#000000"/>
                  <path d="M10 35 L10 15 L20 15 L30 30 L30 15 L38 15 L38 35 L28 35 L18 20 L18 35 Z" fill="#FFFFFF"/>
                  <text x="42" y="32" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="bold" fill="#FFFFFF">EXEN</text>
                  <text x="42" y="44" fontFamily="Arial, sans-serif" fontSize="8" fill="#FFFFFF" letterSpacing="2">PARTNERS</text>
                </svg>
              </a>
              <a href="https://www.savane-consulting.com/" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 hover:scale-110 transition-transform duration-300">
                <svg viewBox="0 0 160 45" className="h-11 w-auto">
                  <rect x="0" y="0" width="160" height="45" rx="4" fill="#5D7B8A"/>
                  <text x="110" y="14" fontFamily="Arial, sans-serif" fontSize="10" fill="#FFFFFF">consulting</text>
                  <text x="10" y="34" fontFamily="Arial, sans-serif" fontSize="24" fill="#FFFFFF">savane</text>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4">
                LCO<span className="text-primary-400">-Partners</span>
              </div>
              <p className="text-gray-400">
                Cabinet de chasse de têtes spécialisé IT & Conseil
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Navigation</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#accueil" className="hover:text-white transition-colors">Accueil</a></li>
                <li><a href="#entreprises" className="hover:text-white transition-colors">Entreprises</a></li>
                <li><a href="#candidats" className="hover:text-white transition-colors">Candidats</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">Qui sommes-nous</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Expertises</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Architecture IT</li>
                <li>Cloud & DevOps</li>
                <li>Data & IA</li>
                <li>Cybersécurité</li>
                <li>Transformation digitale</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
            <p>© {new Date().getFullYear()} LCO-Partners. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

interface ExpertiseCardProps {
  icon: React.ReactNode
  title: string
  description: string
  variant?: 'primary' | 'secondary'
  className?: string
}

function ExpertiseCard({ icon, title, description, variant = 'primary', className = '' }: ExpertiseCardProps) {
  const bgColor = variant === 'primary' ? 'bg-primary-50 border-primary-100' : 'bg-secondary-50 border-secondary-100'
  const iconColor = variant === 'primary' ? 'text-primary-600' : 'text-secondary-600'
  
  return (
    <div className={`${bgColor} border rounded-xl p-4 ${className}`}>
      <div className={`${iconColor} mb-2`}>{icon}</div>
      <h6 className="font-semibold text-gray-900 mb-1">{title}</h6>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  )
}
