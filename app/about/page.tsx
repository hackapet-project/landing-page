"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Github, Globe } from 'lucide-react';
import { useTranslation } from '@/lib/i18n';

// Team members data
const teamMembers = [
  {
    name: 'Carol Domenech',
    role: 'UX/UI Designer',
    image: 'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80',
    social: [
      { icon: <Linkedin className="h-5 w-5" />, url: 'https://linkedin.com' },
    ],
  },
  {
    name: 'Diego Rejón',
    role: 'FullStack Developer',
    image: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80',
    social: [
      { icon: <Github className="h-5 w-5" />, url: 'https://github.com' },
      { icon: <Globe className="h-5 w-5" />, url: 'https://example.com' },
      { icon: <Linkedin className="h-5 w-5" />, url: 'https://linkedin.com' },
    ],
  },
  {
    name: 'Empar Salvador',
    role: 'Lead UX/UI Designer',
    image: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80',
    social: [
      { icon: <Linkedin className="h-5 w-5" />, url: 'https://linkedin.com' },
    ],
  },
  {
    name: 'Felipe Gadea',
    role: 'Organizer & Lead iOS Developer',
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80',
    social: [
      { icon: <Github className="h-5 w-5" />, url: 'https://github.com' },
      { icon: <Linkedin className="h-5 w-5" />, url: 'https://linkedin.com' },
    ],
  },
  {
    name: 'Georgina',
    role: 'Frontend Developer',
    image: 'https://images.unsplash.com/photo-1581888227599-779811939961?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80',
    social: [
      { icon: <Github className="h-5 w-5" />, url: 'https://github.com' },
      { icon: <Linkedin className="h-5 w-5" />, url: 'https://linkedin.com' },
    ],
  },
  {
    name: 'Ignacio Delgado',
    role: 'Android Developer',
    image: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80',
    social: [
      { icon: <Github className="h-5 w-5" />, url: 'https://github.com' },
      { icon: <Linkedin className="h-5 w-5" />, url: 'https://linkedin.com' },
    ],
  },
];

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState("team");
  const { t } = useTranslation();
  
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 sm:py-32 bg-muted/20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              {t('about.hero.title')}
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              {t('about.hero.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Tabs defaultValue="team" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-full max-w-md grid-cols-2">
                <TabsTrigger value="team">{t('about.tabs.team')}</TabsTrigger>
                <TabsTrigger value="mission">{t('about.tabs.mission')}</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="team" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">{t('about.team.title')}</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  {t('about.team.description')}
                </p>
              </div>
              
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {teamMembers.map((member, index) => (
                  <div
                    key={member.name}
                  >
                    <Card className="overflow-hidden">
                      <div className="aspect-square relative overflow-hidden bg-muted">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover transition-transform hover:scale-105"
                        />
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold">{member.name}</h3>
                        <p className="text-sm text-muted-foreground mb-4">{member.role}</p>
                        <div className="flex space-x-3">
                          {member.social.map((item, i) => (
                            <a 
                              key={i} 
                              href={item.url} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-muted-foreground hover:text-primary transition-colors"
                            >
                              {item.icon}
                            </a>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="mission">
              <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                <div>
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">{t('about.mission.title')}</h2>
                  <p className="text-lg text-muted-foreground mb-8">{t('about.mission.content')}</p>
                  
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">{t('about.values.title')}</h2>
                  <p className="text-lg text-muted-foreground mb-8">{t('about.values.content')}</p>
                  
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">{t('about.story.title')}</h2>
                  <p className="text-lg text-muted-foreground">{t('about.story.content')}</p>
                </div>
                
                <div className="space-y-8">
                  <div className="relative h-[300px] overflow-hidden rounded-xl shadow-xl">
                    <Image
                      src="https://images.unsplash.com/photo-1548767797-d8c844163c4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                      alt={t('about.mission.imageAlt')}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-[300px] overflow-hidden rounded-xl shadow-xl">
                    <Image
                      src="https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                      alt={t('about.values.imageAlt')}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}