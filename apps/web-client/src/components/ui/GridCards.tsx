'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ShieldCheck, Clock, CircleCheck } from 'lucide-react'

const benefits = [
    {
        title: 'Garantía',
        description: '3 meses de garantía en todas nuestras reparaciones. Tu inversión protegida.',
        frontImage: '/images/education-projectors.jpg',
        alt: 'Garantía de Servicio',
        icon: ShieldCheck,
        iconColor: 'text-blue-600',
        delay: 0,
    },
    {
        title: 'Atención Rápida',
        description: 'Respondemos en 24 horas con servicio a domicilio en Lima.',
        frontImage: '/images/epson-banner.jpg',
        alt: 'Atención Rápida',
        icon: Clock,
        iconColor: 'text-orange-600',
        delay: 0.1,
    },
    {
        title: 'Técnicos Expertos',
        description: 'Especialistas certificados con años de experiencia garantizada.',
        frontImage: '/images/seo-banner.jpg',
        alt: 'Técnicos Especializados',
        icon: CircleCheck,
        iconColor: 'text-green-600',
        delay: 0.2,
    },
]

export default function GridCards() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
                <motion.div
                    key={benefit.title}
                    className="h-[450px] cursor-pointer group"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: benefit.delay }}
                    viewport={{ once: true }}
                >
                    <motion.div
                        className="relative w-full h-full"
                        whileHover={{ rotateY: 180 }}
                        transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
                        style={{ transformStyle: 'preserve-3d' }}
                    >
                        {/* Frente */}
                        <motion.div
                            className="absolute inset-0 bg-white rounded-3xl border-3 border-orange-500 shadow-2xl overflow-hidden group-hover:shadow-orange-300/80"
                            style={{ backfaceVisibility: 'hidden' }}
                        >
                            <Image
                                src={benefit.frontImage}
                                alt={benefit.alt}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                <div className="text-sm text-white/80 mb-2">
                                    {index === 0
                                        ? 'Protección garantizada en cada reparación realizada'
                                        : index === 1
                                            ? 'Nos aseguramos que recibas atención lo antes posible'
                                            : 'Nuestros técnicos se encargarán de brindarte un buen resultado'}
                                </div>
                                <div className="text-lg font-bold">→ Ver más</div>
                            </div>
                        </motion.div>

                        {/* Reverso */}
                        <motion.div
                            className="absolute inset-0 rounded-3xl border-2 border-orange-500 shadow-2xl p-8 flex flex-col items-center justify-center text-center bg-white"
                            style={{ backfaceVisibility: 'hidden', rotateY: 180 }}
                        >
                            <motion.div
                                className="bg-white w-20 h-20 rounded-full flex items-center justify-center mb-6 shadow-lg"
                                animate={{ scale: [1, 1.05, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                <benefit.icon className={`w-10 h-10 ${benefit.iconColor}`} />
                            </motion.div>

                            <h3 className="text-2xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                            <p className="text-gray-700 text-base leading-relaxed font-medium">
                                {benefit.description}
                            </p>
                        </motion.div>
                    </motion.div>
                </motion.div>

            ))}
        </div>
    )
}