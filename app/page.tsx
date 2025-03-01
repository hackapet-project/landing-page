"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Check, ArrowRight, Heart, Github, Star, Zap, Shield, Users } from 'lucide-react';
import { useTranslation } from '@/lib/i18n';

export default function Home() {
  const { t } = useTranslation();
  
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32 hero-pattern">
        <div className="absolute inset-0 pointer-events-none"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-50 animate-pulse-slow"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary/20 rounded-full blur-3xl opacity-50 animate-pulse-slow"></div>
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-5xl font-bold tracking-tight sm:text-7xl mb-6">
              <span>{t('home.hero.title')}</span>
            </h1>
            <p className="mt-6 text-xl leading-8 text-muted-foreground">
              {t('home.hero.description')}
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button asChild size="lg" className="rounded-full px-8 py-6 text-lg shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all">
                <Link href="#learn-more">
                  {t('home.hero.cta')} <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="mt-16 flow-root sm:mt-24">
            <div className="relative rounded-xl bg-gray-900/5 p-2 ring-1 ring-gray-900/10 lg:rounded-2xl lg:p-4 backdrop-blur-sm">
              <div className="relative rounded-md bg-white p-2 shadow-2xl ring-1 ring-gray-900/10 dark:bg-gray-800 overflow-hidden">
                <div className="flex justify-center">
                  <Image
                    src="https://images.unsplash.com/photo-1551730459-92db2a308d6a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80"
                    alt={t('home.hero.imageAlt')}
                    width={1200}
                    height={600}
                    className="rounded-md shadow-md"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Hackapet Offers */}
      <section id="learn-more" className="py-24 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"></div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6">
                  <span>{t('home.offers.title')}</span>
                </h2>
                <p className="mt-6 text-lg leading-8 text-muted-foreground">
                  {t('home.offers.description')}
                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-muted-foreground lg:max-w-none">
                  {[
                    {
                      text: t('home.offers.feature1'),
                      icon: <Shield className="h-5 w-5 text-primary" />
                    },
                    {
                      text: t('home.offers.feature2'),
                      icon: <Heart className="h-5 w-5 text-primary" />
                    },
                    {
                      text: t('home.offers.feature3'),
                      icon: <Star className="h-5 w-5 text-primary" />
                    },
                    {
                      text: t('home.offers.feature4'),
                      icon: <Zap className="h-5 w-5 text-primary" />
                    },
                    {
                      text: t('home.offers.feature5'),
                      icon: <Github className="h-5 w-5 text-primary" />
                    },
                  ].map((feature, index) => (
                    <div 
                      key={index} 
                      className="relative pl-9"
                    >
                      <dt className="inline font-semibold text-foreground">
                        <div className="absolute left-1 top-1 h-5 w-5 text-primary" aria-hidden="true">
                          {feature.icon}
                        </div>
                      </dt>{' '}
                      <dd className="inline">{feature.text}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-[450px] w-full overflow-hidden rounded-xl shadow-xl">
                <div className="absolute inset-0 bg-primary/10 z-10 rounded-xl"></div>
                <Image
                  src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt={t('home.offers.imageAlt')}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Altruistic Project */}
      <section className="py-24 sm:py-32 relative overflow-hidden clip-path-slant">
        <div className="absolute inset-0 bg-muted/50"></div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="flex items-center justify-center order-last lg:order-first">
              <div className="relative h-[450px] w-full overflow-hidden rounded-xl shadow-xl">
                <div className="absolute inset-0 bg-secondary/10 z-10 rounded-xl"></div>
                <Image
                  src="https://images.unsplash.com/photo-1601758174114-e711c0cbaa69?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt={t('home.altruistic.imageAlt')}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="lg:pl-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6">
                  <span>{t('home.altruistic.title')}</span> <br />
                  <span>{t('home.altruistic.subtitle')}</span>
                </h2>
                <p className="mt-6 text-lg leading-8 text-muted-foreground">
                  {t('home.altruistic.description')}
                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-muted-foreground lg:max-w-none">
                  {[
                    t('home.altruistic.point1'),
                    t('home.altruistic.point2'),
                    t('home.altruistic.point3'),
                    t('home.altruistic.point4'),
                    t('home.altruistic.point5'),
                  ].map((feature, index) => (
                    <div 
                      key={feature} 
                      className="relative pl-9"
                    >
                      <dt className="inline font-semibold text-foreground">
                        <Check className="absolute left-1 top-1 h-5 w-5 text-secondary" aria-hidden="true" />
                      </dt>{' '}
                      <dd className="inline">{feature}</dd>
                    </div>
                  ))}
                </dl>
                <div className="mt-10">
                  <Button asChild className="rounded-full px-6 shadow-lg shadow-secondary/20 hover:shadow-xl hover:shadow-secondary/30 transition-all">
                    <Link href="/about">{t('home.altruistic.cta')}</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}