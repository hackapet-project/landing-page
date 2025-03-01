"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Mail, Code, Heart, Users, Share2, MessageSquare, Github, ExternalLink } from 'lucide-react';
import { useTranslation } from '@/lib/i18n';

export default function CollaboratePage() {
  const { t } = useTranslation();
  const emailAddress = "woof@hackapet.org";

  return (
      <div className="flex flex-col">
        {/* Hero Section */}
        <section className="relative py-20 sm:py-32 bg-muted/20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                {t('collaborate.hero.title')}
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                {t('collaborate.hero.description')}
              </p>
            </div>
          </div>
        </section>

        {/* Ways to Collaborate */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{t('collaborate.ways.title')}</h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                {t('collaborate.ways.description')}
              </p>
            </div>

            <Tabs defaultValue="skills" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList className="grid w-full max-w-md grid-cols-3">
                  <TabsTrigger value="skills">{t('collaborate.tabs.skills')}</TabsTrigger>
                  <TabsTrigger value="spread">{t('collaborate.tabs.spread')}</TabsTrigger>
                  <TabsTrigger value="join">{t('collaborate.tabs.join')}</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="skills">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      title: t('collaborate.skills.developer.title'),
                      description: t('collaborate.skills.developer.description'),
                      icon: <Code className="h-10 w-10 text-primary" />,
                      action: t('collaborate.skills.developer.action'),
                      link: "https://github.com/hackapet-project"
                    },
                    {
                      title: t('collaborate.skills.designer.title'),
                      description: t('collaborate.skills.designer.description'),
                      icon: <Heart className="h-10 w-10 text-primary" />,
                      action: t('collaborate.skills.designer.action'),
                      link: `mailto:${emailAddress}?subject=Designer Collaboration`
                    },
                    {
                      title: t('collaborate.skills.manager.title'),
                      description: t('collaborate.skills.manager.description'),
                      icon: <Users className="h-10 w-10 text-primary" />,
                      action: t('collaborate.skills.manager.action'),
                      link: `mailto:${emailAddress}?subject=Project Manager Collaboration`
                    },
                    {
                      title: t('collaborate.skills.communicator.title'),
                      description: t('collaborate.skills.communicator.description'),
                      icon: <Share2 className="h-10 w-10 text-primary" />,
                      action: t('collaborate.skills.communicator.action'),
                      link: `mailto:${emailAddress}?subject=Communicator Collaboration`
                    },
                    {
                      title: t('collaborate.skills.shelter.title'),
                      description: t('collaborate.skills.shelter.description'),
                      icon: <MessageSquare className="h-10 w-10 text-primary" />,
                      action: t('collaborate.skills.shelter.action'),
                      link: `mailto:${emailAddress}?subject=Shelter Collaboration`
                    },
                    {
                      title: t('collaborate.skills.contributor.title'),
                      description: t('collaborate.skills.contributor.description'),
                      icon: <Github className="h-10 w-10 text-primary" />,
                      action: t('collaborate.skills.contributor.action'),
                      link: "https://github.com/hackapet-project"
                    },
                  ].map((item, index) => (
                      <div
                          key={item.title}
                      >
                        <Card className="h-full flex flex-col">
                          <CardHeader>
                            <div className="mb-4">{item.icon}</div>
                            <CardTitle>{item.title}</CardTitle>
                            <CardDescription>{item.description}</CardDescription>
                          </CardHeader>
                          <CardFooter className="mt-auto">
                            <Button asChild variant="outline" className="w-full">
                              <a href={item.link}>{item.action}</a>
                            </Button>
                          </CardFooter>
                        </Card>
                      </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="spread">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">{t('collaborate.spread.title')}</h3>
                    <p className="text-muted-foreground mb-6">
                      {t('collaborate.spread.description')}
                    </p>

                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <div className="mr-4 mt-1">
                          <Share2 className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold">{t('collaborate.spread.social.title')}</h4>
                          <p className="text-muted-foreground">{t('collaborate.spread.social.description')}</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-4 mt-1">
                          <Users className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold">{t('collaborate.spread.events.title')}</h4>
                          <p className="text-muted-foreground">{t('collaborate.spread.events.description')}</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-4 mt-1">
                          <MessageSquare className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold">{t('collaborate.spread.blogs.title')}</h4>
                          <p className="text-muted-foreground">{t('collaborate.spread.blogs.description')}</p>
                        </div>
                      </li>
                    </ul>

                    <div className="mt-8">
                      <Button asChild>
                        <a href={`mailto:${emailAddress}?subject=Media Kit Request`}>{t('collaborate.spread.cta')}</a>
                      </Button>
                    </div>
                  </div>

                  <div className="relative h-[400px] overflow-hidden rounded-xl shadow-xl">
                    <Image
                        src="https://images.unsplash.com/photo-1517331156700-3c241d2b4d83?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                        alt={t('collaborate.spread.imageAlt')}
                        fill
                        className="object-cover"
                    />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="join">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                  <div className="relative h-[400px] overflow-hidden rounded-xl shadow-xl order-last lg:order-first">
                    <Image
                        src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                        alt={t('collaborate.join.imageAlt')}
                        fill
                        className="object-cover"
                    />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-4">{t('collaborate.join.title')}</h3>
                    <p className="text-muted-foreground mb-6">
                      {t('collaborate.join.description')}
                    </p>

                    {/*<h4 className="text-xl font-semibold mb-3">{t('collaborate.join.openings')}</h4>*/}
                    {/*<ul className="space-y-4 mb-8">*/}
                    {/*  <li className="p-4 border rounded-lg">*/}
                    {/*    <h5 className="font-semibold">{t('collaborate.join.position1.title')}</h5>*/}
                    {/*    <p className="text-sm text-muted-foreground">{t('collaborate.join.position1.description')}</p>*/}
                    {/*  </li>*/}
                    {/*  <li className="p-4 border rounded-lg">*/}
                    {/*    <h5 className="font-semibold">{t('collaborate.join.position2.title')}</h5>*/}
                    {/*    <p className="text-sm text-muted-foreground">{t('collaborate.join.position2.description')}</p>*/}
                    {/*  </li>*/}
                    {/*  <li className="p-4 border rounded-lg">*/}
                    {/*    <h5 className="font-semibold">{t('collaborate.join.position3.title')}</h5>*/}
                    {/*    <p className="text-sm text-muted-foreground">{t('collaborate.join.position3.description')}</p>*/}
                    {/*  </li>*/}
                    {/*</ul>*/}

                    {/*<Button asChild>*/}
                    {/*  <a href={`mailto:${emailAddress}?subject=Join Hackapet Team Application`}>{t('collaborate.join.cta')}</a>*/}
                    {/*</Button>*/}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Contact Section with Email Link instead of Form */}
        <section id="contact" className="py-16 sm:py-24 bg-muted/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{t('collaborate.contact.title')}</h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                {t('collaborate.contact.description')}
              </p>
            </div>

            <div className="mx-auto max-w-xl">
              <Card>
                <CardHeader>
                  <CardTitle>{t('collaborate.contact.form.title')}</CardTitle>
                  <CardDescription>
                    {t('collaborate.contact.form.description')}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col items-center text-center">
                  <Mail className="h-12 w-12 text-primary mb-4" />
                  <p className="text-lg mb-2">
                    {t('collaborate.contact.form.messagePlaceholder')}
                  </p>
                  <p className="text-xl font-bold mb-6">{emailAddress}</p>
                  <Button asChild size="lg" className="gap-2">
                    <a href={`mailto:${emailAddress}`}>
                      <Mail className="h-5 w-5" /> {t('collaborate.contact.form.submit')}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
  );
}