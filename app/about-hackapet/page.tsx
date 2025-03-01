"use client";

import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Check, ArrowRight, Heart, Target, Lightbulb, Sparkles, Github, Users } from 'lucide-react';
import { useTranslation } from '@/lib/i18n';

export default function AboutHackapetPage() {
  const { t } = useTranslation();
  
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 sm:py-32 bg-muted/20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              {t('aboutHackapet.hero.title')}
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              {t('aboutHackapet.hero.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Tabs defaultValue="mission" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-full max-w-md grid-cols-4">
                <TabsTrigger value="mission">{t('aboutHackapet.tabs.mission')}</TabsTrigger>
                <TabsTrigger value="vision">{t('aboutHackapet.tabs.vision')}</TabsTrigger>
                <TabsTrigger value="values">{t('aboutHackapet.tabs.values')}</TabsTrigger>
                <TabsTrigger value="roadmap">{t('aboutHackapet.tabs.roadmap')}</TabsTrigger>
              </TabsList>
            </div>
            
            {/* Mission Tab */}
            <TabsContent value="mission" className="space-y-8">
              <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                <div>
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">{t('aboutHackapet.mission.title')}</h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    {t('aboutHackapet.mission.description')}
                  </p>
                  
                  <p className="text-lg text-muted-foreground mb-8">
                    {t('aboutHackapet.mission.communities')}
                  </p>
                  
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="mr-4 mt-1">
                        <Check className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-muted-foreground">{t('aboutHackapet.mission.community1')}</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-4 mt-1">
                        <Check className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-muted-foreground">{t('aboutHackapet.mission.community2')}</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-4 mt-1">
                        <Check className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-muted-foreground">{t('aboutHackapet.mission.community3')}</p>
                      </div>
                    </li>
                  </ul>
                  
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mt-12 mb-6">{t('aboutHackapet.valueProposition.title')}</h2>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="mr-4 mt-1">
                        <Check className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-muted-foreground">{t('aboutHackapet.valueProposition.point1')}</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-4 mt-1">
                        <Check className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-muted-foreground">{t('aboutHackapet.valueProposition.point2')}</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-4 mt-1">
                        <Check className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-muted-foreground">{t('aboutHackapet.valueProposition.point3')}</p>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div className="space-y-8">
                  <div className="relative h-[300px] overflow-hidden rounded-xl shadow-xl">
                    <Image
                      src="https://images.unsplash.com/photo-1551730459-92db2a308d6a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                      alt={t('aboutHackapet.mission.imageAlt')}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-[300px] overflow-hidden rounded-xl shadow-xl">
                    <Image
                      src="https://images.unsplash.com/photo-1581888227599-779811939961?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                      alt={t('aboutHackapet.valueProposition.imageAlt')}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </TabsContent>
            
            {/* Vision Tab */}
            <TabsContent value="vision">
              <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                <div className="relative h-[500px] overflow-hidden rounded-xl shadow-xl order-last lg:order-first">
                  <Image
                    src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt={t('aboutHackapet.vision.imageAlt')}
                    fill
                    className="object-cover"
                  />
                </div>
                
                <div>
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">{t('aboutHackapet.vision.title')}</h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    {t('aboutHackapet.vision.description')}
                  </p>
                  
                  <h3 className="text-2xl font-bold mb-4">{t('aboutHackapet.vision.shortTerm')}</h3>
                  <div className="flex items-start mb-6">
                    <div className="mr-4 mt-1">
                      <Target className="h-6 w-6 text-primary" />
                    </div>
                    <p className="text-muted-foreground">
                      {t('aboutHackapet.vision.shortTermGoal')}
                    </p>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4">{t('aboutHackapet.vision.mediumTerm')}</h3>
                  <div className="flex items-start mb-6">
                    <div className="mr-4 mt-1">
                      <Target className="h-6 w-6 text-primary" />
                    </div>
                    <p className="text-muted-foreground">
                      {t('aboutHackapet.vision.mediumTermGoal')}
                    </p>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4">{t('aboutHackapet.vision.longTerm')}</h3>
                  <div className="flex items-start">
                    <div className="mr-4 mt-1">
                      <Target className="h-6 w-6 text-primary" />
                    </div>
                    <p className="text-muted-foreground">
                      {t('aboutHackapet.vision.longTermGoal')}
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            {/* Values Tab */}
            <TabsContent value="values">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">{t('aboutHackapet.coreValues.title')}</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  {t('aboutHackapet.coreValues.description')}
                </p>
              </div>
              
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: t('aboutHackapet.coreValues.value1.title'),
                    description: t('aboutHackapet.coreValues.value1.description'),
                    icon: <Heart className="h-10 w-10 text-primary" />
                  },
                  {
                    title: t('aboutHackapet.coreValues.value2.title'),
                    description: t('aboutHackapet.coreValues.value2.description'),
                    icon: <Users className="h-10 w-10 text-primary" />
                  },
                  {
                    title: t('aboutHackapet.coreValues.value3.title'),
                    description: t('aboutHackapet.coreValues.value3.description'),
                    icon: <Github className="h-10 w-10 text-primary" />
                  },
                  {
                    title: t('aboutHackapet.coreValues.value4.title'),
                    description: t('aboutHackapet.coreValues.value4.description'),
                    icon: <Lightbulb className="h-10 w-10 text-primary" />
                  },
                  {
                    title: t('aboutHackapet.coreValues.value5.title'),
                    description: t('aboutHackapet.coreValues.value5.description'),
                    icon: <Sparkles className="h-10 w-10 text-primary" />
                  },
                  {
                    title: t('aboutHackapet.coreValues.value6.title'),
                    description: t('aboutHackapet.coreValues.value6.description'),
                    icon: <Users className="h-10 w-10 text-primary" />
                  }
                ].map((value, index) => (
                  <div key={value.title}>
                    <Card className="h-full">
                      <CardContent className="pt-6 flex flex-col items-center text-center">
                        <div className="mb-4 p-3 rounded-full bg-primary/10">
                          {value.icon}
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                        <p className="text-muted-foreground">{value.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            {/* Roadmap Tab */}
            <TabsContent value="roadmap">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">{t('aboutHackapet.roadmap.title')}</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  {t('aboutHackapet.roadmap.description')}
                </p>
              </div>
              
              <div className="space-y-16">
                {/* PetSync */}
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">{t('aboutHackapet.roadmap.petSync.title')}</h3>
                    <p className="text-lg text-muted-foreground mb-6">
                      {t('aboutHackapet.roadmap.petSync.description')}
                    </p>
                    
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <div className="mr-4 mt-1">
                          <Check className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-muted-foreground">{t('aboutHackapet.roadmap.petSync.feature1')}</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-4 mt-1">
                          <Check className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-muted-foreground">{t('aboutHackapet.roadmap.petSync.feature2')}</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-4 mt-1">
                          <Check className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-muted-foreground">{t('aboutHackapet.roadmap.petSync.feature3')}</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-4 mt-1">
                          <Check className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-muted-foreground">{t('aboutHackapet.roadmap.petSync.feature4')}</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="relative h-[300px] overflow-hidden rounded-xl shadow-xl">
                    <Image
                      src="https://images.unsplash.com/photo-1576602976047-174e57a47881?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                      alt={t('aboutHackapet.roadmap.petSync.imageAlt')}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                
                {/* PetMatch */}
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                  <div className="relative h-[300px] overflow-hidden rounded-xl shadow-xl order-last lg:order-first">
                    <Image
                      src="https://images.unsplash.com/photo-1560743641-3914f2c45636?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                      alt={t('aboutHackapet.roadmap.petMatch.imageAlt')}
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold mb-4">{t('aboutHackapet.roadmap.petMatch.title')}</h3>
                    <p className="text-lg text-muted-foreground mb-6">
                      {t('aboutHackapet.roadmap.petMatch.description')}
                    </p>
                    
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <div className="mr-4 mt-1">
                          <Check className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-muted-foreground">{t('aboutHackapet.roadmap.petMatch.feature1')}</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-4 mt-1">
                          <Check className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-muted-foreground">{t('aboutHackapet.roadmap.petMatch.feature2')}</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-4 mt-1">
                          <Check className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-muted-foreground">{t('aboutHackapet.roadmap.petMatch.feature3')}</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                
                {/* AdopTrack */}
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">{t('aboutHackapet.roadmap.adopTrack.title')}</h3>
                    <p className="text-lg text-muted-foreground mb-6">
                      {t('aboutHackapet.roadmap.adopTrack.description')}
                    </p>
                    
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <div className="mr-4 mt-1">
                          <Check className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-muted-foreground">{t('aboutHackapet.roadmap.adopTrack.feature1')}</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-4 mt-1">
                          <Check className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-muted-foreground">{t('aboutHackapet.roadmap.adopTrack.feature2')}</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-4 mt-1">
                          <Check className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-muted-foreground">{t('aboutHackapet.roadmap.adopTrack.feature3')}</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="relative h-[300px] overflow-hidden rounded-xl shadow-xl">
                    <Image
                      src="https://images.unsplash.com/photo-1601758174114-e711c0cbaa69?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                      alt={t('aboutHackapet.roadmap.adopTrack.imageAlt')}
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