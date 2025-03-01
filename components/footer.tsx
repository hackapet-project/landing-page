"use client";

import Link from 'next/link';
import {
  Heart,
  Github,
  Linkedin,
  Mail,
  PawPrint,
  Calendar,
  ExternalLink,
  Sparkles,
  BellRing,
  CalendarDays, Clock, MapPin
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/lib/i18n';

export default function Footer() {
  const { t } = useTranslation();

  return (
      <footer className="border-t bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-muted/10 pointer-events-none"></div>

        {/* Main Footer */}
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Logo and Description */}
            <div className="space-y-4">
              <Link href="/" className="inline-block">
              <span className="font-bold text-2xl">
                <span>Hack</span>
                <span>a</span>
                <span>pet</span>
              </span>
              </Link>
              <p className="text-sm text-muted-foreground max-w-xs">
                {t('footer.description')}
              </p>
              <div className="flex space-x-4">
                <a href="https://github.com/hackapet-project" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </a>
                <a href="https://linkedin.com/company/hackapet" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
                <a href="mailto:woof@hackapet.org" className="text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-sm font-semibold mb-4">{t('footer.quickLinks')}</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {t('common.home')}
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {t('common.aboutUs')}
                  </Link>
                </li>
                <li>
                  <Link href="/about-hackapet" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {t('common.aboutHackapet')}
                  </Link>
                </li>
                <li>
                  <Link href="/collaborate" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {t('common.collaborate')}
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {t('common.privacyPolicy')}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Products */}
            <div>
              <h3 className="text-sm font-semibold mb-4">{t('footer.ourProducts')}</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    PetSync
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    PetMatch
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    AdopTrack
                  </a>
                </li>
              </ul>
            </div>

            {/* Adoption Events section (replacing Newsletter) */}
            {/* November Adoption Event Card Component */}
            <div className="bg-muted/30 p-4 rounded-md border border-border/50 hover:border-primary/30 transition-colors">
              <div className="flex items-center mb-3">
                <Calendar className="h-5 w-5 mr-2 text-primary" />
                <h4 className="font-semibold text-sm">VI Feria Animalista de Alzira</h4>
              </div>

              <p className="text-sm mb-3">
                Edición ampliada con más protectoras, actividades y oportunidades para encontrar un hogar a mascotas abandonadas.
              </p>

              <div className="flex flex-col space-y-2 mb-3">
                <div className="flex items-center text-xs text-muted-foreground">
                  <CalendarDays className="h-3.5 w-3.5 mr-1.5 text-primary/70" />
                  <span>Noviembre 2025</span>
                </div>
                <div className="flex items-center text-xs text-muted-foreground">
                  <Clock className="h-3.5 w-3.5 mr-1.5 text-primary/70" />
                  <span>Horario por confirmar</span>
                </div>
                <div className="flex items-center text-xs text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5 mr-1.5 text-primary/70" />
                  <span>Plaza Mayor, Alzira</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-3">
                <span className="px-2 py-0.5 bg-primary/10 text-primary text-xs rounded-full">Adopciones</span>
                <span className="px-2 py-0.5 bg-primary/10 text-primary text-xs rounded-full">Talleres</span>
                <span className="px-2 py-0.5 bg-primary/10 text-primary text-xs rounded-full">Actividades</span>
              </div>

              <div className="flex justify-between items-center mt-3 pt-3 border-t border-border/50">
                <div className="flex items-center">
                  <Sparkles className="h-4 w-4 mr-1 text-amber-500" />
                  <span className="text-xs">Edición ampliada</span>
                </div>
                <Button variant="outline" size="sm" asChild>
                  <a href="/events/feria-animalista-alzira-noviembre">
                    Más información <BellRing className="h-3 w-3 ml-1" />
                  </a>
                </Button>
              </div>
            </div>

            {/* For the "Coming Soon" indicator */}
            <div className="relative overflow-hidden">
              <div className="absolute -right-10 top-6 bg-primary text-primary-foreground text-xs py-1 px-10 rotate-45 transform">
                Próximamente
              </div>

              {/* The event card would go here */}
            </div>



          </div>

          {/* Bottom Footer */}
          <div className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row md:items-center md:justify-between">
            <p className="text-center text-xs text-muted-foreground md:text-left">
            <span className="flex items-center justify-center md:justify-start gap-1">
              {t('footer.copyright')} <Heart className="h-3 w-3 text-destructive" /> {t('footer.forAnimals')}
            </span>
            </p>
            <div className="mt-4 md:mt-0 flex justify-center space-x-6">
              <Link href="/about" className="text-xs text-muted-foreground hover:text-primary transition-colors">
                {t('common.aboutUs')}
              </Link>
              <Link href="/privacy" className="text-xs text-muted-foreground hover:text-primary transition-colors">
                {t('common.privacyPolicy')}
              </Link>
              <Link href="/terms" className="text-xs text-muted-foreground hover:text-primary transition-colors">
                {t('common.termsOfService')}
              </Link>
            </div>
          </div>
        </div>
      </footer>
  );
}